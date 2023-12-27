import React from 'react';
import psychiatryImage from './psychiatry.png';
import searchImage from './Search.png';
import personImage from './Person.png';
import mallImage from './local_mall.png';
 

function Navbarg() {
  return (
    <div className="flex mx-auto pt-5 px-2 pb-3 sm:px-6 lg:px-8 bg-[#F4F4F4]">
    <div className="flex place-self-center items-center flex-1 w-[192px] h-[48px]  grid-cols-2">
      <div>
      <img src={psychiatryImage} alt="Logo" className=''  />
      </div>
      <div>
      <p className="text-center font-porto flex-1 font-normal text-base leading-20 tracking-tighter text-opacity-100 text-gray-800" >Brand Name</p>
      </div>
    </div>

    <div className="mr-4 flex-2 place-self-center flex items-center font-Montserrat mx-4 text-opacity-100 text-gray-800">
      <button type="ButtonS" className="mr-4 text-center relative inline-flex items-center justify-center">
        TEA COLLECTIONS
      </button>
      <button type="ButtonS" className="mr-4 text-center">
        ACCESORIES
      </button>
      <button type="ButtonS" className="mr-4 text-center">
        BLOG
      </button>
      <button type="ButtonS" className="mr-4 text-center">
        CONTACT US
      </button>
    </div>
    <div className="flex-3 place-self-center flex items-center ml-[2.375rem]">
      <div className='ml-[2.375rem]'>
      <button className=' relative inline-flex items-center justify-center '>
      <img src={searchImage} alt="Search Icon" />
      </button>
      </div>
      <div className='ml-[2.375rem]'>
      <button className='relative inline-flex items-center justify-center'>
      <img src={personImage} alt="Person Icon" />
      </button>
      </div>
      <div className='ml-[2.375rem]'>
      <button className='relative inline-flex items-center justify-center'>
      <img src={mallImage} alt="Shopping Cart Icon" />
      </button>
      </div>
    </div>
  </div>
)}
export default Navbarg;
