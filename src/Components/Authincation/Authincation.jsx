import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './Firebase.init.js/Firebase.init';

export const AuthContext = createContext(null)
const Authincation = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loding, setloding] = useState(true);


    const Signup = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) => {
          setloding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const SignoutUser = () => {
          setloding(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('current user', user);
            setCurrentUser(user);
              setloding(false)
        });

        return () => unsubscribe();
    }, []);

    const Authinfo = { Signup,Login,SignoutUser,currentUser,loding }

    return (
        <div>
            <AuthContext.Provider value={Authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authincation;