import React from "react";

function Stages( props ) {

    return (
        
        <div className='stages flex justify-center relative z-10'>
          <div className="z-10">
              <ul className='flex flex-row lg:gap-16 gap-2 text-xl text-gray-300'>
                  <li className={props.step >= 1 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>1</li>
                  <li className={props.step >= 2 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>2</li>
                  <li className={props.step >= 3 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>3</li>
                  <li className={props.step >= 4 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>4</li>
                  <li className={props.step >= 5 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>5</li>
                  <li className={props.step >= 6 ? 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-blue-main text-white' : 'border-4 rounded-full text-sm lg:text-base py-2 lg:px-4 px-3 bg-white text-gray-300'}>6</li>
              </ul>
          </div>
          <div className="h-px w-full absolute top-1/2 bg-gray-400"></div>   
        </div>

    );
}

export default Stages;