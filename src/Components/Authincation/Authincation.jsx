import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import auth from './Firebase.init.js/Firebase.init';
import axios from 'axios';


export const AuthContext = createContext(null);

const Authincation = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loding, setloding] = useState(true);

  const signupUser = (email, password) => {
    setloding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setloding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignoutUser = () => {
    setloding(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photoURL) => {
    if (!auth.currentUser) return Promise.reject('No user logged in');
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL || null,
    });
  };

  // Google login function
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    setloding(true);
    return signInWithPopup(auth, provider);
  };

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    console.log('Current user:', user);
    setCurrentUser(user);

    if (user?.email) {
      const emailUser = { email: user.email };

      // 🔐 Send JWT token
      axios.post('http://localhost:5000/jwt', emailUser, { withCredentials: true })
        .then(res => {
          console.log('JWT sent, token stored in cookie:', res.data);
        })
        .catch(error => {
          console.error('JWT error:', error.message);
        });

      // ⬇️ Backend user creation or update
      const backendUser = {
        name: user.displayName || 'Unnamed User',
        email: user.email,
        photoURL: user.photoURL || '',
        uid: user.uid,
        createdAt: new Date().toISOString()
      };

      try {
        await axios.post('http://localhost:5000/users', backendUser);
        console.log('User info saved to DB');
      } catch (error) {
        console.error('User info save error:', error.message);
      }

    } else {
      // 🔐 Remove cookie on logout
      axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
        .then(data => console.log('Logout success:', data.data))
        .catch(error => console.error('Logout error:', error.message));
    }

    // 🔄 Force user refresh
    if (user) {
      await user.reload();
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }

    setloding(false);
  });

  return () => unsubscribe();
}, []);




  //  


  const Authinfo = {
    signupUser,
    Login,
    SignoutUser,
    updateUserProfile,
    googleLogin,
    currentUser,
    loding
  };

  return (
    <AuthContext.Provider value={Authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authincation;
