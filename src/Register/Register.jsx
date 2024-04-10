import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";


const Register = () => {
    
    const [eye, setEye] = useState(true);


    const handleEye = (e) =>{
        e.preventDefault();
        setEye(!eye);
    }
    return (
        <div className="hero min-h-[90%] mx-auto bg-[#F8F5F0]">
            <div  data-aos="fade-right" data-aos-duration="500">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card shrink-0 w-3/4 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder=" Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={eye? "password" : "text" } name="password" placeholder="Password" className="input input-bordered" required />
                                <button onClick={handleEye}>
                                    {
                                       eye? <IoMdEye className="absolute right-3 bottom-3 w-6 h-6" /> :  <IoMdEyeOff className="absolute right-3 bottom-3 w-6 h-6" />
                                    }
                                </button>

                            </div>
                            <p>If you have an account then <Link to='/login' className="text-[#aa8453] font-bold font-playfair-display">Login.....</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#aa8453] text-white">Register Now</button>
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