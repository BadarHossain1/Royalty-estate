import Banner from "./Banner/Banner";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";
import Stats from "./Stats/Stats";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    return (
        <div>

            <div className="">
                <Banner></Banner>
            </div>
            <div className="bg-[#F8F5F0] w-full  mt-[100px]">
                <Portfolio></Portfolio>

            </div>
            <div className="mt-[100px]" data-aos="zoom-in" data-aos-duration="2000">
                <Reviews></Reviews>

            </div>
            <div className="mt-[150px] mx-auto" data-aos="zoom-in" data-aos-duration="2000">
                <Stats></Stats>

            </div>

        </div>
    );
};

export default Home;