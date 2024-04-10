import { Link } from "react-router-dom";


const Card = ({ data }) => {



    const { estate_title, segment_name,
        status, location, image, button_text, area, description, facilities, price, id
    } = data;


    return (
        <div>
            <div className="card w-[90%] mx-auto lg:w-96 bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Property" /></figure>
                <div className="card-body ">
                    <h2 className="card-title font-playfair-display font-bold ">
                        {estate_title}
                        <div className="badge p-3  bg-[#aa8453] text-white">{status}</div>
                    </h2>
                    <p>{location}</p>
                    <p>{area}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline">{segment_name}</div>
                    </div>
                    <div className="flex justify-start mt-4">
                        <Link to={`/property/${id}`}  className="btn w-15 md:w-28 bg-[#aa8453] text-[#fff] ">{button_text}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;