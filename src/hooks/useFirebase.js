import { useEffect, useState } from "react";
import initializeFirebaseAuth from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";

initializeFirebaseAuth();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handle Google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Sign Up With Email Password
    const signUp = () => {
        if (password.length < 6) {
            setError("Password should be at least 6 characters")
            return;
        }
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Sign In With Email Password
    const signInUsingEmailPassword = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Set User Name
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        setError,
        setUserName,
        setUser,
        setIsLoading,
        setName,
        setEmail,
        setPassword,
        signInUsingGoogle,
        signUp,
        signInUsingEmailPassword,
        logOut
    }
}

export default useFirebase;