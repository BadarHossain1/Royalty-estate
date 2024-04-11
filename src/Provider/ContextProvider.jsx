import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();


const ContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [info, setInfo] = useState(null);

    const registerUser = (email,password) =>{

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const GoogleSignIn = () =>{
        return signInWithPopup(auth, provider);
    }

    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);

    }

    const Logout = () =>{
        return signOut(auth);
    }

    

    const Information = (info) =>{
        setInfo(info);
        console.log(info); 
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log('User Changed', currentUser);
            setUser(currentUser);

            


        })

        return  () =>{
            unsubscribe();
        }
        
    },[])


    const authInfo = {
        user, Information, info,
        auth, registerUser, Login, Logout, GoogleSignIn
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