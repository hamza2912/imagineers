import React from 'react';
import Header from '../components/header';
import { useParams } from 'react-router';
import { getDatabase, ref, onValue } from "firebase/database";


function Blog() {

    let { id } = useParams();

    const [blog, setblog] = React.useState({});

    React.useEffect(() => {
        const db = getDatabase();
        const blog = ref(db, `blogs/${id.substring(1)}`);
        onValue(blog, (snapshot) => {
          setblog(snapshot.val());
        });
    }, []);
 

    return (
      
        <div>
        
        <Header />  

        <section className='w-full h-auto bg-black lg:pb-16 lg:pt-32 pb-6 pt-20'>
            <div className='home-content w-full h-full'>
                <div style={{ 
                        backgroundImage: `url(${blog.src})` 
                    }} className='w-full h-64 bg-blog'>
                </div>
                <div className='w-full flex flex-col lg:px-24 px-5 text-white'>
                    <h1 className='lg:text-6xl text-3xl font-semibold mt-12'>{blog.title}</h1>
                    <p className='mt-5 text-sm text-gray-400 mt-5'>Written by: <span className='text-white'>{blog.author}</span></p>
                    <p style={{whiteSpace: "pre-wrap"}} className='text-sm mt-12'>{blog.description}</p>
                    <p className='text-sm text-gray-400 mt-10'>{blog.date}</p>
                </div>
                {/* <div className='w-full flex justify-center lg:p-16 p-5'>
                    <div className='lg:w-1/3 w-4/5 flex justify-between items-center'>
                        <a className='mr-2 text-blue-400' href="https://twitter.com/thepixact?s=09" target="_blank"><i className="fab fa-twitter lg:text-2xl text-lg mr-1"></i></a>  
                        <a className='mr-2 text-white' href="https://www.linkedin.com/company/pixact" target="_blank"><i className="fab fa-linkedin lg:text-2xl text-lg mr-1"></i></a>
                        <a className='mr-2 text-fb' href="https://web.facebook.com/thepixact" target="_blank"><i className="fab fa-facebook lg:text-2xl text-lg mr-1"></i></a>
                        <a className='mr-2 text-insta' href="https://www.instagram.com/thepixact/" target="_blank"><i className="fab fa-instagram lg:text-2xl text-lg mr-1"></i></a>
                        <a className='mr-2 text-pink-400' href="https://dribbble.com/wearepixact" target="_blank"><i className="fab fa-dribbble lg:text-2xl text-lg mr-1"></i></a> 
                    </div>
                </div> */}
            </div>
        </section> 

      
      </div>
    );
  }
  
export default Blog;