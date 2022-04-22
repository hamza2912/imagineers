import React from 'react';

function Step2({handleStage, enquiry, setenquiry, todayDate}) {

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = `${tomorrow.getFullYear()}-${("0" + (tomorrow.getMonth() + 1)).slice(-2)}-${("0" + tomorrow.getDate()).slice(-2)}`;
    const [todaySelected, settodaySelected] = React.useState(true);
    const [tomorrowSelected, settomorrowSelected] = React.useState(false);

    // const [productName, setproductName] = React.useState("");

  return(
     <section className="w-full h-screen bg-blue-50 section2 flex items-center relative">
         <div className="border-2 lg:w-3/5 w-4/5 h-fit mx-auto lg:px-32 px-4 py-8 bg-white rounded-md shadow-md -mt-20 fade-in-slow">
            <h1 className='text-blue text-2xl font-bold'>Product Details</h1>
            <p className='font-semibold lg:text-base text-sm mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quos eius ducimus.</p>
            <div className='flex flex-row justify-between mt-4'>
                <div>
                    <h2 className='text-gray-400 text-xs'>From</h2>
                    <h1 className='text-gray-400 text-sm'>{enquiry.pickUpCity}</h1>
                </div>
                <div>
                    <i className='fas fa-angle-right text-gray-400 text-xs'></i>
                </div>
                <div>
                    <h2 className='text-gray-400 text-xs'>To</h2>
                    <h1 className='text-gray-400 text-sm'>{enquiry.deliveryCity}</h1>   
                </div>
            </div>
            <input value={enquiry.productName} className="text-sm outline-none bg-blue-50  mt-2 w-full pl-2 py-2 rounded-md text-blue-shade3 font-medium" name="product-name" placeholder='Enter Product Name/HSN Code' onChange={event=>
                setenquiry(prevState => ({
                    ...prevState,
                    productName: event.target.value
                }))} />
            <div className='flex flex-row gap-3 flex-wrap'>
                <div>
                    <input value={enquiry.pickUpDate} className="text-sm outline-none bg-blue-50 pr-12 mt-2 pl-2 py-2 rounded-md text-blue-shade3 font-medium" placeholder='PickUp date' type="date" onChange={(event)=>
                        setenquiry(prevState => ({
                            ...prevState,
                            pickUpDate: event.target.value
                        }))} />
                </div>
                <div>
                    <button onClick={()=>{
                        settomorrowSelected(false); 
                        settodaySelected(true); 
                        setenquiry(prevState => ({
                            ...prevState,
                            pickUpDate: todayDate
                        }));}} 
                        className={todaySelected ? 'text-xs border-2 border-blue mt-2 px-3 py-2 rounded-md text-white bg-blue-dark font-medium' : 'text-xs border-2 border-blue mt-2 px-3 py-2 rounded-md text-blue font-medium'}>Today</button>
                </div>
                <div>
                <button onClick={()=>{
                    settomorrowSelected(true); 
                    settodaySelected(false); 
                    setenquiry(prevState => ({
                        ...prevState,
                        pickUpDate: tomorrowDate
                    }));}} 
                    className={tomorrowSelected ? 'text-xs border-2 border-blue mt-2 px-3 py-2 rounded-md text-white bg-blue-dark font-medium' : 'text-xs border-2 border-blue mt-2 px-3 py-2 rounded-md text-blue font-medium'}>Tomorrow</button>
                </div>
            </div>
            <div className='flex flex-row gap-3 flex-wrap'>
                <div>
                    <input value={enquiry.weight} className="text-sm outline-none bg-blue-50 pr-12 mt-2 pl-2 font-medium py-2 rounded-md text-blue-shade3 font-medium" type="text" placeholder='Weight' onChange={(event)=>
                        setenquiry(prevState => ({
                            ...prevState,
                            weight: event.target.value
                        }))}  />
                </div>
                <div>
                    <button onClick={()=>
                        setenquiry(prevState => ({
                            ...prevState,
                            weightType: 'kg'
                        }))} 
                        className={ enquiry.weightType == "kg" ? 'text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-white bg-blue-dark font-medium' : 'text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-blue font-medium'}>kg</button>
                </div>
                <div>
                <button onClick={()=>
                 setenquiry(prevState => ({
                    ...prevState,
                    weightType: 'ton'
                }))}  
                className={ enquiry.weightType == "ton" ? 'text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-white bg-blue-dark font-medium' : 'text-xs border-2 border-blue mt-2 px-5 py-2 rounded-md text-blue font-medium'}>Ton</button>
                </div>
            </div>
            <div className='mt-4'>
                <button onClick={()=>{
                    if(enquiry.productName !== '' && enquiry.pickUpDate != '' && enquiry.weight != ''){handleStage(3)}}} className='text-white rounded-md bg-blue-main font-bold w-full px-5 py-2 mb-3'>Check Price</button>
            </div>
         </div>
         <div className='lg:w-3/12 w-4/12 absolute lg:bottom-56 bottom-40 right-0'>
             <img src="./images/svg 2.png" alt="" />
         </div>
        
         <button onClick={()=>handleStage(1)} className='fade-in absolute lg:bottom-6 bottom-1 left-1/2 lg:-ml-10 -ml-6 lg:text-2xl text-base text-white'><i className='fas fa-angle-left mr-2 lg:text-lg text-sm'></i>Back</button>
     </section>
  ) ;
}

export default Step2;

