import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course1() {

  return (
      
    <div className=''>

        <Header/>
        <section class="w-full lg:h-96 h-auto lg:p-16 p-5 pb-24 lg:pb-16 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-2/3 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0 lg:pl-12">
                <div class="lg:w-full h-auto flex flex-row">
                    <div class="h-auto py-2 text-white text-4xl font-bold">
                        <h1 className='uppercase text-5xl lg:text-left text-center font-algeria'>Offered Programs</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id='course1' className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria font-algeria' 
                        >Course 1: Animations and Games with Scratch</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Elementary School Children (Ages 7-10)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >This program serves as an outstanding entry point to programming specifically tailored for younger students. Through the user-friendly interface of Scratch, students will gain powerful programming concepts. Each lesson is dedicated to creation of games or animations, which effectively teach essential programming skills like variable utilization, loop implementation, and conditional usage. By the conclusion of the course, students will possess the capacity to code basic Scratch games and animations.  </p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course1.jpg" alt="Course 1" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Animation and Games with Scratch course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Apply fundamental programming concepts, such as loops, conditional statements, and event-driven programming, to construct captivating Scratch projects</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Design simple animations, storybook applications, and personalized sprites (characters).</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop games that incorporate animations, sounds, and custom sprites, incorporating features like collision detection, scoring mechanisms, and more.</li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>No prerequisites for this course are required. Beginners with no experience are welcome.</p>
            </div>
        </section>
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Course1;
