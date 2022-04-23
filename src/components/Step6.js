import React from 'react';
import Header from './Header';

const Step6 = ({enquiry, consigneeDetails, quotation, profileDetails, handleStage}) => {

  const [terms, setterms] = React.useState(false);

  return (
      <>
      <section className='w-full h-screen bg-blue-50 section6 flex items-center justify-center'>
          <div className='lg:w-3/5 w-10/12 h-fit py-8 rounded shadow-xl mx-auto bg-gradient-to-r from-blue-400 to-blue-200 lg:-mt-24 mt-0 fade-in-slow relative'>
            <div className='pl-5'>
              <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                  <h1 className='text-white lg:text-xl text-lg font-semibold lg:mt-6 mt-4'>Review Details and Proceed to Pay!</h1>
                  <h2 className='text-white mt-4 text-sm lg:text-base'>Consigner Details</h2>
                  <hr />
                  <div className='flex flex-row text-white text-xs gap-2 mt-2'>
                    <div>
                      <ul>
                        <li>Consignment From</li>
                        <li>City</li>
                        <li>Station</li>
                        <li>Proceeding Date</li>
                      </ul>
                    </div>
                    <div>
                      <ul className='ml-2'>
                        <li className='text-xs'>{consigneeDetails.firstname + " " + consigneeDetails.lastname}</li>
                        <li>{enquiry.pickUpCity}</li>
                        <li>{quotation.booking_station}</li>
                        <li>{enquiry.pickUpDate}</li>
                      </ul>
                    </div>
                  </div>
                  <h2 className='text-white mt-4 text-sm lg:text-base'>Consignee Details</h2>
                  <hr />
                  <div className='flex flex-row  text-white text-xs gap-2 mt-2'>
                    <div>
                      <ul>
                        <li>Consignment To</li>
                        <li>City</li>
                        <li>Station</li>
                        <li>Delivery Date</li>
                      </ul>
                    </div>
                    <div>
                      <ul className='ml-5'>
                        <li>{profileDetails.firstname + " " + profileDetails.lastname}</li>
                        <li>{enquiry.deliveryCity}</li>
                        <li>{quotation.delivery_station}</li>
                        <li>{quotation.delivery_date}</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
                <div className='w mx-auto h-44 my-auto bg-gray-50 hidden lg:block'></div>
                  <div className='col-span-2 mt-8 ml-10 lg:ml-0 text-left relative'>
                      <h2 className='text-white text-sm lg:text-base mt-4'>Product Details</h2>
                      <hr />
                        <div className='flex flex-row  text-white text-xs gap-2 mt-2'>
                          <div>
                            <ul>
                              <li>Product Name</li>
                              <li>Product HSN Code</li>
                              <li>Delivery Type</li>
                              <li>Delivery Date</li>
                              <li>Weight</li>
                            </ul>
                          </div>
                          <div>
                            <ul>
                              <li>{enquiry.productName}</li>
                              <li>{enquiry.productName}</li>
                              <li>{enquiry.deliveryType}</li>
                              <li>{quotation.delivery_date}</li>
                              <li>{enquiry.weight + " " + enquiry.weightType}</li>
                            </ul>
                          </div>
                        </div>
                        <div className='relative mt-4 hidden lg:block'>
                          <img className='w-full lg:-ml-20' src="./images/handcard.svg" alt="" />
                          <h1 className='font-bold text-blue absolute top-1/2 -mt-4 left-1/3 -ml-2'>INR {quotation.estimated_budget}<span className='text-xs'>(approx)</span></h1>
                        </div>
                        <div className='flex items-center lg:mt-4 mt-2 hidden lg:flex'>
                          <input checked={terms} onChange={()=>setterms(!terms)} type="checkbox" />
                          <p className='ml-2 xs1 text-gray-500'>I accept and agree with all <span className='xs1  text-blue-500'>terms</span> and <span className='xs1  text-blue-500'>condition.</span></p>
                        </div>
                        <div className='hidden lg:block'>
                          <button className={terms ? 'text-white text-xs rounded-md mt-2 py-2 px-12 bg-gradient-to-r from-blue-700 to-blue-500': 'text-white text-xs rounded-md mt-2 py-2 px-12 bg-blue-200 cursor-default'}>Pay INR {quotation.estimated_budget} Now</button>
                        </div>
                  </div>
              </div>
              <div className='flex flex-col items-center lg:hidden mt-4'>
                <div className='flex flex-row'>
                  <input checked={terms} onChange={()=>setterms(!terms)} type="checkbox" />
                  <p className='w-full ml-2 xs1 text-gray-500 w-40'>I accept and agree with all <span className='xs1  text-blue-500'>terms</span> and <span className='xs1  text-blue-500'>condition.</span></p>
                </div>
                <button className={terms ? 'text-white text-xs rounded-md mt-2 py-2 px-12 bg-gradient-to-r from-blue-700 to-blue-500': 'text-white text-xs rounded-md mt-2 py-2 px-12 bg-blue-200'}>Pay INR {quotation.estimated_budget} Now</button>
              </div>
            </div>
            <button onClick={()=>handleStage(5)} className='absolute lg:top-5 lg:right-5 top-2 right-2 text-xs font-semibold border-2 border-white mt-2 px-4 py-2 rounded-md text-white font-medium'>Back</button>
          </div>
      </section>

      </>
  );
};

export default Step6;
