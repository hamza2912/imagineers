import React from 'react';
import BlogItem from '../components/blogItem';
import { getDatabase, ref, onValue } from "firebase/database";


function Blogs_content( props ) {

    const [blogs, setblogs] = React.useState([]);

    const db = getDatabase();

    React.useEffect(() => {
      const get_blogs = ref(db, 'blogs/');
      onValue(get_blogs, (snapshot) => {
        if(snapshot.val()){
            console.log('here')
            var sortedblogs = snapshot.val().sort((a, b) => (a.id < b.id ? 1 : -1));
            console.log(sortedblogs);
            setblogs(sortedblogs);
        }
      });
    }, []);

    return (
        
        <section className='w-full h-auto bg-black lg:pb-16 lg:pt-40 pb-6 pt-20'>
                <div className='home-content w-full h-full'>
                    <div className='flex lg:flex-row flex-col justify-between lg:px-24 px-5 text-white'>
                        <div className='flex flex-col lg:w-1/2 w-full'>
                            <h1 className='lg:text-6xl text-3xl font-semibold mt-5 lg:mt-0'>Our Blogs</h1>
                            <p className='text-sm mt-5'>Transforming today's gamers into the engineers, animators, robotics experts, and game developers of tomorrow.</p>
                        </div>
                        <div className='w-auto flex flex-col lg:items-center'>
                            {/* <Btn_primary className='mt-8' url="/blogs" name="Explore More" /> */}
                        </div>
                    </div>
                    <div className={'w-full h-full py-12 grid ' + `grid-rows-${2}`}>
                        {
                        blogs.map((blog, index) => {
                            return <BlogItem key={index} title={blog.title} author={blog.author} description={blog.description} src={blog.src} id={blog.id} />
                        })
                        }
                    </div> 
                </div>
        </section>
    );
  }
  
export default Blogs_content;