import { useEffect, useState } from "react";
import Card from "./Card";


const Portfolio = () => {


    const [datas, setData] = useState([]);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    return (
        <div id="portfolio" className="mt-6">
            <p className="text-black text-2xl lg:text-4xl  font-playfair-display font-semibold w-full text-center  mb-16 underline  pt-10">A Collection of <span className="text-[#aa8453]">Luxury</span> Listings</p>
            
            <div data-aos="fade-up" data-aos-duration="1000" className="lg:w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {
                datas.map(data => <Card key={data.id} data={data}></Card>)
            }
        </div>
        </div>
    );
};

export default Portfolio;