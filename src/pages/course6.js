import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course6() {

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
        <section id='course6' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 6: Intro to Cloud Computing</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Welcome to the captivating world of Cloud Computing! This engaging introductory course is specially designed for inquisitive middle schoolers eager to explore the wonders of cloud technology. Through hands-on activities, interactive demos, and teamwork, we'll embark on an exciting journey to understand the fundamentals of cloud computing and its impact on our digital lives. Together, we'll learn about cloud services, storage, and virtualization, and how they power the apps and services we use every day. We'll dive into cloud security, privacy, and ethical considerations, fostering a responsible approach to technology. By the end of this adventure, you'll have gained valuable insights into cloud computing and be inspired to leverage this powerful technology in innovative and responsible ways. Join us as we soar to new heights in the cloud computing realm!</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/new_course3.png" alt="course 4" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Grasp the Concept of Cloud Computing: Students will understand the fundamentals of cloud computing, including its definition and how it impacts daily digital experiences.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore Cloud Services: Middle schoolers will explore various cloud services and applications, learning how cloud computing powers modern technologies.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand Cloud Storage: Students will gain insight into cloud storage solutions, including how data is stored, accessed, and managed in the cloud.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Discover Cloud Virtualization: Middle schoolers will learn about virtualization and its role in optimizing resource utilization and efficiency in the cloud.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stimulate Teamwork and Collaboration: Through group projects and activities, students will develop teamwork and collaboration skills in a cloud-based environment.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Embrace Ethical Cloud Computing: Middle schoolers will understand the ethical implications of cloud computing and how to prioritize data privacy and security.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Unlock Innovation with Cloud Technology: Students will explore innovative applications of cloud computing and how it empowers modern businesses and industries.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Encourage Resource Optimization: Middle schoolers will understand the importance of optimizing cloud resources to reduce environmental impact.</li>
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
  
export default Course6;
