import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import React, { useState } from 'react';


function List2() {
    return(
        <div className='text-[#282828] m-8 mx-16'>  
    <div className='flex mb-12 text-[#282828]'>
        <img src={img1}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
        </div>
        <div className=''>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-lefttext-base ml-16 pl-16 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
 <div className='flex mb-12   text-[#282828]'>
        <img src={img2}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
        </div>
        <div className='ml-4'>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-lefttext-base ml-14 pl-14 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
 <div className='flex mb-12   text-[#282828]'>
        <img src={img3}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
        </div>
        <div className='ml-4'>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-left text-base ml-14 pl-14 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
  </div>
    )
}
export default List2;