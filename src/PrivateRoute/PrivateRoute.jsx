import { useContext } from "react";
import { AuthContext } from "../Provider/ContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);



    if (loading) {
        return  <div className="w-full h-full flex justify-center items-center"><span className="loading loading-spinner loading-xl bg-[#aa8453]"></span></div>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>
            {children}
        </div>
    );

};

export default PrivateRoute;