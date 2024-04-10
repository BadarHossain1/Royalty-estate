import Banner from "./Banner/Banner";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";
import Stats from "./Stats/Stats";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className="bg-[#F8F5F0] w-full mt-[100px]">
                <Portfolio></Portfolio>

            </div>
            <div className="mt-[100px]">
                <Reviews></Reviews>

            </div>
            <div className="mt-[150px] mx-auto">
                <Stats></Stats>

            </div>

        </div>
    );
};

export default Home;