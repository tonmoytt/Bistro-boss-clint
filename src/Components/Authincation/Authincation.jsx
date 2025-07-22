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

  const Signup = (email, password) => {
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

        axios.post('http://localhost:5000/jwt', emailUser, { withCredentials: true })
          .then(res => {
            console.log('JWT sent, token stored in cookie:', res.data);
          })
          .catch(error => {
            console.error('JWT error:', error.message);
          })
          .finally(() => setloding(false));
      } else {
        axios.post('http://localhost:5000/logout', {}, { withCredentials: true })
          .then(data => console.log('Logout success:', data.data))
          .catch(error => console.error('Logout error:', error.message))
          .finally(() => setloding(false));
      }

      // jwt token created successfully and stored in cookies





      // normally photo URL an displayname after login functionnaly code
      
      if (user) {
        await user.reload();
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }



    });

    return () => unsubscribe(); // ✅ This must be outside the auth listener
  }, []);



  //  


  const Authinfo = {
    Signup,
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
