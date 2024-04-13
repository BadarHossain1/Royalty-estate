import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    useEffect(()=>{
        document.title = "Error"
    },[])
    return (
        <div>
            <div className="h-100vh items-center w-[350px] mx-auto flex flex-col justify-center text-center">
                <img src="https://imgs.search.brave.com/GTAN_r4ZPDDE03fFe56AJfzfBd3TgDaPvrqXIOqoaYo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NTA4MjU3My92ZWN0/b3IvbGFwdG9wLWNv/bXB1dGVyLTQwNC1l/cnJvci1tZXNzYWdl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1vc0piMnR2dExo/QXBiUzF3WU1KTDBS/alZoZ2lYVEFDSjgx/Ry1WTkFmRThBPQ" alt="" />

                <Link to="/" className="btn bg-[#aa8453] text-white text-center mt-1">Go Back To Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;