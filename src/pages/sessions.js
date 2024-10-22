import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function Sessions() {

  

  return (
      
    <div className=''>

        <Header/>

        <section class="w-full lg:h-96 h-auto lg:p-16 p-5 pb-24 lg:pb-16 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-2/3 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0 lg:pl-12">
                <div class="lg:w-full h-auto flex flex-row">
                    <div class="h-auto py-2 text-white text-4xl font-bold">
                        <h1 className='uppercase text-5xl lg:text-left text-center font-algeria'>Personalized and Group Tutoring Sessions</h1>
                    </div>
                </div>
            </div>
        </section>
        <section id='course1' className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria font-algeria' 
                        >Personalized Sessions</h1>
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Our personalized one-on-one tutoring sessions offer an unparalleled learning experience tailored to your unique needs and goals. With these sessions, you'll work closely with a dedicated expert tutor who will provide individualized guidance, support, and mentorship. Whether you're striving to excel in academic subjects, preparing for standardized tests, or seeking to master specific skills, our tutors will create a customized learning plan just for you.
                        </p>
                        <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Key Features</h2>
                        <ul className='my-4'>
                            <li data-aos="fade-up" data-aos-duration="800">- Customized Learning: Your tutor will assess your strengths and areas for improvement to create a personalized curriculum that addresses your specific learning objectives.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Flexible Scheduling: Choose the time and frequency of your sessions to fit your busy schedule, ensuring that learning remains convenient and accessible.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Individual Attention: Experience undivided attention from your tutor, enabling you to ask questions, seek clarification, and delve into topics at your own pace.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Progress Tracking: Your tutor will continuously monitor your progress, adjusting the curriculum as needed to ensure optimal results.

                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Confidence Building: Gain the confidence to tackle challenges, overcome obstacles, and achieve your academic and personal goals.
                            </li>
                            </ul>
                            <a href='https://forms.gle/rr5vfYxCYwQ6Tv5j8' target='_blank' className='px-5 py-2 bg-yellow-400 font-semibold text-sm hover:text-white mt-4'>Register Now</a>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/personal_session.jpg" alt="Course 1" />
                </div>
            </div>
        </section>
        <section className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria font-algeria' 
                        >Group Tutoring Sessions</h1>
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Our group tutoring sessions offer a collaborative and engaging learning environment where students can come together to master subjects, tackle challenging topics, and achieve academic success. These sessions bring the benefits of peer learning and expert guidance, all in a supportive group setting.

                        </p>
                        <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Key Features</h2>
                        <ul className='my-4'>
                            <li data-aos="fade-up" data-aos-duration="800">- Expert Tutors: Led by experienced and knowledgeable tutors, our group sessions ensure that students receive expert guidance and instruction.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Interactive Learning: Engage in lively discussions, group activities, and problem-solving exercises that make learning both informative and enjoyable.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Diverse Perspectives: Benefit from the diverse backgrounds and perspectives of your peers, fostering a deeper understanding of the subject matter.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Affordability: Group tutoring provides a cost-effective solution, making high-quality education accessible to a wider audience.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Scheduled Sessions: Conveniently scheduled sessions to fit your timetable, ensuring that you can participate without compromising on your daily commitments.
                            </li>
                            <li data-aos="fade-up" data-aos-duration="800">- Small Group Sizes: We maintain small group sizes to ensure that every participant receives personalized attention and has the opportunity to actively participate.
                            </li>                   
                        </ul>
                        <a href='https://forms.gle/rr5vfYxCYwQ6Tv5j8' target='_blank' className='px-5 py-2 bg-yellow-400 font-semibold text-sm hover:text-white mt-4'>Register Now</a>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/group_session.jpg" alt="Course 1" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                
            </div>
        </section>
        
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Sessions;
