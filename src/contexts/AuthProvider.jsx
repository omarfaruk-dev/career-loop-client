import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
// import axios from 'axios';

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (updatedData) => {
        updateProfile(auth.currentUser, updatedData)
    }

    const signOutUser = () => {
        return signOut(auth)
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            // if (currentUser?.email) {
            //     const userData = { email: currentUser.email };
            //     axios.post('https://career-loop-server.vercel.app/jwt', userData, {
            //         withCredentials: true
            //     })
            //         .then(res => {
            //             console.log('Token after jwt: ', res.data);
            //         })
            //         .catch(error => console.log(error))
            // }
        })
        return () => {
            unsubscribe;
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        loading,
        setLoading,
        updateUser,
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;