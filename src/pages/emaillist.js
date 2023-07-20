import React from 'react';
import { getDatabase, ref, onValue } from "firebase/database";

function Emaillist() {

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

    return (
      
      <div className='w-full h-auto overflow-x-hidden lg:p-10 p-8'>

        <div className='lg:w-4/5 w-full mx-auto'>
        <p className='md:text-4xl text-2xl font-semibold tracking-widest text-center mb-8'>Subscribers' List</p>
        <table class="ui celled table">
            <thead>
                <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    betaList.length > 0 ?
                    betaList.map((user, index) => {
                        return (
                            <tr>
                                <td>{index +1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location}</td>
                            </tr> 
                        )
                    }) :
                    <p>No emails yet!</p>       
                }

            </tbody>
        </table>

        </div>

      </div>

    );
  }
  
export default Emaillist;