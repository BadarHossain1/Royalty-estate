import Banner from "./Banner/Banner";
import Portfolio from "./Portfolio/Portfolio";

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className="bg-[#F8F5F0] w-full mt-[100px]">
                <Portfolio></Portfolio>

            </div>

        </div>
    );
};

export default Home;