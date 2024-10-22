import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course3() {

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
                        <p className='font-bold'> Pricing: <span className='line-through'>C$370</span> C$270</p>

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
        <div id='join'></div>
        <Footer />
  
    </div>  

  );

}
  
export default Course3;
