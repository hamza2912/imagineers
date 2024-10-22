import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Popup from '../components/popup';

export const textTruncate = (text = '', length) => {
    if (text?.length > length) return text.substring(0, length).concat(' . . . ');
    return text;
  };


function Home() {

    const scrolltoJoin = (el) => {
        const menu = document.getElementById('join')
        window.scrollTo({
            top: menu.offsetTop - 90,
            behavior: "smooth"
          });
    }

  return (
      
    <div className=''>

    <Header/>

    <Popup />

        <section id='hero' class="w-full lg:h-screen h-auto lg:p-16 p-5 pb-24 lg:pb-16 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-2/3 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0 lg:pl-12">
                <div data-aos="fade-right" data-aos-duration="800" class="lg:w-full h-auto flex flex-row">
                    <div class="h-auto py-2 text-white text-4xl font-bold">
                        <h1 className='uppercase text-5xl lg:text-left text-center font-poppins'>Imagineers Creative Labs</h1>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" class="w-full h-auto items-center lg:items-start">
                  <div class="w-full h-auto mt-4 lg:text-2xl text-xl text-white mt-8">
                        <h2>Transforming today's gamers into the engineers, animators, robotics experts, and game developers of tomorrow.</h2>
                    </div>
                    <div class="w-full h-auto text-lg text-white mt-8">
                        <h3 class="mt-2 flex items-center"><i class="fa-solid fa-children text-yellow-400 mr-3 text-2xl"></i>Harness your child's passion for gaming into valuable STEM skills</h3>
                        <h3 class="mt-2 flex items-center"><i class="fa-s olid fa-person-chalkboard text-yellow-500 mr-2 text-2xl"></i>Pave the way for their future success through our captivating online classes, cutting-edge curriculum, and expert instructors.</h3>
                    </div>
                </div>
            </div>
        </section>

        <section id="programs" class="w-full h-auto lg:py-20 py-12 lg:px-20 px-6">
            <div class="w-full h-auto text-center text-4xl font-bold ">
                <h1 className='text-gray-800 font-algeria' data-aos="fade-up" data-aos-duration="800">Programs Offered</h1>
                <div className='w-32 border-b-4 border-yellow-600 mx-auto mt-1' data-aos="fade-up" data-aos-duration="800"></div>
            </div>
            <div class="w-full h-auto mt-16">
                <div class="w-full h-auto flex grid lg:grid-cols-2 grid-cols-1 gap-8 justify-between">
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up"  data-aos-delay='50' data-aos-duration="800" class="flex flex-row p-6 text-gray-700">
                            <div class="w-2/3 h-auto ml-3">
                                <h2 class="text-3xl font-bold">Ages: 7-10</h2>
                                <h3 class="mt-2 text-xl text-pink-700 font-bold">Elementary School Children</h3>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <a target="_blank" href='icl-animations-and-games-with-scratch'
                                data-aos="zoom-in" data-aos-delay='150' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-gamepad fa-solid text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Animations and Games with Scratch</h3>
                                    <p class="mt-4 text-sm">An outstanding entry point to programming specifically tailored for younger students.</p>
                                </div>
                            </a>
                            <a target="_blank" href='icl-logic-with-scratch'
                            data-aos="zoom-in" data-aos-delay='250' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-brain text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Logic with Scratch</h3>
                                    <p class="mt-4 text-sm">Second course in our elementary school program, enabling students to further develop their skills.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div data-aos="fade-up"  data-aos-delay='100' data-aos-duration="800" class="flex flex-row p-6 text-gray-700">
                            <div class="w-2/3 h-auto ml-3">
                                <h2 class="text-3xl font-bold">Ages 11-18</h2>
                                <h4 class="mt-2 text-xl text-pink-700 font-bold">Middle School Children</h4>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <a target="_blank" href='icl-introduction-to-python-programming-for-data-analysis'
                                data-aos="zoom-in" data-aos-delay='200' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-code text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Introduction to Programming with Python for Data Analysis</h3>
                                    <p class="mt-4 text-sm">Students establish a solid programming foundation by immersing themselves in Python.</p>
                                </div>
                            </a>
                            
                            <a target="_blank" href='icl-web-development-mastery'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-keyboard text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Web Development Mastery</h3>
                                    <p class="mt-4 text-sm">Students establish a strong foundation by mastering HTML and CSS, and creating well-structured web pages.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-intro-to-datascience'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-database text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Intro to Datascience</h3>
                                    <p class="mt-4 text-sm">Embarking on an exciting journey to unravel the mysteries of data through interactive activities, hands-on projects, and creative experiments..
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-intro-to-cloud-computing'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-cloud text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Intro to Cloud Computing</h3>
                                    <p class="mt-4 text-sm">Embarking on an exciting journey to understand the fundamentals of cloud computing and its impact on our digital lives.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-intro-to-ai'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-brain text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Intro to AI</h3>
                                    <p class="mt-4 text-sm">Embarking on an engaging journey to understand the foundations of AI, machine learning, and robotics.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-c-plus-development'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-code text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">C++ Development Course Description</h3>
                                    <p class="mt-4 text-sm">Embark on a journey into the world of C++ programming with our comprehensive C++ Development Course.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-cybersecurity'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-lock text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Cybersecurity</h3>
                                    <p class="mt-4 text-sm">Join us on a journey into the world of cybersecurity with our comprehensive Cybersecurity Course.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-ai-with-machine-learning'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-brain text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">AI with Machine Learning</h3>
                                    <p class="mt-4 text-sm">Delve into the fascinating world of Artificial Intelligence (AI) with our comprehensive AI with Machine Learning Course.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-social-media-management'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-keyboard text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Social Media Management</h3>
                                    <p class="mt-4 text-sm">Join our Social Media Management Course and unlock the keys to success in the dynamic world of social media marketing.
                                    </p>
                                </div>
                            </a>

                            <a target="_blank" href='icl-video-design-creation'
                                data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-col items-center border border-gray-300 lg:p-4 px-3 py-4 text-white bg-yellow-600">
                                <div class="w-25 h-auto lg:text-4xl text-3xl">
                                    <p><i class="fa-solid fa-keyboard text-yellow-200"></i></p>
                                </div>
                                <div class="w-full h-auto text-center">
                                    <h3 class="lg:text-xl text-base font-semibold">Video Design and Creation</h3>
                                    <p class="mt-4 text-sm">Step into the world of digital storytelling with our Video Design and Creation Course.
                                    </p>
                                </div>
                            </a>
                            


                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="bg-gray-900 w-full h-auto flex lg:flex-row flex-col mt-8 text-white">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 lg:py-20 p-6">
                <div class="w-full h-auto text-4xl font-bold">
                    <h1 data-aos="fade-right" data-aos-duration="800">3-Week Coding Classes</h1>
                    <div data-aos="fade-right" data-aos-duration="800" className="w-32 border-b-4 border-white mt-4"></div>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-right" data-aos-duration="800">Enroll your kids in our 3-week intensive coding classes designed to cover the same curriculum as our structured program, but with a more frequent meeting schedule during their school break. They will have the opportunity to learn popular programming languages such as Scratch, Python, and Java. With our summer programming classes, students can complete three full courses within a single summer. We offer course terms in July, August and catering to elementary, middle, and high school students. </p>
                </div>
                <table class="ui celled table">
                    <thead>
                        <tr>
                        <th>Length</th>
                        <th>Session Duration</th>
                        <th>Sessions / Week</th>
                        <th>Tuition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-pink-700 font-bold'>
                        <td>3 Weeks</td>
                        <td>50 Minutes</td>
                        <td>4 Sessions / Week</td>
                        <td><span className='line-through'>C$280</span> C$200</td>
                        </tr> 
                    </tbody>
                </table>
                <button onClick={scrolltoJoin} className='px-5 py-2 bg-yellow-600 mt-2 font-semibold text-sm hover:text-white'>Enroll Now</button>
            </div>
            <div class="lg:w-1/2 w-full bg-gray-400 flex">
                <img src="images/summer2.png" alt="3-Week Coding Classes" />
            </div>
        </div>  

        <div class="bg-gray-900 text-white w-full h-auto flex lg:flex-row flex-col-reverse mt-8">
            <div class="lg:w-1/2 w-full bg-gray-400 flex">
                <img src="images/summer.png" alt="contentImg3" />
            </div>
            <div class="lg:w-1/2 w-full h-auto lg:p-16 lg:py-20 p-6">
                <div class="w-full h-auto text-4xl font-bold">
                    <h1 data-aos="fade-right" data-aos-duration="800">1-Week Coding Camps with Roblox & Minecraft</h1>
                    <div data-aos="fade-right" data-aos-duration="800" className='w-32 border-b-4 border-white mt-4'></div>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-right" data-aos-duration="800">Join our 1-week coding camps designed specifically for kids, where they will utilize Minecraft and Roblox to grasp fundamental coding concepts. During the camp, children engage in building enjoyable projects while indulging in their favorite games. Elevate your gaming experience and acquire valuable skills. By the conclusion of this online camp, students will gain confidence and a comprehensive understanding of the necessary vocabulary to pursue further programming endeavors. They will have the opportunity to play Minecraft and Roblox, construct captivating applications, and delve into the world of coding!
                    </p>
                </div>
                <table class="ui celled table">
                    <thead>
                        <tr>
                        <th>Length</th>
                        <th>Session Duration</th>
                        <th>Sessions / Week</th>
                        <th>Tuition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-pink-700 font-bold'>
                        <td>1 Week</td>
                        <td>2 Hours</td>
                        <td>5 Sessions / Week</td>
                        <td><span className='line-through'>C$240</span> C$170</td>
                        </tr> 
                    </tbody>
                </table>
                <button onClick={scrolltoJoin} className='px-5 py-2 bg-yellow-600 mt-2 font-semibold text-sm hover:text-white'>Enroll Now</button>
            </div>
        </div>
        
        <div class="bg-gray-900 w-full h-auto flex lg:flex-row flex-col mt-8 text-white">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 lg:py-20 p-6">
                    <div class="w-full h-auto text-4xl font-bold">
                        <h1 data-aos="fade-right" data-aos-duration="800">ICL’s Mentorship Program</h1>
                        <div data-aos="fade-right" data-aos-duration="800" className="w-32 border-b-4 border-white mt-4"></div>
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p data-aos="fade-right" data-aos-duration="800">Our STEM-Based Learning Center is committed to fostering a collaborative learning environment that goes beyond traditional classroom boundaries. In line with this vision, we have established a unique mentorship program aimed at both parents and students. Our aim is to empower families with a deeper understanding of STEM education, a clear learning trajectory for their children, and valuable industry insights. This program aligns with our goal of shaping the next generation of STEM leaders. 
                        </p>
                        <p className='my-4' data-aos="fade-right" data-aos-duration="800">
                        We provide resources, workshops, and seminars to enhance their understanding of the STEM fields, curriculum, and career opportunities. This trajectory helps them build a solid foundation and progress to more complex challenges. This equips them with an understanding of the practical applications and potential career paths within STEM industries.
                        </p>
                    </div>
                    <a href='https://forms.gle/rr5vfYxCYwQ6Tv5j8' target='_blank' className='px-5 py-2 bg-yellow-600 mt-2 font-semibold text-sm hover:text-white'>Register Now</a>
            </div>
        </div>

        <div class="w-full h-auto flex justify-center lg:py-16 py-10">
            <div class="lg:w-3/4 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-4xl font-bold text-center">
                    <h1 className='text-gray-800 font-algeria' data-aos="fade-up" data-aos-duration="800">What’s Provided with our Summer Classes</h1>
                    <div className='w-32 border-b-4 border-yellow-600 mx-auto mt-1' data-aos="fade-up" data-aos-duration="800"></div>
                </div>
                <div class="w-full h-auto mt-6">
                    {/* <p data-aos="fade-left" data-aos-duration="800">Scratch coding classes are designed for kids aged 4-13 who want to learn the basics of coding in a fun and easy way. You will learn from experienced instructors who will teach you step-by-step how to use Scratch and help you with any questions or problems. You will also work on exciting projects that match your interests and skill level.By the end of the classes, you will have learned how to:
                    </p> */}
                    <ul data-aos="fade-right" data-aos-duration="800" className='mt-8'>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> 55-Minute Classes Monday through Thursday for 3 Weeks</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Live, Student-Focussed, Teacher-Guided Online Classes</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Students Attend Classes from Home. No Driving for Parents.</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Qualified, Experienced, Passionate Instructors</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Hands-On, Interactive Classes</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Project-Based Class Work</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Beginner Friendly, No Experience Needednds-On, Interactive Classes</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Real-World Programming Languages</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Custom-Built Coding Platform</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Regular Parent Updates on Student Progress</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i> Certification for Successful Class Completion</li>
                      <li className='flex flex-row gap-2 items-center lg:text-lg'><i class="fa-solid fa-circle-check text-green-600"></i><span className='line-through'>C$560</span> $400 Per Course ($133 Weekly installment plan available)</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Home;
