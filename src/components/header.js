import {isMobile} from 'react-device-detect';
import React from "react";
import { useHistory } from 'react-router-dom';


function Header({page}) {

    const [showNav, setshowNav] = React.useState(false);
    const [showdropdown, setshowdropdown] = React.useState(false);
    const [headercolor, setheadercolor] = React.useState("bg-transparent text-white");

    let history = useHistory();

    const listenScrollEvent = (event) => {
        if (window.scrollY > 0) {
          return setheadercolor("bg-white text-black")
        } else {
          return setheadercolor("bg-transparent text-white")
        } 
    }

    const scrolltoJoin = (el) => {
        const menu = document.getElementById('join')
        window.scrollTo({
            top: menu.offsetTop - 90,
            behavior: "smooth"
          });
    }

    
    


    React.useEffect(() => {
        
        if(!isMobile){
            // setshowNav(true);
        }

        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (

    <header class="w-full h-auto">
        <div className={headercolor + " w-full h-auto bg-transparent fixed z-50 shadow-lg"}>
            <div class="w-full h-auto flex flex-row items-center justify-between pr-6 lg:pr-0">
                <div class="lg:w-1/5 w-1/4 flex justify-start items-center lg:px-16 px-6 lg:h-24 h-20">
                    <a className='lg:w-24 w-40' href="/">
                        <img className='w-full' src="images/logo/Imagineers_Logo.png" alt="Logo" />
                        {/* <h1 className="text-2xl font-semibold">Imagineers</h1>  */}
                    </a>
                </div>
                <div class="w-2/5 lg:px-16 px-6 lg:h-24 h-20 flex items-center">
                    <div class="w-full hidden lg:flex flex-row justify-between font-semibold">
                        <div class="h-green">
                            <a  
                            href='about'
                            >About</a>
                        </div>
                        <div class="relative">
                            {/* <a 
                            href='#programs'>Programs</a> */}
                            <a onClick={()=>setshowdropdown(!showdropdown)} className="h-green z-10">Programs</a>
                                {showdropdown ? <div class='absolute w-64 flex flex-col  pl-2 pt-4 pb-4 top-5 left-0 shadow-lg text-sm slide-down-fast'>
                                    <a className="h-green" target='_blank' href='icl-animations-and-games-with-scratch'>Animations & Games with Scratch</a>
                                    <a className="h-green" target='_blank' href='icl-logic-with-scratch'>Logic with Scratch</a>
                                    <a className="h-green" target='_blank' href='icl-introduction-to-python-programming-for-data-analysis'>Intro to Python Programming</a>
                                    <a className="h-green" target='_blank' href='icl-web-development-mastery'>Web development Mastery</a>
                                    <a className="h-green" target='_blank' href='icl-intro-to-datascience'>Intro to Datascience</a>
                                    <a className="h-green" target='_blank' href='icl-intro-to-cloud-computing'>Intro to Cloud Computing</a>
                                    <a className="h-green" target='_blank' href='icl-intro-to-ai'>Intro to AI</a>
                                    <a className="h-green" target='_blank' href='icl-c-plus-development'>C++ Development</a>
                                    <a className="h-green" target='_blank' href='icl-cybersecurity'>Cybersecurity</a>
                                    <a className="h-green" target='_blank' href='icl-ai-with-machine-learning'>AI with Machine Learning</a>
                                    <a className="h-green" target='_blank' href='icl-social-media-management'>Social Media Management</a>
                                    <a className="h-green" target='_blank' href='icl-video-design-creation'>Video Design Creation</a>
                                </div>: null}
                        </div>
                        <div class="h-green">
                            <a 
                            href='sessions'>Sessions</a>
                        </div>
                        <div class="h-green">
                            <a 
                            href='pricing'>Pricing</a>
                        </div>
                        <div class="h-green">
                            <a 
                            href='blogs'>Blogs</a>
                        </div>
                        <div class="h-green">
                            <a onClick={scrolltoJoin} >Enroll</a>
                        </div>
                    </div>
                </div>
                {!showNav ? 
                <i className="fa-bars fa-solid text-lg lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i> :
                <i className="fa-times fa-solid text-lg lg:hidden z-50 text-black" onClick={()=>setshowNav(!showNav)}></i>
                }
                {showNav ? 
                    <nav className={"fixed w-full left-0 top-0 bg-white flex flex-col justify-between px-6 py-12 items-center slide-down z-10 shadow-lg"}>
                        <div class="h-green text-black mt-10">
                            <a href='about' onClick={()=>{setshowNav(!showNav)}}>About</a>
                        </div>
                        <div class="h-green text-black mt-10">
                            <a  onClick={()=>setshowdropdown(!showdropdown)}>Programs</a>
                        </div>
                        {showdropdown ? 
                        <div class='h-green text-black mt-10 flex flex-col gap-2 items-center'>
                            <a className="h-green" href='icl-animations-and-games-with-scratch'>Animations & Games with Scratch</a>
                            <a className="h-green" href='icl-logic-with-scratch'>Logic with Scratch</a>
                            <a className="h-green" href='icl-introduction-to-python-programming-for-data-analysis'>Intro to Python Programming</a>
                            <a className="h-green" href='icl-web-development-mastery'>Web development Mastery</a>
                            <a className="h-green" href='icl-intro-to-datascience'>Intro to Datascience</a>
                            <a className="h-green" href='icl-intro-to-cloud-computing'>Intro to Cloud Computing</a>
                            <a className="h-green" href='icl-intro-to-ai'>Intro to AI</a>

                            <a className="h-green" href='icl-c-plus-development'>C++ Development</a>
                            <a className="h-green" href='icl-cybersecurity'>Cybersecurity</a>
                            <a className="h-green" href='icl-ai-with-machine-learning'>AI with Machine Learning</a>
                            <a className="h-green" href='icl-social-media-management'>Social Media Management</a>
                            <a className="h-green" href='icl-video-design-creation'>Video Design Creation</a>


                        </div>: null}
                        <div class="h-green text-black mt-10">
                            <a href='sessions' onClick={()=>{setshowNav(!showNav)}}>Sessions</a>
                        </div>
                        <div class="h-green text-black mt-10">
                            <a href='pricing' onClick={()=>{setshowNav(!showNav)}}>Pricing</a>
                        </div>
                        <div class="h-green text-black mt-10">
                            <a href='blogs' onClick={()=>{setshowNav(!showNav)}}>Blogs</a>
                        </div>
                        <div class="h-green text-black mt-10">
                            <a onClick={()=>{setshowNav(!showNav);scrolltoJoin()}}>Enroll</a>
                        </div>
                    </nav> : null 
                }
            </div>
        </div>
    </header>

    );
}

export default Header;