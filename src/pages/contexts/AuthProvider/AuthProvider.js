import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    // create a new user
    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log in user
    const login = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log in with google
    const loginWithGoogle = (email, password) => {
        setLoading(false)
        return  signInWithPopup(auth, googleProvider)
    }

    // add user profile picture and name
    const updateUserProfile = (profile) => {
        setLoading(false)
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    } , [])
    

    const authInfo = {
        createUser,
        user,
        login,
        logOut,
        updateUserProfile,
        loading,
        setLoading,
        loginWithGoogle
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;