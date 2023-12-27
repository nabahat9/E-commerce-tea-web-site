import React from 'react';
import img from './LandingMainImage.png';


function Forwholesalers() {
    return(
        <div className='flex pt-10 mt-8 justify-between items-center pr-0 mr-0 pb-14'>
            <div className='w-1/2 pl-20 ml-6'>
<p className='font-porto  text-[#282828] text-4xl leading-10 text-center flex py-10'>
FOR WHOLESALERS
</p>
<div className="w-[379px] h-[130px] flex">
<p className='font-MontserratSmall text-[#282828] leading-7 text-center '>
We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment. 
</p>
</div>
<button className='border border-1 border-[#282828] mt-14  py-4 px-16 font-MontserratMeduim text-base leading-5 tracking-tighter text-center'>GET FREE CONSULTATION</button>
            </div>
            <div className='w-1/2  flex justify-end pl-8 mr-0 pr-0'>
                <img src={img}/>
            </div>

        </div>
    )}
    export default Forwholesalers;