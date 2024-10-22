import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course11() {

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
        <section id='course11' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 11: Social Media Management</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Join our Social Media Management Course and unlock the keys to success in the dynamic world of social media marketing. Designed for beginners and aspiring social media managers, this course provides a comprehensive overview of social media platforms, strategies, and best practices. Participants will learn how to create engaging content, build and manage online communities, analyze social media metrics, and execute effective social media campaigns. Whether you're looking to boost brand awareness, drive engagement, or increase conversions, this course equips you with the knowledge and skills to excel in the ever-evolving landscape of social media.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/social.jpg" alt="course 7" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain a comprehensive understanding of social media platforms, trends, and user behavior.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to develop effective social media strategies aligned with business goals and target audience preferences.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Master the art of creating compelling and relevant content for different social media platforms, including text, images, videos, and infographics
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn strategies for building and nurturing online communities, engaging with followers, and fostering brand advocacy.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore social media management tools and analytics platforms to schedule posts, monitor performance, and analyze social media metrics.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop and execute social media campaigns to drive brand awareness, engagement, and conversions.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain insights into social media advertising platforms, including Facebook Ads, Instagram Ads, and LinkedIn Ads, and learn how to create and optimize paid campaigns.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to effectively manage and respond to crises and negative feedback on social media platforms</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stay informed about emerging trends, features, and best practices in social media marketing to adapt strategies accordingly.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn techniques for measuring social media performance, tracking key performance indicators (KPIs), and optimizing strategies based on insights.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand ethical considerations, privacy concerns, and legal regulations related to social media marketing, including data protection laws and advertising guidelines.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- By achieving these learning outcomes, participants will be equipped with the knowledge and skills necessary to plan, execute, and optimize social media strategies that drive results for businesses and brands.</li>
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
  
export default Course11;
