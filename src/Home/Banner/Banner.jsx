
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';





const Banner = () => {
    return (
        <div className="rounded-2xl">
            <Swiper pagination={{
                dynamicBullets: true,
            }}
                modules={[Pagination]} className="mySwiper  w-full h-[550px]  ">
                <SwiperSlide><div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/JzSWXp9/mansion-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]  text-center" >Discover Your Dream Home <br />
                                in the Lap of Luxury</p>
                            <button className=""><a href="#portfolio" className="scroll-to-top-btn btn btn-ghost bg-[#aa8453] text-white mt-20 ">
                                Our Listings
                            </a></button>
                        </div>
                    </div>
                </div></SwiperSlide>

                <SwiperSlide>
                    <div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/nDvCqxb/Resort.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]  text-center" >Discover Your Dream Home <br />
                                    in the Lap of Luxury</p>
                                <button className=""><a href="#portfolio" className="scroll-to-top-btn btn btn-ghost bg-[#aa8453] text-white mt-20 ">
                                    Our Listings
                                </a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/db4660F/mansion-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]  text-center" >Discover Your Dream Home <br />
                                    in the Lap of Luxury</p>
                                <button className=""><a href="#portfolio" className="scroll-to-top-btn btn btn-ghost bg-[#aa8453] text-white mt-20 ">
                                    Our Listings
                                </a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero w-full h-[550px]" style={{ backgroundImage: 'url(https://i.ibb.co/6PK3hQ0/Villa.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <p className="text-4xl  md:text-7xl  font-extrabold font-playfair-display text-[#fff]  text-center" >Discover Your Dream Home <br />
                                    in the Lap of Luxury</p>
                                <button className=""><a href="#portfolio" className="scroll-to-top-btn btn btn-ghost bg-[#aa8453] text-white mt-20 ">
                                    Our Listings
                                </a></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;