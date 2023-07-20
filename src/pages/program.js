import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function Program() {

  

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
        <section id='course3' className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 1: Introduction to Programming with Python
                        </h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800"  className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-13)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >In the first course, students establish a solid programming foundation by immersing themselves in Python. Throughout engaging project-based lessons, they acquire skills in variable manipulation, data types, list handling, loop implementation, conditional logic, and function creation. This course not only ignites their passion for programming but also equips them with transferable fundamental programming skills that are applicable across various programming languages and problem domains. With the completion of this course, students are prepared to embark on the subsequent stage of our structured curriculum, Beyond Basics with Python.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course3.jpg" alt="3-Week Coding Classes" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Introduction to Programming with Python course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Construct simple programs utilizing essential programming elements such as variables, conditional logic, loops, and functions.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Engage with user input to develop enjoyable and interactive programs. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Craft simple games incorporating images, animations, and audio by leveraging our customized programming library, Wizardlib, designed with beginners in mind.</li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>No prerequisites for this course are required. Beginners with no experience are welcome.</p>
            </div>
        </section>
        <section id='course4' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 2: Beyond Basics with Python</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-13)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Beyond Basics with Python, the second course in our middle school Wizard Level 1 curriculum, focuses on reinforcing Python programming skills while empowering students to construct interactive applications and games. Throughout the course, students will delve into advanced topics, including complex conditional statements, Python's versatile list and dictionary data structures, and the effective implementation of loops in their programs. By the conclusion of this course, students will be fully prepared to advance to the subsequent stage of our structured programming curriculum, Webpages with HTML and CSS.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course4.jpg" alt="course 4" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Beyond Basics with Python course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain proficiency in Python's fundamental data structures and leverage them to address practical programming challenges.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Create user-friendly interactive applications and games that actively involve the user, employing essential programming elements such as loops, functions, and conditional statements.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Utilize Python's built-in random module to develop chance-based games and simulate basic artificial intelligence for game opponents. </li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>These courses must be completed before Logic with Scratch:</p>
                <ul className='mt-4'>
                    <li>- ICL 1, Course 1: <span className='text-blue-500'>Introduction to Programming with Python</span></li>
                </ul>
            </div>
        </section>

        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Program;
