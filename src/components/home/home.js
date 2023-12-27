import React from 'react';
import mainImage from './LandingMainImage.png';

 

function Home() {
  return (
  <div className='lg:flex md:flex xl:flex items-center pt-7 pb-10 '>
    <div className='lg:md:xl:w-1/2 sm:flex sm:justify-center '>
        <img src={mainImage} alt="mainPic" className=''  />
    </div>
    <div className=' w-1/2 p-4 w-456 h-88 justify-center items-center mx-auto max-w-[456px]'>
        <div className='p-4'>
        <p className=' font-porto text-opacity-100 text-[#282828] text-3xl leading-11'>
        Every day is unique, just like our tea
        </p>
        </div>
        <div className='p-4'>
        <p className='font-thin font-MontserratSmall text-opacity-100 text-[#282828] 
         text-base leading-6 tracking-tighter mr-[5px]'>
        Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio.
         Neque lacus nibh eros in.
        </p>
        <p className='font-thin font-MontserratSmall text-opacity-100 text-[#282828]
         text-base leading-6 tracking-tighter mr-[5px]'>
Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio.
 Neque lacus nibh eros in.
        </p>
        </div>
        <div className='p-4'>
        <button className='border-1 p-10 pr-24 pb-6 pl-24 text-center px-4 py-2 
        font-MontserratSmall font-thin text-base bg-[#282828] text-white leading-5 tracking-tighter flex'>
   <p className='pt-3' >BROWES TEAS</p>
        </button>
    </div>
  </div>
  </div>
  )};
  export default Home;