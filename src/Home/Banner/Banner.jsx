
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





const Banner = () => {
    return (
        <div>
            <Swiper pagination={{
                dynamicBullets: true,
            }}
                modules={[Pagination]} className="mySwiper  w-full h-[550px]  ">
                <SwiperSlide><div className="bg-cover bg-center   w-full h-full flex items-center justify-center " style={{ backgroundImage: "url('https://i.ibb.co/JzSWXp9/mansion-1.jpg')", backgroundColor: "rgba(0, 0, 0, 0.65)" }}>
                    <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]  text-center" >Discover Your Dream Home <br />
                        in the Lap of Luxury</p>

                </div></SwiperSlide>

                <SwiperSlide>
                    <div className="bg-cover bg-center  bg-[url('https://i.ibb.co/nDvCqxb/Resort.jpg')] w-full h-full flex items-center justify-center ">
                        <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff] text-center" >Discover Your Dream Home <br />
                            in the Lap of Luxury</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center bg-opacity-50  bg-[url('https://i.ibb.co/db4660F/mansion-2.jpg')] w-full h-full flex items-center justify-center ">
                        <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff] text-center" >Discover Your Dream Home <br />
                            in the Lap of Luxury</p>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cover bg-center  bg-[url('https://i.ibb.co/6PK3hQ0/Villa.jpg')] w-full h-full flex items-center justify-center ">
                        <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff] text-center" >Discover Your Dream Home <br />
                            in the Lap of Luxury</p>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;