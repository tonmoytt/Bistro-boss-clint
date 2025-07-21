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
      if (user) {
        await user.reload();  // fresh profile data load
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
      setloding(false);
    });

    return () => unsubscribe();
  }, []);

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
