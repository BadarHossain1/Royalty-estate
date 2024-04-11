import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useContext, useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../Provider/ContextProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 

const Register = () => {
    const {Information, registerUser, GoogleSignIn} = useContext(AuthContext);
    const [eye, setEye] = useState(true);
    const [success, setSuccess] = useState(false);
    
    const notify = (success) => {
        if(success){
            toast.success('User Created Successfully', {
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
        } else {
            toast.error('Failed Creating User', {
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

    const handleEye = (e) => {
        e.preventDefault();
        setEye(!eye);
    }

    const { register, handleSubmit } = useForm();



    const onSubmit =  (data) => {
        

        registerUser(data.Email, data.Password)
        .then(result => {
            console.log(result.user);
            setSuccess(true);
            notify(true);
        })
        .catch(error =>{
            console.log(error)
            notify(false);
        })

        Information(data);
    };


    const handleGoogle = (e)=>{
        e.preventDefault();
        GoogleSignIn().
        then(result =>{
            const user = result.user;

            console.log("user signed with google", user);
            const {displayName, photoURL, email} = user;
            console.log(displayName, email);
            const data = {
                name: displayName,
                photo: photoURL,
                email: email
            }
            Information(data);
            notify(true)
        })
        .catch(error =>{
            console.log(error);
            notify(false);
        })

        
        
    }

    return (
        <div className="hero min-h-[90%] mx-auto bg-[#F8F5F0]">
            <div data-aos="fade-right" data-aos-duration="500">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="card shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder=" Name" className="input input-bordered" {...register("FullName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"  {...register("Email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo" className="input input-bordered"  {...register("Photo", { required: true })} />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eye ? "password" : "text"} name="password" placeholder="Password" className="input input-bordered" {...register("Password", { required: true })} />
                                <button onClick={handleEye}>
                                    {eye ? <IoMdEye className="absolute right-3 bottom-3 w-6 h-6 " /> : <IoMdEyeOff className="absolute right-3 bottom-3 w-6 h-6" />}
                                </button>
                            </div>
                            <p className="text-center mt-5 font-semibold">Or Register With:</p>
                            <div className="flex justify-center gap-6 mt-4">
                                <button onClick={handleGoogle} className="btn btn-circle">
                                    <FaGoogle />
                                </button>
                                <button className="btn btn-circle">
                                    <FaFacebook />
                                </button>
                            </div>
                            <p>If you have an account then <Link to='/login' className="text-[#aa8453] font-bold font-playfair-display">Login.....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#aa8453] text-white">Register Now</button>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left w-2/4">
                        <h1 className="text-5xl font-bold text-[#aa8453] font-playfair-display">Register</h1>
                        <p>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
