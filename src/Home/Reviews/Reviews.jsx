
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {

    return (
        <div >


            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
                <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-2xl p-8 ">
                    <FaQuoteLeft className="w-11 h-11 " />
                    <p className="text-2xl font-bold font-playfair-display mt-5 text-[#aa8453]">Sarah:</p>
                    <p className=" font-normal  mt-6">
                        Exceptional service from start to finish! The team at Luxury Estates guided us through every step of the process with professionalism and expertise. Their attention to detail and dedication to exceeding expectations truly set them apart. Highly recommend for anyone seeking top-tier real estate services.
                    </p>
                    <div className="rating rating-sm  mt-5">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>
                <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-2xl p-8 ">
                    <FaQuoteLeft className="w-11 h-11 " />
                    <p className="text-2xl font-bold font-playfair-display mt-5 text-[#aa8453]">Josh:</p>
                    <p className=" font-normal  mt-6">
                        Exceptional service from start to finish! The team at Luxury Estates guided us through every step of the process with professionalism and expertise. Their attention to detail and dedication to exceeding expectations truly set them apart. Highly recommend for anyone seeking top-tier real estate services.
                    </p>
                    <div className="rating rating-sm  mt-5">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>
                <div className="card w-[90%]  lg:w-96  bg-base-100 shadow-2xl p-8 ">
                    <FaQuoteLeft className="w-11 h-11 " />
                    <p className="text-2xl font-bold font-playfair-display mt-5 text-[#aa8453]">Sarah:</p>
                    <p className=" font-normal  mt-6">
                        Exceptional service from start to finish! The team at Luxury Estates guided us through every step of the process with professionalism and expertise. Their attention to detail and dedication to exceeding expectations truly set them apart. Highly recommend for anyone seeking top-tier real estate services.
                    </p>
                    <div className="rating rating-sm  mt-5">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>
            </div>

        </div>

    );
};

export default Reviews;