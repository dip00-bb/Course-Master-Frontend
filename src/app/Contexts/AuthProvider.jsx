"use client"

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, User } from 'firebase/auth';
import React, { ReactNode, useEffect, useState } from 'react';
import { auth } from '@/app/Firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider= ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider;

    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    // log out
    const signout = () => {
        return signOut(auth)
    }

    // create user with email and password

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUser = (name) => {
        if (!auth.currentUser) {
            return Promise.reject(new Error("No user is logged in"));
        }
        return updateProfile(auth.currentUser, { displayName: name });
    }

    // login user
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        };
    }, []);



    const authInformation = {
        googleLogin,
        setUser,
        signout,
        registerUser,
        updateUser,
        userLogIn,
        user,
        isLoading,
    }


    return (
        <AuthContext value={authInformation}>
            {children}
        </AuthContext>
    )

};

export default AuthProvider;