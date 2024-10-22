import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course12() {

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
        <section id='course12' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 12: Video Design and Creation</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Step into the world of digital storytelling with our Video Design and Creation Course. Designed for beginners and aspiring content creators, this course provides a comprehensive overview of video production techniques, tools, and best practices. Participants will learn how to plan, shoot, edit, and publish professional-quality videos for various platforms and purposes. From conceptualizing video ideas to adding visual effects and sound design, this course equips you with the skills and knowledge to unleash your creativity and produce engaging and impactful video content.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/video_cr.jpg" alt="course 7" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain a solid understanding of video production concepts, including camera settings, lighting, composition, and framing.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to use popular video editing software such as Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve to edit and enhance video footage.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop the skills to create compelling video content for various purposes, including marketing videos, tutorials, vlogs, and storytelling
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to plan and storyboard video projects, including scripting, shot lists, and storyboarding techniques to visualize ideas and sequences.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore techniques for capturing professional-quality video footage, including camera operation, framing, and composition</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Master the art of video editing, including trimming, cutting, adding transitions, and applying visual effects to enhance the overall quality of video content.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to add sound effects, background music, and voiceovers to video projects to enhance the viewer's experience.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand best practices for optimizing video content for different platforms, including aspect ratios, video resolutions, and file formats.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to publish and share video content on various platforms, including YouTube, Vimeo, social media platforms, and websites.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stay informed about emerging trends, technologies, and best practices in video production to adapt strategies and techniques accordingly.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Collaborate with peers on video projects, receive constructive feedback, and refine skills through hands-on practice and experimentation.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- By achieving these learning outcomes, participants will be equipped with the knowledge, skills, and confidence to create professional-quality video content that captivates audiences and achieves their desired goals.</li>
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
  
export default Course12;
