import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";




import { Outlet } from 'react-router-dom';

const Routes = () => {
    return (
        <div >
            <div className="max-w-7xl mx-auto mt-3">
                <Nav></Nav>
            </div>
            <div className="mt-5">
                <Outlet></Outlet>
            </div>
            <div className="w-full  mt-24">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Routes;