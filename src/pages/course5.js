import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course5() {

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
        <section id='course5' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 5: Intro to Datascience</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Welcome to the captivating world of Data Science! In this engaging introductory course designed for middle schoolers, we'll embark on an exciting journey to unravel the mysteries of data. Through interactive activities, hands-on projects, and creative experiments, we'll explore the fundamentals of Data Science and its real-world applications. From collecting and organizing data to analyzing and visualizing it, you'll learn how data drives insights and decision-making. Using user-friendly tools, we'll delve into data exploration, uncover patterns, and solve fun challenges. As young Data Scientists, you'll also explore data ethics and the responsible use of data. Get ready to become data detectives, gain valuable skills, and ignite your passion for exploring the endless possibilities of Data Science! Join us on this thrilling adventure and unleash the power of data!</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/new_course2.png" alt="course 4" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Introduction to Data Science: Students will understand the basic concepts of Data Science, its purpose, and its relevance in various fields.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Data Collection and Organization: Middle schoolers will learn how to collect and organize data using simple data sources and tools.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Data Exploration and Visualization: Students will explore different data visualization techniques to better understand patterns and relationships within the data.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Basic Data Analysis: Middle schoolers will perform simple data analysis tasks, such as finding averages, trends, and correlations, to gain insights from the data.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Hands-on Data Projects: Students will engage in hands-on data projects, where they will solve fun challenges and draw meaningful conclusions from the data.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Data Ethics and Responsible Use: Middle schoolers will discuss the importance of data ethics, privacy, and the responsible use of data in real-world scenarios.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Introduction to Data Tools: Students will get introduced to user-friendly data tools and software that aid in data visualization and analysis.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Teamwork and Collaboration: Through group projects and activities, students will develop teamwork and collaboration skills while working with data.</li>
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
  
export default Course5;
