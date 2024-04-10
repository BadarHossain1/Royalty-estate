import Banner from "./Banner/Banner";
import Portfolio from "./Portfolio/Portfolio";
import Reviews from "./Reviews/Reviews";

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

        </div>
    );
};

export default Home;