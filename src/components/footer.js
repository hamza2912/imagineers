import React from "react";
import { useHistory } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database";


function Footer() {

    let history = useHistory();

    const [name, setname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [phone, setphone] = React.useState("");
    const [location, setlocation] = React.useState("");
    const [betaList, setbetaList] = React.useState([]);

    const db = getDatabase();


    React.useEffect(() => {
        const betalists = ref(db, `betaList/`);
        onValue(betalists, (snapshot) => {
            if(snapshot.val()){
                setbetaList(snapshot.val());
            }
        });
    },[]);


    function submitBeta() {
        if(name != '' && email != '' ){
            var betalist = betaList;
            betalist.push({
                name: name,
                email: email,
                phone: phone,
                location: location
            })
            set(ref(db, 'betaList'),betalist);
            alert("Thank you! You're on the list!");
            setname("");
            setemail("");
            setphone("");
            setlocation("");
        } else{
            alert('Please fill out the details.')
        }
       
    }



    return (

        <footer>
            <div class="w-full h-auto flex lg:flex-row flex-col lg:px-16 px-5 py-12 bg-gray-900">
                <div class="lg:w-1/2 mx-auto w-full h-auto">
                    <h2 class="text-2xl text-white font-bold mb-4 text-center">Don't wait any longer. Subscribe today and start your coding adventure with Scratch!</h2>
                    <div className='w-32 border-b-4 border-white mx-auto my-4'></div>
                    <div className='h-auto z-10 fadein'>
                        <div className='lg:w-3/4 w-full flex flex-col items-center mx-auto pt-2 pb-10'>
                            <input value={name} onChange={(event) => setname(event.target.value)} className='lg:w-3/4 w-4/5 mt-4 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Name' type="text" />
                            <input value={email} onChange={(event) => setemail(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Email' type="email" />
                            <input value={phone} onChange={(event) => setphone(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Phone' type="text" />
                            <input value={location} onChange={(event) => setlocation(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Location' type="text" />
                            <button onClick={submitBeta} className='w-3/4 mt-4 py-3 bg-yellow-600 text-white rounded-md text-sm font-semibold'>Subscribe</button>
                        </div>
                    </div> 
                </div>
            </div>
            <div class="w-full h-auto bg-gray-800 flex lg:flex-row flex-col lg:px-24 px-12 py-8"> {/*bg-green*/}
                <div class="lg:w-1/2 w-full h-auto text-sm text-white lg:text-left text-center">
                    <img className="w-1/2 lg:-ml-6 mx-auto" src="images/logo/Imagineers_Logo.png" alt="Logo" />
                    <p>Copyright © 2023 Imagineers | All Rights Reserved.</p>
                    <p class="mt-4 text-white"><i class="fa-solid fa-location-dot mr-2"></i>
                        N Acton Road, London NW10 6PH</p>
                    <p class="mt-4 text-white"><i class="fa-solid fa-envelope mr-2"></i>
                        imagineerslabs@gmail.com</p>
                    <p class="mt-4 text-white"><i class="fa-solid fa-phone mr-2"></i>
                    +1 403 630 0125</p>     
                </div>
                <div class="lg:w-1/2 w-full h-auto text-white text-xl flex justify-center items-center mt-8 lg:mt-0">
                    <div className="w-1/2 flex justify-between">
                    <a class="hover:text-gray-600" href="" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a class="hover:text-gray-600" href="" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="hover:text-gray-600" href="" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a class="hover:text-gray-600" href="" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a>
                    </div>
                    
                </div>
            </div>
        </footer>     

    );
}

export default Footer;