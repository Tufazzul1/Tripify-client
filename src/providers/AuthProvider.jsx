import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

// social providr 
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const signIn  = (email, password) => {
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log('Current user', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    })
 
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;