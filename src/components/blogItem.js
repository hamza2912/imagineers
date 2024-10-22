import React from "react";


function BlogItem( props ) {

    return (
        
    <div className='bg-blog flex lg:flex-row flex-col text-white lg:px-24 px-5 lg:py-12 py-8 relative z-10 items-center -mt-5 lg:-mt-0' style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${props.src})` 
      }}>
        <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10 mb-5 lg:mb-0'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>{props.title}</h1>
            <p className='lg:text-sm text-xs text-white mt-2'>{props.author}</p>
        </div>
        <div className='lg:w-1/2 w-full lg:h-full h-auto flex flex-col z-10'>
            <p className='text-sm lg:max-w-md lg:w-auto w-64 lg:mt-6 mt-0 truncate'>{props.description}</p>
            <a className='mt-8' href={`/blogs:${props.id}`}>Read More</a>
        </div>
    </div>

    );
}

export default BlogItem;