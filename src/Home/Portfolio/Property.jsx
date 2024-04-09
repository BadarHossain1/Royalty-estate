
import { useLoaderData, useParams } from "react-router-dom";
const Property = () => {


    const datas = useLoaderData();
    const { id } = useParams();

    const data = datas.find(data => data.id == parseInt(id));



    const { estate_title, segment_name,
        status, location, image, button_text, area, description, facilities, price
    } = data;


    return (
        <div>
            <div className="card lg:card-side bg-[#F8F5F0] md:bg-base-100  shadow-xl mt-6 mb-6">
                <figure className="w-[90%] mx-auto mt-6"><img src={image} alt="Album" /></figure>
                <div className="card-body ">
                    <h1 className="card-title text-3xl">{estate_title}</h1>
                    <p>{description}</p>

                    <p className="badge badge-outline">{segment_name}</p>


                    <p className="font-semibold">{location}</p>
                    <p className="font-semibold">{area}</p>
                    {facilities.map((facility, index) => (
                        <p key={index} className="text-black font-playfair-display">{index + 1}: {facility}</p>
                    ))}
                    <p className="font-bold">Status: {status}</p>
                    <p className="text-black font-bold">Price: <span className="text-green-400">{price}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Property;