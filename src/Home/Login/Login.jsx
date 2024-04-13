import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form"

import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../Provider/ContextProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
import { Helmet } from "react-helmet-async";

const Login = () => {

    const{   Login, GoogleSignIn, setInfo, FacebookSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in login page', location);

    const [eye, setEye] = useState(true);


    
    const notify =(success) =>{
        if(success){
            toast.success('Login Completed. Welcome', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }
        else{
            toast.error('Failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                
                });

        }
    }


    const handleEye = (e) =>{
        e.preventDefault();
        setEye(!eye);
    }


    const {
        register,
        handleSubmit,
        
        
      } = useForm()

    const onSubmit = (data) => {
        
        Login(data.Email, data.Password)
        .then(result=>{
            const user = result.user;

            console.log("user signed with google", user);
            // const{displayName, photoURL} = user;
            // setInfo({displayName:displayName, photoURL:photoURL})
            
            navigate(location?.state || '/')
            notify(true);

            

            
        })
        .catch(error =>{
            console.log(error);
            notify(false);
            
        })    
    
    
    
    }

    const handleGoogle = (e)=>{
        e.preventDefault();
        GoogleSignIn().
        then(result =>{
            const user = result.user;

            console.log("user signed with google", user);
            const{displayName, photoURL} = user;
            setInfo({displayName:displayName, photoURL:photoURL})

            navigate(location?.state || '/')
            
            
            notify(true)
        })
        .catch(error =>{
            console.log(error);
            notify(false);
        })

        
        
    }


    const handleFacebook = (e)=>{
        e.preventDefault();
        FacebookSignIn().
        then(result =>{
            const user = result.user;

            console.log("user signed with google", user);
            const{displayName, photoURL} = user;
            setInfo({displayName:displayName, photoURL:photoURL})

            navigate(location?.state || '/')
            
            
            notify(true)
        })
        .catch(error =>{
            console.log(error);
            notify(false);
        })

        
        
    }

    return (
        <div className="hero min-h-[90%] mx-auto bg-[#F8F5F0]">
            <Helmet>
                <title>LogIn</title>
            </Helmet>
            <div  data-aos="fade-left" data-aos-duration="500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-2/4">
                        <h1 className="text-5xl font-bold text-[#aa8453] font-playfair-display">Login</h1>

                    </div>

                    <div className="card shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"    {...register("Email", { required: true })} />
                                
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eye? "password" : "text" } name="password" placeholder="Password" className="input input-bordered" {...register("Password", { required: true })} />
                               
                                <button onClick={handleEye}>
                                    {
                                       eye? <IoMdEye className="absolute right-3 bottom-3 w-6 h-6" /> :  <IoMdEyeOff className="absolute right-3 bottom-3 w-6 h-6" />
                                    }
                                </button>
                                

                            </div>
                            <p className="text-center mt-2 font-semibold">Or Login With:</p>
                                <div className="flex justify-center gap-6 mt-2">
                                    <button onClick={handleGoogle} className="btn btn-circle">
                                        <FaGoogle />
                                    </button>
                                    <button onClick={handleFacebook} className="btn btn-circle">
                                        <FaFacebook />
                                    </button>
                                </div>

                            <p>Do not have an account? <Link to='/register' className="text-[#aa8453] font-bold font-playfair-display">Register....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#aa8453] text-white">Login Now</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;