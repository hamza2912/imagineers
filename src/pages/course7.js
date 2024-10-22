import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course7() {

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
        <section id='course7' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 7: Introduction to AI (Beginner)</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >In this course you will learn what Artificial Intelligence (AI) is, explore use cases and applications of AI, understand AI concepts and terms like machine learning, deep learning and neural networks. You will be exposed to various issues and concerns surrounding AI such as ethics and bias, & jobs, and get advice from experts about learning and starting a career in AI. You will also demonstrate AI in action with a mini project.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/new_course1.png" alt="course 7" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop a comprehensive understanding of what Artificial Intelligence (AI) is and its significance in modern society.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore various use cases and applications of AI across different industries and domains.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain familiarity with key AI concepts and terms, including machine learning, deep learning, and neural networks.
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand how these concepts contribute to AI systems and applications.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore ethical considerations and biases inherent in AI technologies.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand the societal impacts and implications of AI, including its effect on jobs and employment.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Apply AI concepts and techniques in a practical setting through a mini project.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Demonstrate proficiency in implementing AI solutions and addressing real-world challenges.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop critical thinking skills to evaluate AI technologies and their implications</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Analyze ethical dilemmas and biases inherent in AI systems.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Communicate effectively about AI concepts, applications, and concerns.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Collaborate with peers on discussions, projects, and case studies related to AI.</li>
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
  
export default Course7;
