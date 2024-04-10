import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";

const auth = getAuth();

export const AuthContext = createContext(null);


const ContextProvider = ({children}) => {

    const register = (email,password) =>{

        return createUserWithEmailAndPassword(auth, email, password);

    }

    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);

    }

    const Logout = () =>{
        return signOut(auth);
    }


    const authInfo = {
        auth, register, Login, Logout
    }

    return (
        <div>
            <AuthContext.Provider value={}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;