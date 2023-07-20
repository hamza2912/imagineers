import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function Pricing() {

  

  return (
      
    <div className=''>

        <Header/>

        <section class="w-full lg:h-96 h-auto lg:p-16 p-5 pb-24 lg:pb-16 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-2/3 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0 lg:pl-12">
                <div class="lg:w-full h-auto flex flex-row">
                    <div class="h-auto py-2 text-white text-4xl font-bold">
                        <h1 className='uppercase text-5xl lg:text-left text-center font-algeria'>Pricing Details</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:py-16 py-6">
                    <div class="w-full h-auto">
                        <h1 className='text-4xl font-bold text-blue-500' 
                        >Class Tuition $384 Per Course</h1>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-2 font-bold text-xl text-pink-700'>or 3 payments of $128 per course</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p className='text-lg'
                        data-aos="fade-right" data-aos-duration="800"
                        >We strive to make the commitment as easy as it is valuable.
                        Each course consists of <span className='font-semibold'>12 sessions</span>, so tuition is divided into <span className='font-semibold'>3
                        installments</span>.</p>
                        <h2 className='mt-6 font-bold text-xl text-yellow-500'>We accept CAD ($) and USD ($)</h2>
                    </div>
                </div>
            </div>
        </section>


        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Pricing;
