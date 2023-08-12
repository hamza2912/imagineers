import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


function Program() {

  

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
        <section id='course1' className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria font-algeria' 
                        >Course 1: Animations and Games with Scratch</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Elementary School Children (Ages 7-10)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >This program serves as an outstanding entry point to programming specifically tailored for younger students. Through the user-friendly interface of Scratch, students will gain powerful programming concepts. Each lesson is dedicated to creation of games or animations, which effectively teach essential programming skills like variable utilization, loop implementation, and conditional usage. By the conclusion of the course, students will possess the capacity to code basic Scratch games and animations.  </p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course1.jpg" alt="Course 1" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Animation and Games with Scratch course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Apply fundamental programming concepts, such as loops, conditional statements, and event-driven programming, to construct captivating Scratch projects</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Design simple animations, storybook applications, and personalized sprites (characters).</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop games that incorporate animations, sounds, and custom sprites, incorporating features like collision detection, scoring mechanisms, and more.</li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>No prerequisites for this course are required. Beginners with no experience are welcome.</p>
            </div>
        </section>
        <section id='course2' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 2: Logic with Scratch</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Elementary School Children (Ages 7-10)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Logic with Scratch serves as the second course in our elementary school program, enabling students to further develop their skills upon the foundation established in the preceding course. They continue to enhance their understanding of essential concepts such as variables, data types, lists, arrays, loops, and operators. This course equips students with skills that seamlessly transition to other programming languages as they progress from the familiar block-based language to writing text-based code. Each lesson offers an opportunity for students to create an enjoyable game or animation, reinforcing the techniques they have acquired thus far. Upon completion of Logic with Scratch, students are prepared to advance to our Intro to Text-Based Programming course, where they will explore text-based programming using the Python programming language.  </p>
                        <p className='mt-4'>Leveraging MIT's Scratch platform and its block-based programming language, this course ensures that programming remains accessible, enjoyable, and effortless for young learners.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course2.jpg" alt="Course 2" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Logic with Scratch course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Employ advanced programming concepts, including list manipulation, function creation, and user input processing, to construct increasingly intricate Scratch applications and games.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Craft complex animations, manipulate and personalize audio elements, and utilize timers effectively within the Scratch environment.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Create applications and games that leverage Scratch extensions to extend the capabilities of the core Scratch interface.</li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>These courses must be completed before Logic with Scratch:</p>
                <ul className='mt-4'>
                    <li>- ICL, Course 1: <span className="text-blue-500">Animation and Games with Scratch </span></li>
                </ul>
            </div>
        </section>
        <section id='course3' className='bg-white'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 3: Introduction to Python Programming for Data Analysis
                        </h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800"  className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-17)</h2>
                        <p className='font-bold mt-4'>TIme: 55 Minutes</p>
                        <p className='font-bold'> Durtion: 6 Weeks, 2 Sessions/week</p>
                        <p className='font-bold'> Pricing: C$255</p>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >In the first course, students establish a solid programming foundation by immersing themselves in Python. Throughout engaging in project-based lessons, they acquire skills in variable manipulation, data types, list handling, loop implementation, conditional logic, and function creation. This course ignites their passion for programming and equips them with transferable fundamental programming skills applicable across various programming languages and problem domains. With the completion of this course, students are prepared to embark on the subsequent stage of our structured curriculum, Beyond Basics with Python.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course3.jpg" alt="3-Week Coding Classes" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>By the end of the 6-week Python course, students will learn the following:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Setting up Python environment and running Python code.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Working with variables and different data types.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Performing arithmetic operations using Python.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understanding control flow statements such as if-else, for loops, and while loops.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Creating and utilizing functions in Python, along with handling arguments and return values.
                        </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Exploring built-in functions and working with modules by importing them into their programs.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understanding the fundamentals of data manipulation and analysis with NumPy and Pandas.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Cleaning and transforming data for further analysis.
                        </li>
                      <li data-aos="fade-up" data-aos-duration="800">- Conducting exploratory data analysis, summarizing data, and visualizing data using Matplotlib.
                    </li>
                    <li data-aos="fade-up" data-aos-duration="800">- Gaining hands-on experience in real-world projects, including data cleaning and analysis.</li>
                    <li data-aos="fade-up" data-aos-duration="800">- Able to start Freelancing.
                    </li>

                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>No prerequisites for this course are required. Beginners with no experience are welcome.</p>
            </div>
        </section>
        {/* <section id='course4' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 2: Beyond Basics with Python</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-13)</h2>

                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Beyond Basics with Python, the second course in our middle school Wizard Level 1 curriculum, focuses on reinforcing Python programming skills while empowering students to construct interactive applications and games. Throughout the course, students will delve into advanced topics, including complex conditional statements, Python's versatile list and dictionary data structures, and the effective implementation of loops in their programs. By the conclusion of this course, students will be fully prepared to advance to the subsequent stage of our structured programming curriculum, Webpages with HTML and CSS.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/course4.jpg" alt="course 4" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Moonshots</h2>
                <p>On completion of the Beyond Basics with Python course, students will acquire the following abilities:</p>
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain proficiency in Python's fundamental data structures and leverage them to address practical programming challenges.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Create user-friendly interactive applications and games that actively involve the user, employing essential programming elements such as loops, functions, and conditional statements.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Utilize Python's built-in random module to develop chance-based games and simulate basic artificial intelligence for game opponents. </li>
                    </ul>
                <h2 className='mt-6 font-bold text-lg'>Prerequisites</h2>
                <p>These courses must be completed before Logic with Scratch:</p>
                <ul className='mt-4'>
                    <li>- ICL 1, Course 1: <span className='text-blue-500'>Introduction to Programming with Python</span></li>
                </ul>
            </div>
        </section> */}
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
                        <p className='font-bold'> Pricing: C$285</p>
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
        <section id='course7' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 7: Intro to AI</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Welcome to the fascinating world of Artificial Intelligence (AI)! This introductory course is specially designed for curious middle schoolers looking to explore the exciting possibilities of AI. Through a blend of interactive lessons, hands-on activities, and creative projects, we'll embark on an engaging journey to understand the foundations of AI, machine learning, and robotics. We'll dive into real-world examples of AI applications, such as image recognition, natural language processing, and even AI in real life. With a focus on ethical considerations, critical thinking, and teamwork, students will unleash their problem-solving skills and gain insight into how AI is shaping our lives. By the end of this course, you'll be equipped with a solid understanding of AI concepts and be inspired to become the AI innovators of tomorrow. Join us as we explore the wonders of Artificial Intelligence together!</p>
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
                      <li data-aos="fade-up" data-aos-duration="800">- Understand the Basics of AI: Students will grasp the fundamental concepts of Artificial Intelligence, including its definition, components, and real-life applications.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore Machine Learning: Middle schoolers will learn about machine learning and its role in training computers to recognize patterns and make predictions.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Discover Robotics and AI: Students will explore the relationship between AI and robotics, gaining insight into how AI powers robots and enables them to perform tasks.
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Discover Cloud Virtualization: Middle schoolers will learn about virtualization and its role in optimizing resource utilization and efficiency in the cloud.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Engage with Natural Language Processing: Middle schoolers will discover how AI can understand and process human language, exploring applications like voice assistants and language translation.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Embrace Ethical Cloud Computing: Middle schoolers will understand the ethical implications of cloud computing and how to prioritize data privacy and security.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Foster Ethical AI Awareness: Students will discuss the importance of ethical considerations in AI development and usage, and understand the impact of AI on society.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stimulate Critical Thinking: Through discussions and activities, students will develop critical thinking skills and explore the possibilities and challenges of AI's future.</li>
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
  
export default Program;
