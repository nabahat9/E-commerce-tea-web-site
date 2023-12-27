import React from 'react';
import img9 from './ImageHolder(9).png';
import img10 from './ImageHolder(10).png';

function Lastblog() {
    return(
        <div className='bg-[#F4F4F4] mx-auto pb-7'>
            <p className='font-porto  text-[#282828] text-4xl leading-10 text-center py-10'>Last Blog Posts</p>
            <div className='flex  '>
                <div className='w-1/2 inline-block pl-10 pr-5'>
                <div className='w-1/2 inline-block pl-10 pr-4'>
                <img src={img9}/>
                </div>
            <div className='w-1/2 inline-block pl-4 pr-10  space-y-6'>
                <p className='flex-grow font-normal text-4xl font-MontserratMeduim text-[#282828] text-left tracking-wide leading-10'>How to steep tea like a pro</p>
                <div className='font-Montserratsmall text-[#282828] text-left leading-7  '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.In dictum non consectetur a erat nam at. </p>
                <p> Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.</p>
                </div>
            <button>READ MORE</button>
            </div>
            </div>
            <div className='w-1/2 inline-block pr-10 pl-5'>
            <div className='w-1/2 inline-block pl-10 pr-4'>
                <img src={img10}/>
            </div>
            <div className='w-1/2 inline-block pl-4 pr-10 space-y-6 '>
                <p className=' font-normal text-4xl text-left font-MontserratMeduim text-[#282828] tracking-wide leading-10 '>All about tea aromas</p>
                <div className='font-Montserratsmall text-[#282828] text-left leading-7  '>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.In dictum non consectetur a erat nam at. </p>
                <p> Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.</p>
                </div>
                 <button>READ MORE</button>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Lastblog;