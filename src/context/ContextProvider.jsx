
import { createContext, useContext, useEffect, useReducer, useRef, useState } from "react";
import app from "../firebase/firebase.config";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import CartReducer from "../featurs/CartReducer";
export const AuthContext = createContext();
const auth = getAuth(app);






const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const userFullName = (registeredUser, fname, lname) => {
        setLoading(true);
        return updateProfile(registeredUser, {
            displayName: fname + ' ' + lname,
        });
    };

    const loginEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };



    const timeoutRef = useRef(null);

    // Function to log out the user
    const logOut = () => {
        setLoading(true);
        toast.success("User logout successfully!")
        return signOut(auth);
    };

    // Function to reset the inactivity timer
    const resetInactivityTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            logOut();
        }, 6000000); // 60 s
    };

    useEffect(() => {
        const handleUserActivity = () => {
            resetInactivityTimer();
        };

        window.addEventListener("mousemove", handleUserActivity);
        window.addEventListener("keypress", handleUserActivity);
        resetInactivityTimer();
        return () => {
            if (timeoutRef.current) {
                setLoading(true);
                clearTimeout(timeoutRef.current);
                setLoading(false);
            }
            window.removeEventListener("mousemove", handleUserActivity);
            window.removeEventListener("keypress", handleUserActivity);
        };
    }, []);

    // observer user auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(true);
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting
        return () => {
            return unsubscribe();
        };
    }, []);



    //Add to cart system
    const [cart, dispatch] = useReducer(CartReducer, []);








    const authInfo = {
        auth,
        user,
        createUser,
        userFullName,
        loading,
        setLoading,
        logOut,
        loginEmailPassword,
        googleSignIn,
        cart,
        dispatch
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default ContextProvider;