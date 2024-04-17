
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {

    return (
        <div 
            
            >
            <p className="text-black text-2xl lg:text-4xl  font-playfair-display font-semibold w-full text-center  mb-16 underline  pt-10">Our <span className="text-[#aa8453]">Happy</span> Clients</p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
                <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-2xl p-8 ">
                    <FaQuoteLeft className="w-11 h-11 " />
                    <p className="text-2xl font-bold font-playfair-display mt-5 text-[#aa8453]">Sarah:</p>
                    <p className=" font-normal  mt-6">
                        Exceptional service from start to finish! The team at Royalty Estates guided us through every step of the process with professionalism and expertise. Their attention to detail and dedication to exceeding expectations truly set them apart. Highly recommend for anyone seeking top-tier real estate services.
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
                        Working with Royalty Estates was a dream come true. Their team provided unparalleled support and expertise throughout the entire buying process. From identifying our needs to negotiating the deal, they demonstrated a level of commitment and integrity that made us feel confident every step of the way
                    </p>
                    <div className="rating rating-sm  mt-5">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>


                </div>
                <div className="card w-[90%] mx-auto  lg:w-96  bg-base-100 shadow-2xl p-8 ">
                    <FaQuoteLeft className="w-11 h-11 " />
                    <p className="text-2xl font-bold font-playfair-display mt-5 text-[#aa8453]">Zoro:</p>
                    <p className=" font-normal  mt-6">
                        Our experience with Royalty Estates was nothing short of extraordinary. From the moment we connected with their team, we were impressed by their personalized approach and deep knowledge of the luxury real estate market. They went above and beyond to find us the perfect property.
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