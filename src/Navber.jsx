import { MdOutlineMessage } from "react-icons/md";
import logo from "./images/images.png"
import people from "./images/people-.png"
import { IoBagOutline } from "react-icons/io5";


const Navber = () => {
    return (
        <nav className="mt-10 mx-12">
            <div className="flex   justify-between  items-center">
                <div className="w-10 h-6"> <img src={logo} alt="" /></div>
                <div className="flex items-center"><h1 className="mx-6">000 800 100 9538</h1>
                    <h1 className="mx-6"><MdOutlineMessage /></h1>
                    <h1 className="mx-6"><IoBagOutline /></h1>
                    <h1 className="mx-6"><div><img className="w-5" src={people} alt="" /></div></h1>
                </div>
            </div>
        </nav>
    );
};

export default Navber;