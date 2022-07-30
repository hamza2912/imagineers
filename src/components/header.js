import React from "react";
import { useHistory } from 'react-router-dom';


function Header() {

    const [showNav, setshowNav] = React.useState(false);

    React.useEffect(() => {

        // console.log(consigneeDetails.firstname);
      
    }, []);

    return (

        <header className="fixed nav w-full lg:px-12 px-8 py-5 text-center z-10"> 
            <div className="flex justify-between items-center  text-center">
                <div className="">
                    <img className="w-4/5 h-auto" src="./images/DP Transport New Logo 1.png" alt="" />
                </div>
                <div className="lg:flex justify-center hidden">
                    <ul className="flex justify-center text-center font-semibold gap-8">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Location</a></li>
                    </ul>
                </div>
                <div className="gap-12">
                    <a className="font-medium" href="#">Login</a>
                    <a onClick={()=>setshowNav(!showNav)} className="rounded-md ml-4 bg-blue-main text-white py-2 px-6" href="#"><i className="fas fa-user text-sm"></i></a>
                </div>
                { showNav ? 
                <div className="lg:hidden w-full p-8 absolute top-20 left-0 bg-white fade-in">
                    <ul className="flex flex-col items-center font-semibold gap-8">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Location</a></li>
                    </ul>
                </div>
                : null}
            </div>
        </header>       

    );
}

export default Header;