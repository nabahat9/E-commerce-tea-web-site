import React, { useState } from 'react';




function Biling() {
    const initialemail = '';

  
  const [email, setEmail]= useState(initialemail);


  const handleSetEmail = () => {

  };
    return(<div className='bg-[transparent] mx-16 w-312 h-282 text-[#282828]'>
<div>
    <p className='font-MontserratSmall text-2xl leading-7 tracking-normal text-left mb-4'>Billing Address</p>
    <p className='text-[#A0A0A0] font-MontserratMeduim text-sm leading-5 mb-4 tracking-tighter text-left'>
        (Same as shipping address)</p>

    <div>
    <div className='flex mr-10 mb-2'>
    <input type="checkbox"/>
    <p className='font-MontserratSmall ml-2 text-base leading-6 tracking-wide text-left'>
        Bill to different address </p>
    </div>
    
    <div className='mt-16 '>
</div>
   <p className='font-MontserratSmall text-2xl leading-7 mb-4 tracking-normal text-left'>Contact information</p> 
   <div className='w-286 h-56 bg-white'>
   <input
        type="email"
        placeholder='Email Address'
        value={email}
        className='bg-[transparent]'
      />
</div>
</div>
</div>
    </div>)}
    export default Biling ;