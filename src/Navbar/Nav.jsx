import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/ContextProvider";


const Nav = () => {


    const {user, Information , name, email, photo, Logout} = useContext(AuthContext);
    console.log(name, email, photo); 

    return (
        <div>
            <div id="navbar" className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453]  font-playfair-display" to='/'>Home</Link>
                            {/* <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/about'>About Us</Link> */}
                            {/* <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/contact'>Contact Us</Link> */}
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/user'>User Profile</Link>
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/update'>Update Profile</Link>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453]  font-playfair-display" to='/'>Home</Link>
                            {/* <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/about'>About Us</Link> */}
                            {/* <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/contact'>Contact Us</Link> */}
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/user'>User Profile</Link>
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/update'>Update Profile</Link>
                            <Link className="hover:border hover:border-[#aa8453] btn bg-white border-0 hover:bg-white hover:text-[#aa8453] font-playfair-display" to='/register'>Register</Link>

                        </ul>
                    </div>
                </div>
                <Link to="/" className="flex flex-col gap-0">
                    <p className="text-3xl text-[#b78f63] font-semibold"><i>ROYALTY</i></p>
                    <p className="text-lg font-semibold"><i>Estate</i></p>
                </Link>

                <div className="navbar-end">
                    <div className="mr-1 md:mr-3 border-2 rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center border-[#b78f63] tooltip" data-tip={name}>
                        {
                            user ? <img src={photo} alt="User's Photo" className="w-full h-full rounded-full" /> : <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                        }
                    </div>
                    {
                        user ? <button onClick={Logout} className="btn w-15 md:w-20 bg-[#aa8453] text-[#fff] font-playfair-display">Logout</button> : <Link to="/login" className="btn w-15 md:w-20 bg-[#aa8453] text-[#fff] font-playfair-display">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;