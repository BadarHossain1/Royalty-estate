import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form"
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {

    const [eye, setEye] = useState(true);


    const handleEye = (e) =>{
        e.preventDefault();
        setEye(!eye);
    }


    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()

    const onSubmit = (data) => {console.log(data)}

    return (
        <div className="hero min-h-[90%] mx-auto bg-[#F8F5F0]">
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
                                <input type="email" name="email" placeholder="Email" className="input input-bordered"    {...register("FullName", { required: true })} />
                                {errors.FullName && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eye? "password" : "text" } name="password" placeholder="Password" className="input input-bordered" {...register("Password", { required: true })} />
                                {errors.Password && <span className="text-red-600">This field is required</span>}
                                <button onClick={handleEye}>
                                    {
                                       eye? <IoMdEye className="absolute right-3 bottom-3 w-6 h-6" /> :  <IoMdEyeOff className="absolute right-3 bottom-3 w-6 h-6" />
                                    }
                                </button>
                                

                            </div>
                            <p className="text-center mt-2 font-semibold">Or Login With:</p>
                                <div className="flex justify-center gap-6 mt-2">
                                    <button className="btn btn-circle">
                                        <FaGoogle />
                                    </button>
                                    <button className="btn btn-circle">
                                        <FaFacebook />
                                    </button>
                                </div>

                            <p>Do not have an account? <Link to='/register' className="text-[#aa8453] font-bold font-playfair-display">Register....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#aa8453] text-white">Login Now</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;