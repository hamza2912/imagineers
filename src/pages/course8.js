import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course8() {

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
        <section id='course8' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 8: C++ Development Course Description</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Embark on a journey into the world of C++ programming with our comprehensive C++ Development Course. Designed for beginners and aspiring programmers, this course provides a solid foundation in C++ programming concepts, syntax, and best practices. From basic data types to advanced object-oriented programming principles, participants will gain practical experience through hands-on projects and exercises. Whether you're aiming to build software applications, dive into game development, or explore embedded systems, this course equips you with the skills and confidence to bring your ideas to life using one of the most powerful and versatile programming languages.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/c_code.jpg" alt="course 8" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain a thorough understanding of C++ programming fundamentals, including data types, variables, operators, and control structures.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn the principles of object-oriented programming (OOP) and apply them to design and develop reusable and maintainable C++ code.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Dive into advanced C++ topics such as pointers, memory management, templates, and exception handling to build robust and efficient applications.
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Apply C++ programming skills to develop real-world applications, including console-based programs, graphical user interfaces (GUIs), and interactive games.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain hands-on experience through coding exercises, projects, and assignments designed to reinforce learning and enhance problem-solving skills</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn techniques for debugging and troubleshooting C++ code to identify and fix errors efficiently.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Collaborate with peers on group projects and assignments, fostering teamwork and communication skills essential for professional development.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Build a portfolio of C++ projects that demonstrate proficiency in programming concepts and showcase practical application of skills to prospective employers or clients.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stay informed about industry best practices, standards, and emerging trends in C++ development to remain competitive in the job market and adapt to evolving technologies. </li>

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
  
export default Course8;
