import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course10() {

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
        <section id='course10' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 10: AI with Machine Learning</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Delve into the fascinating world of Artificial Intelligence (AI) with our comprehensive AI with Machine Learning Course. Designed for beginners and enthusiasts alike, this course provides a deep dive into the principles, algorithms, and applications of AI and machine learning. Participants will explore fundamental concepts such as supervised learning, unsupervised learning, and reinforcement learning, while gaining practical experience through hands-on projects and case studies. Whether you're intrigued by intelligent systems, predictive analytics, or autonomous agents, this course equips you with the knowledge and skills to harness the power of AI and machine learning in diverse domains.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/ai_ml.jpg" alt="course 10" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain a comprehensive understanding of Artificial Intelligence (AI) concepts, including its history, applications, and implications in society.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore different machine learning techniques, including supervised learning, unsupervised learning, and reinforcement learning.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain hands-on experience in implementing and applying machine learning algorithms to solve real-world problems and scenarios.
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore neural networks, deep learning architectures, and convolutional neural networks (CNNs) for tasks such as image recognition and natural language processing.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand the applications of AI and machine learning in various domains, including healthcare, finance, marketing, and autonomous vehicles.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn techniques for evaluating and optimizing machine learning models' performance, including metrics such as accuracy, precision, recall, and F1 score.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Discuss the ethical and societal implications of AI and machine learning, including bias, fairness, transparency, and accountability.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Collaborate with peers on projects and assignments, fostering teamwork and communication skills essential for AI projects.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stay informed about emerging trends, advancements, and research in the fields of AI and machine learning to adapt to evolving technologies.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Lay the foundation for further learning and specialization in areas such as deep learning, natural language processing, computer vision, and reinforcement learning.</li>
    
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>Intro to AI (Beginners)</p>
            </div>
        </section>
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Course10;
