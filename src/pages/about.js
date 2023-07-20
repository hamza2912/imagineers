import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function About() {

  

  return (
      
    <div className=''>

    <Header/>

        <section class="w-full h-auto lg:p-16 p-5 py-16 lg:py-32 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-2/3 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0 lg:pl-12">
                <div class="lg:w-full h-auto flex flex-row">
                    <div class="h-auto py-2 text-white text-4xl font-bold">
                        <h1 className='uppercase text-5xl lg:text-left text-center font-algeria'>About Us</h1>
                    </div>
                </div>
                <div class="w-full h-auto items-center lg:items-start">
                    <div class="w-full h-auto text-white lg:text-base text-sm mt-8">
                        <p class="mt-2"><i class="fa-solid fa-person-chalkboard text-yellow-400 text-xl mr-3"></i>At ICL, we are passionate about providing a dynamic and immersive learning experience for young minds. Our STEM-based programs empower students to delve into the fascinating worlds of Science, Technology, Engineering, and Mathematics, fostering critical thinking, problem-solving skills, and creativity that promotes hands-on learning experiences.</p>
                        <p class="mt-2"><i class="fa-solid fa-microchip text-yellow-400 text-xl mr-2"></i>Our carefully crafted curriculum combines hands-on activities, interactive and collaborative experiments, and real-world projects to ignite curiosity and promote a deep understanding of STEM concepts. Students have the opportunity to explore scratch, coding, minecraft, microrobits, robotics & more under the guidance of experienced instructors.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="w-full h-auto py-12 lg:px-20 px-6 text-center">
            <h4 className='text-gray-800 font-algeria text-4xl font-bold' data-aos="fade-up" data-aos-duration="800">Online coding classes for children</h4>
            <div className='w-32 border-b-4 border-yellow-600 mx-auto mt-1' data-aos="fade-up" data-aos-duration="800"></div>
            <p className='lg:text-lg font-medium mt-8' data-aos="fade-down" data-aos-duration="900">Experience our meaningfully engaging, intellectually challenging and highly productive online coding classes for children, where we prioritize both enjoyment and effectiveness. Our meticulously designed classes aim to equip students with the essential programming knowledge, skills, and confidence needed to excel in an increasingly digital landscape.</p>
            <p className='lg:text-lg font-medium mt-8' data-aos="fade-down" data-aos-duration="900" >By addressing real-world relevance, nurturing essential workplace skills, providing career guidance, integrating technology, collaborating with industry partners, and fostering adaptability, ICL plays a pivotal role in preparing students for their future careers. By combining academic achievements with practical skills and career exploration, we ensure that students are well-equipped to enter the workforce and contribute meaningfully to the evolving global economy.</p>
        </section>

        <div class="about-us w-full h-auto flex lg:flex-row flex-col mt-8 lg:py-20 py-10">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-4xl font-bold text-pink-700">
                    <h1 data-aos="fade-right" data-aos-duration="800">Qualified Instructors </h1>
                    <div data-aos="fade-right" data-aos-duration="800" className="w-32 border-b-4 border-gray-800 mt-4"></div>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-right" data-aos-duration="800">Instructors at ICL have a genuine passion for STEM education and a commitment to inspiring and motivating students in these subjects. They are enthusiastic about sharing their knowledge and fostering a love for learning in students. They have a strong educational background and expertise in the specific STEM disciplines they teach. This includes degrees or certifications in sc ience, technology, engineering, or mathematics.</p>
                    <p className='mt-4' data-aos="fade-right" data-aos-duration="800">Our instructors are skilled in fostering teamwork and collaboration among students. They encourage collaborative projects, group discussions, and problem-solving activities that promote teamwork skills, as collaboration is integral to many STEM professions.</p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full bg-gray-400 flex">
                <img src="images/instructor.jpg" alt="3-Week Coding Classes" />
            </div>
        </div>

        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default About;
