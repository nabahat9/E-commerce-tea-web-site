import { useState } from 'react';
import expand from './expand.png';




function Creation() {
    return(<div className='bg-[#F4F4F4] text-[#282828] ml-2 mb-16 w-456 h-381 pt-7 pb-10 px-4'>
    <div>
        <p className="font-MontserratSmall text-2xl leading-7 ml-4 mb-4 tracking-normal text-left">New to our company?</p>
        <p className="font-MontserratSmall text-base leading-6 ml-4 tracking-wide text-left">Create an account for the best experience</p>
    </div>
    <div className='className='font-MontserratSmall ml-6 mt-4 text-base leading-5 tracking-tight text-left>
        <div className='flex ml-8 my-6'><img src={expand}/><p className='ml-2'>Modify and track your orders</p></div>
        <div className='flex ml-8 my-6'><img src={expand}/><p className='ml-2'>Faster checkout</p></div>
        <div className='flex ml-8 my-6'><img src={expand}/><p className='ml-2'>Get a 10% discount for new customer</p></div>
    </div>
    <button className='font-MontserratMeduim text-16 leading-20 tracking-tighter text-center 
  border border-solid border-[#282828] gap-8 ml-4 h-56 w-392 my-8'><p className=''>CREATE AN ACCOUNT </p></button>

    
    </div>)
}
export default Creation;