import React from 'react';
import Header from './Header';

const Step1 = ({enquiry, setenquiry, handleStage}) => {

  const [pickUpCities, setpickUpCities] = React.useState([]);
  const [deliveryCities, setdeliveryCities] = React.useState([]);

  React.useEffect(() => {

    setpickUpCities(["Mumbai","Delhi","Maharashtra","Bangalore","Karnataka"]);
    setdeliveryCities(["Mumbai","Delhi","Maharashtra","Bangalore","Karnataka"]);

  }, []);
  
  return (
    <section className='w-full h-screen section1 grid lg:grid-cols-2 grid-cols-1'>
        <div className='w-full flex flex-col justify-center lg:pl-24 px-8 -mt-10 fade-in-slow'>
          <h1 className='lg:text-5xl text-3xl text-blue font-semibold'>DP Transport Company.</h1>
          <h2 className='lg:text-4xl text-2xl text-blue mt-2'>We Care For Your Goods</h2>
          <p className='lg:w-4/5 w-full lg:text-xl text-lg font-semibold mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, magni. Voluptates, provident.</p>
          <div className='flex lg:flex-row flex-col gap-5 mt-6'>
              <select value={enquiry.pickUpCity} className='h-fit lg:w-2/6 w-full text-blue-shade3 bg-blue-50 font-semibold py-3 px-2 rounded-md outline-none' name="pickup-city" onChange={(event)=>
                        setenquiry(prevState => ({
                            ...prevState,
                            pickUpCity: event.target.value
                        }))}>
                <option value="">Enter Pickup City..</option>
                { pickUpCities.map(city => {
                  return (
                    <option value={city}>{city}</option>
                  )
                }) }
              </select>
              <select value={enquiry.deliveryCity} className='h-fit lg:w-2/6 w-full text-blue-shade3 bg-blue-50 font-semibold py-3 px-2 rounded-md outline-none' name="delivery-city" onChange={(event)=>
                        setenquiry(prevState => ({
                          ...prevState,
                          deliveryCity: event.target.value
                        }))}>
                <option value="">Enter Delivery City..</option>
                { deliveryCities.map(city => {
                  return (
                    <option value={city}>{city}</option>
                  )
                }) }
              </select>
          </div>
          <div className='flex flex-row gap-7 flex-wrap mt-4'>
              <div>
                <button onClick={()=>
                  setenquiry(prevState => ({
                    ...prevState,
                    deliveryType: 'pickup'
                  }))}
                   className={enquiry.deliveryType == 'pickup' ? 'text-xs text-white font-semibold bg-blue-dark border-2 border-blue rounded-md py-2 px-12' : 'text-xs font-semibold text-blue border-2 border-blue rounded-md py-2 px-12'}>Pickup</button>
              </div>
              <div>
                <button onClick={()=>
                  setenquiry(prevState => ({
                    ...prevState,
                    deliveryType: 'delivery'
                  }))}
                   className={enquiry.deliveryType == 'delivery' ? 'text-xs text-white font-semibold bg-blue-dark border-2 border-blue rounded-md py-2 px-12' : 'text-xs font-semibold text-blue border-2 border-blue rounded-md py-2 px-12'}>Delivery</button>
              </div>
              <div>
                { enquiry.pickUpCity != "" && enquiry.deliveryCity != "" ?
                <button onClick={()=>handleStage(2)} className='h-fit flex flex-row items-center justify-center fade-in w-24 text-xs font-semibold text-blue border-2 border-blue rounded-md py-2'>Next</button> : null
                }
              </div>
          </div>
        </div>
       
    </section>
  );
};

export default Step1;
