import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course2() {

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
        <section id='course2' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 2: Logic with Scratch</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Elementary School Children (Ages 7-10)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Logic with Scratch serves as the second course in our elementary school program, enabling students to further develop their skills upon the foundation established in the preceding course. They continue to enhance their understanding of essential concepts such as variables, data types, lists, arrays, loops, and operators. This course equips students with skills that seamlessly transition to other programming languages as they progress from the familiar block-based language to writing text-based code. Each lesson offers an opportunity for students to create an enjoyable game or animation, reinforcing the techniques they have acquired thus far. Upon completion of Logic with Scratch, students are prepared to advance to our Intro to Text-Based Programming course, where they will explore text-based programming using the Python programming language.  </p>
                        <p className='mt-4'>Leveraging MIT's Scratch platform and its block-based programming language, this course ensures that programming remains accessible, enjoyable, and effortless for young learners.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course2.jpg" alt="Course 2" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Logic with Scratch course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Employ advanced programming concepts, including list manipulation, function creation, and user input processing, to construct increasingly intricate Scratch applications and games.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Craft complex animations, manipulate and personalize audio elements, and utilize timers effectively within the Scratch environment.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Create applications and games that leverage Scratch extensions to extend the capabilities of the core Scratch interface.</li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>These courses must be completed before Logic with Scratch:</p>
                <ul className='mt-4'>
                    <li>- ICL, Course 1: <span className="text-blue-500">Animation and Games with Scratch </span></li>
                </ul>
            </div>
        </section>
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Course2;
