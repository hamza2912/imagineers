import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course4() {

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
        <section id='course4' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 4: Web Development Mastery</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        <p className='font-bold mt-4'>TIme: 55 Minutes</p>
                        <p className='font-bold'> Durtion: 7 Weeks, 2 Sessions/week</p>
                        <p className='font-bold'> Pricing: <span className='line-through'>C$420</span> C$300</p>
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >In the Web Development course, students establish a strong foundation by mastering HTML and CSS, and creating well-structured web pages with responsive layouts. They delve into jQuery for interactivity and animations, exploring advanced tools like Tailwind CSS, AOS, and Owl Carousels. Additionally, they learn real-time data integration using Firebase. By the course's end, students can develop visually stunning, interactive web applications, be poised to pursue advanced web development topics, and stay at the forefront of this dynamic field.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course5.jpg" alt="course 4" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>By the end of the 7-week course, students will:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Have a strong understanding of HTML, CSS, and their integration.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Create visually stunning and responsive web designs.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Implement interactive elements and animations using jQuery. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Showcase a portfolio of projects highlighting their skills. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop real-time applications using Firebase.Possess the knowledge to pursue further studies or a career in web development.Develop real-time applications using Firebase. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Able to start Freelancing. </li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>No prerequisites for this course are required. Beginners with no experience are welcome.</p>
                {/* <ul className='mt-4'>
                    <li>- ICL 1, Course 1: <span className='text-blue-500'>Introduction to Programming with Python</span></li>
                </ul> */}
            </div>
            {/* <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives:</h2>
                <p>By the end of the 7-week course, students will:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- HTML and CSS Mastery: Acquire the skills to create well-structured web pages using HTML and style them effectively with CSS.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Responsive Web Design: Learn to build responsive and dynamic web layouts using Flexbox, CSS Grid, and media queries to provide a seamless user experience across devices.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Interactivity and Animation: Implement interactive elements and animations using jQuery, enhancing user engagement and interactivity on web pages. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Cutting-edge Web Technologies: Explore modern web development tools and frameworks like Tailwind CSS, AOS, and Owl Carousels to create visually stunning and dynamic websites. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Real-time Data Integration: Integrate Firebase into web projects to enable real-time data synchronization and user authentication, empowering the creation of dynamic web applications. </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Project Development: Work on hands-on projects that cover various aspects of web development, including portfolio websites, landing pages, interactive galleries, and real-time chat applications.
 </li>
                    </ul>
            </div> */}
        </section>
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Course4;
