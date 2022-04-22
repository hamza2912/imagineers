import React from 'react';
import Header from './Header';

const Step5 = ({handleStage, profileDetails, setprofileDetails}) => {

  const [confirmPassword, setconfirmPassword] = React.useState('');
  const [terms, setterms] = React.useState(false);

  return (
      <>
      <section className='w-full h-screen bg-blue-50 section4 flex items-center justify-center'>
            <div className='lg:w-3/5 w-4/5 flex flex-row lg:-mt-24 -mt-12'>
                <div className='w-full rounded shadow-xl bg-white px-5 py-5 fade-in-slow'>
                    <h1 className='text-blue text-2xl font-bold'>Create Profile</h1>
                    <p className='font-semibold text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste ullam consequuntur iure. Quod, omnis velit.</p>
                    <div className='lg:w-2/3 w-full mx-auto grid grid-cols-2 gap-4 mt-4'>
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='First Name' value={profileDetails.firstname} onChange={
                                (event) => setprofileDetails(prevState => ({
                                    ...prevState,
                                    firstname: event.target.value
                                }))} />
                          </div>
                          
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Last Name' value={profileDetails.lastname} onChange={
                                (event) => setprofileDetails(prevState => ({
                                    ...prevState,
                                    lastname: event.target.value
                                }))} />
                          </div>
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Email' value={profileDetails.email} onChange={
                                (event) => setprofileDetails(prevState => ({
                                    ...prevState,
                                    email: event.target.value
                                }))} />
                          </div>
                          
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Contact' value={profileDetails.contact} onChange={
                                (event) => setprofileDetails(prevState => ({
                                    ...prevState,
                                    contact: event.target.value
                                }))} />
                          </div>
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="password" placeholder='Password' value={profileDetails.password} onChange={
                                (event) => setprofileDetails(prevState => ({
                                    ...prevState,
                                    password: event.target.value
                                }))} />
                          </div>
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="password" placeholder='Confirm password' value={confirmPassword} onChange={event=>setconfirmPassword(event.target.value)} />
                          </div>
                    </div>
                    <div className='mt-8 lg:w-2/3 w-full mx-auto flex'>
                            <input checked={terms} onChange={()=>setterms(!terms)} type="checkbox" /> <h3 className='ml-2 text-xs text-gray-400 font-semibold'>I accept and agree with all <span className='text-blue-500 font-semibold'>terms</span> and <span className='text-blue-500 font-semibold'>conditions.</span></h3>
                      </div>
                    <div className='w-full flex justify-center'>
                      <div className='flex flex-row gap-4 mt-4'>
                        <div>
                            <button onClick={()=>handleStage(4)} className='text-xs font-semibold border-2 border-blue mt-2 px-4 py-2 rounded-md text-blue font-medium'>Back</button>
                        </div>
                        <div>
                            <button onClick={()=>{
                              if(profileDetails.firstname != '' && profileDetails.lastname != '' && profileDetails.email != '' && profileDetails.contact != '' && profileDetails.password != '' && terms && profileDetails.password == confirmPassword){
                                handleStage(6)
                              } else if(profileDetails.password != confirmPassword){
                                alert("Password do not match!");
                              } else{
                                alert("Please fill all the details!");
                              }
                              }} className='text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-white bg-blue-dark font-medium'>Next</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
};

export default Step5;
