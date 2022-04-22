import React from 'react';
import Header from './Header';

const Step4 = ({handleStage, enquiry, consigneeDetails, setconsigneeDetails}) => {

  return( 
        <section className='w-full h-screen bg-blue-50 section4 flex items-center justify-center'>
            <div className='lg:w-3/5 w-4/5 flex flex-row lg:-mt-24 -mt-12'>
                <div className='w-full rounded shadow-xl bg-white px-5 py-5 fade-in-slow'>
                    <h1 className='text-blue text-2xl font-bold'>Consignee Details</h1>
                    <p className='font-semibold text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iste ullam consequuntur iure. Quod, omnis velit.</p>
                    <div className='lg:w-2/3 w-full mx-auto grid grid-cols-2 gap-4 mt-4'>
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='First Name' value={consigneeDetails.firstname} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    firstname: event.target.value
                                }))} />
                          </div>
                          
                          <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Last Name' value={consigneeDetails.lastname} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    lastname: event.target.value
                                }))} />
                          </div>
                          <div className='col-span-2'>
                          <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Address' value={consigneeDetails.address} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    address: event.target.value
                                }))} />
                          </div>
                          
                          {/* <div>
                            <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Adress Line 2' />
                          </div> */}
                          <div>
                          <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Email' value={consigneeDetails.email} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    email: event.target.value
                                }))} />
                          </div>
                          
                          <div>
                          <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Contact' value={consigneeDetails.contact} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    contact: event.target.value
                                }))} />
                          </div>
                          <div>
                            <input disabled className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Mumbai' value={enquiry.pickUpCity} />
                          </div>
                          
                          <div>
                            <input disabled className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Maharashtra' value={enquiry.deliveryCity} />
                          </div>
                          <div className='w-full col-span-2'>
                          <input className='outline-none w-full text-blue-shade3 rounded-md shadow-lg font-semibold bg-blue-50 py-2 px-5' type="text" placeholder='Upload LR' value={consigneeDetails.uploadLR} onChange={
                                (event) => setconsigneeDetails(prevState => ({
                                    ...prevState,
                                    uploadLR: event.target.value
                                }))} />
                          </div>
                    </div>
                    <div className='w-full flex justify-center'>
                      <div className='flex flex-row gap-4 mt-4'>
                        <div>
                            <button onClick={()=>handleStage(3)} className='text-xs font-semibold border-2 border-blue mt-2 px-4 py-2 rounded-md text-blue font-medium'>Back</button>
                        </div>
                        <div>
                            <button onClick={()=>handleStage(5)} className='text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-white bg-blue-dark font-medium'>Next</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Step4;
