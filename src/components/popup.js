import React from "react";
import { useHistory } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database";


function Popup() {

    let history = useHistory();

    const [name, setname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [phone, setphone] = React.useState("");
    const [location, setlocation] = React.useState("");
    const [course, setcourse] = React.useState("");
    const [betaList, setbetaList] = React.useState([]);
    const [showModal, setshowModal] = React.useState(false);

    const db = getDatabase();


    React.useEffect(() => {
        const betalists = ref(db, `betaList/`);
        onValue(betalists, (snapshot) => {
            if(snapshot.val()){
                setbetaList(snapshot.val());
            }
        });
        setTimeout(() => {
            setshowModal(true)
        }, 10000);
    },[]);


    function submitBeta() {
        if(name != '' && email != '' ){
            var betalist = betaList;
            betalist.push({
                name: name,
                email: email,
                phone: phone,
                location: location,
                course: course
            })
            set(ref(db, 'betaList'),betalist);
            alert("Thank you! You're on the list!");
            setname("");
            setemail("");
            setphone("");
            setlocation("");
            setcourse("");
        } else{
            alert('Please fill out the details.')
        }
       
    }


    if(showModal) {
        return (

            <div>
                <div className='dimmer'></div>
                <div class="lg:w-1/3 w-11/12 h-4/5 flex lg:flex-row flex-col p-10 bg-gray-900 fixed left-0 right-0 m-auto top-0 bottom-0 rounded-lg shadow-xl z-50">
                    <div class="w-full h-auto">
                        <h2 class="text-xl text-white font-bold mb-4 text-center">Don't wait any longer. Subscribe today and start your coding adventure with Scratch!</h2>
                        <div className='w-32 border-b-4 border-white mx-auto my-4'></div>
                        <div className='h-auto z-10 fadein'>
                            <div className='lg:w-3/4 w-full flex flex-col items-center mx-auto pt-2 pb-10'>
                                <input value={name} onChange={(event) => setname(event.target.value)} className='lg:w-3/4 w-4/5 mt-4 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Name' type="text" />
                                <input value={email} onChange={(event) => setemail(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Email' type="email" />
                                <input value={phone} onChange={(event) => setphone(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Phone' type="text" />
                                <input value={location} onChange={(event) => setlocation(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Location' type="text" />
                                <input value={course} onChange={(event) => setcourse(event.target.value)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Course Name' type="text" />
                                <button onClick={submitBeta} className='w-3/4 mt-4 py-3 bg-yellow-600 text-white rounded-md text-sm font-semibold'>Subscribe</button>
                            </div>
                        </div> 
                    </div>
                    <i onClick={()=>setshowModal(false)} className="fas fa-close absolute top-5 right-5 cursor-pointer text-white"></i>
                </div>
            </div>     

        );
    } else{
        return <p></p>
    }
    
}
export default Popup;<div className='dimmer'></div>