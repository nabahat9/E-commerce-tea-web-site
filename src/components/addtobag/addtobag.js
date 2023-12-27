import img from './img.png';
import add from './add.png';
import less from './less.png';
import line from './Line.png';
import React, { useState } from 'react';


function Modal({onClose}) {
    const [num,setNum]=useState(0);
    const handleClickplus = () =>{
    setNum(prev => ++prev);
    }
    const handleClickless = () =>{
        setNum(prev => --prev);
        }
    return(  <div className="fixed inset-0 flex items-center justify-center  z-50">
   
    <div className="modal-container w-501 h-829 ml-auto bg-white rounded-lg">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="modal-content w-501 h-829 mx-6 my-10">
    <div className=' w-501 h-829 mx-6 my-10'>
<p className='font-MontserratSmall mb-6 text-2xl leading-7'>MY BAG</p>
<div>
    <div className='flex mb-16  pb-16 text-[#282828]'>
        <img src={img}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
            <button className='font-MontserratMeduim text-base leading-5 tracking-tighter text-center'>Remove</button>
        </div>
        <div>
            <div className='flex ml-14'>
            <button className='py-4 px-6' onClick={handleClickless}><img src={less}/></button>
           <div className='font-MontserratSmall  pt-2 text-xl leading-7 text-center'>
           {num }
           </div>
            <button className='py-4 px-6' onClick={handleClickplus}><img src={add}/></button>
            </div>
            <p className='font-MontserratMeduim text-base ml-14 pl-14 leading-6 tracking-tighter'>€3.90</p>
        </div>
    </div>

</div>
<div className='mt-16 pt-16'>
<img  className=' mt-16 pt-16 ml-4'src={line}/>
<div className='flex mt-4 mb-2 '>
<div className='mr-14'>
<p className='font-MontserratSmall text-base mr-16 pr-16 leading-6 tracking-wide'>Subtotal</p>
</div>
<div className='ml-10'>
<p className='font-MontserratMeduim text-base leading-6 tracking-tighter ml-16 pl-10'>€3.90</p>
</div>
</div>
<div className='flex mb-4 '>
    <div className='mr-12'>
<p className='font-MontserratSmall mr-16 pr-14 text-base leading-6 tracking-wide'>Delivery </p>
</div>
<div className='ml-14'>
<p className='font-MontserratMeduim text-base leading-6 tracking-tighter pl-10 ml-16'>€3.95</p>
</div>
</div>
<img className='ml-4' src={line}/>
<div className='flex my-4 '>
    <div className='mr-14'>
<p className='font-MontserratMeduim text-base leading-6 pr-16 mr-16 tracking-tighter'>Total</p>
</div>
<div className='ml-10'>
<p className='font-MontserratMeduim text-xl leading-7 ml-16 pl-16 '>€7.85</p>
</div>
    </div>
   <button className='bg-[#282828] text-[#FFFFFF] font-MontserratMeduim
    text-2xl leading-5 tracking-tighter text-center w-200 py-4'> 
   PURCHASE </button>
</div>
</div>
</div>
</div>

</div>


    )}
    export default Modal;