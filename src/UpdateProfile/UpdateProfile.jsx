
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useContext } from "react";
import { AuthContext } from "../Provider/ContextProvider";

const UpdateProfile = () => {

    const { updateUserProfile, user } = useContext(AuthContext);
    console.log(user);



    const notify = (success) => {
        if (success) {
            toast.success('Profile Updated', {
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
        else {
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


    const {
        register,
        handleSubmit,


    } = useForm()

    const onSubmit = (data) => {

        updateUserProfile(data.FullName, data.Photo)
            .then(() => {
                console.log('It worked');
                console.log(data.FullName, data.Photo)

                notify(true);




            })
            .catch(error => {
                console.log(error);
                notify(false);

            })



    }






    return (
        <div className="hero min-h-[90%] mx-auto bg-[#F8F5F0]">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 pt-8 mb-6">
                <p className="text-4xl text-[#aa8453]  font-bold mx-auto font-playfair-display">Update Profile</p>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-[#aa8453] mx-auto mt-5">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="FullName" className="input input-bordered" value={user?.displayName}  {...register("FullName", { required: false })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered " disabled value={user?.email || 'Email Unavailable'} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Photo" className="input input-bordered" value={user?.photoURL} {...register("Photo", { required: false })} />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#aa8453] text-white">Update</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;