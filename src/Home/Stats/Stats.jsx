

const Stats = () => {
    return (
        <div>
            <p className="font-playfair-display font-extrabold text-2xl md:text-4xl text-center underline">Our <span className="text-[#aa8453]">Stats</span></p>
            <p className="font-serif font-normal mt-5 text-center w-[350px] md:w-[500px] mx-auto">Our stats reflect a robust performance in both sales and visits, showcasing the effectiveness of our strategies and the resonance of our offerings with our audience. The synergy between our sales initiatives and visitor engagement underscores our commitment to delivering exceptional value and experiences.</p>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full rounded-lg text-center mt-9 ">

                <div className="stat">
                    <div className="stat-title">Sales</div>
                    <div className="stat-value text-[#aa8453]">$100M</div>
                    <div className="stat-desc">2020-2024</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Sales</div>
                    <div className="stat-value text-[#aa8453]">$80M</div>
                    <div className="stat-desc">In 2024</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Visits</div>
                    <div className="stat-value text-[#aa8453]">1,200</div>
                    <div className="stat-desc">All Time</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;