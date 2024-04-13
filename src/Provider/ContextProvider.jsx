import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
          
    }

    const GoogleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const Logout = () => {
        setUser(null);
         signOut(auth);
    }

   
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                console.log("User changed", currentUser);
                setUser(currentUser);

            }
        })

        return () => {
            unsubscribe();
        }
        
    }, [])

    const authInfo = {
        user,
        auth,
        registerUser,
        Login,
        Logout,
        GoogleSignIn, 
        updateUserProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;
