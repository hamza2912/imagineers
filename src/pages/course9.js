import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function Course9() {

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
        <section id='course9' className='bg-gray-50'>
            <div class="w-full h-auto flex lg:flex-row flex-col items-center">
                <div class="lg:w-1/2 w-full h-auto lg:px-16 px-6 lg:pt-16 pt-6">
                    <div class="w-full h-auto">
                        <h1 className='lg:text-4xl text-3xl font-bold text-blue-500 font-algeria' 
                        >Course 9: Cybersecurity</h1>
                        <div className="w-32 border-b-2 border-black mt-4"></div>
                        <h2 data-aos="fade-right" data-aos-duration="800" className='mt-6 font-bold text-2xl text-pink-700'>Middle School Children (Ages 11-18)</h2>
                        {/* <p className='font-bold mt-4'>TIme: 55 Minutes</p> */}
                        <p className='font-bold'> Durtion: 7 Sessions</p>
                        {/* <p className='font-bold'> Pricing: C$285</p> */}
                    </div>
                    <div class="w-full h-auto mt-6">
                        <p 
                        data-aos="fade-right" data-aos-duration="800"
                        >Join us on a journey into the world of cybersecurity with our comprehensive Cybersecurity Course. Designed for beginners and aspiring cybersecurity professionals, this course provides a comprehensive overview of cybersecurity principles, techniques, and best practices. Participants will explore the fundamentals of cybersecurity, including threat detection, risk assessment, and incident response, while gaining practical experience through hands-on exercises and simulations. From understanding common cyber threats to implementing effective security measures, this course equips you with the knowledge and skills necessary to protect organizations and individuals from cyber attacks in today's digital landscape.</p>
                    </div>
                </div>
                <div class="lg:w-1/2 w-full bg-gray-400 flex mt-4 lg:mt-0">
                    <img src="images/cyber.jpg" alt="course 9" />
                </div>
            </div>
            <div className='lg:px-16 px-6 lg:pb-16 pb-6'>
                <h2 className='mt-6 font-bold text-2xl text-yellow-500'>Learning Objectives</h2>
                {/* <p>By the end of the 7-session course, students will:</p> */}
                <ul className='mt-4'>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain a solid understanding of cybersecurity principles, concepts, and terminology, including confidentiality, integrity, and availability (CIA) triad.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Recognize common cyber threats and attack vectors, including malware, phishing, ransomware, and social engineering techniques.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn how to conduct risk assessments to identify potential vulnerabilities and prioritize security measures based on risk levels.
</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore various security controls and measures to protect networks, systems, and data from cyber threats, including encryption, access control, and intrusion detection/prevention systems (IDS/IPS).</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Understand the principles of network security and secure network architecture design, including firewalls, VPNs, and secure protocols.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Learn techniques for monitoring network traffic, detecting suspicious activities, and responding to security incidents in real-time.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop incident response plans and procedures to effectively respond to cybersecurity incidents, minimize impact, and restore normal operations.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Explore ethical and legal issues in cybersecurity, including privacy laws, data protection regulations, and ethical hacking practices.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Stay informed about emerging cyber threats, trends, and technologies in the cybersecurity landscape to adapt security strategies accordingly.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Develop communication and collaboration skills to effectively communicate cybersecurity risks, recommendations, and best practices to stakeholders and colleagues.</li>
                      <li data-aos="fade-up" data-aos-duration="800">- Gain the knowledge and skills necessary to pursue cybersecurity certifications such as CompTIA Security+, Certified Ethical Hacker (CEH), or Certified Information Systems Security Professional (CISSP) to enhance career opportunities in cybersecurity.</li>

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
  
export default Course9;
