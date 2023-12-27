import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import add from './add.png';
import less from './less.png';
import Line from './Line.png';
import React, { useState } from 'react';


function List() {
    const [num,setNum]=useState(0);
    const handleClickplus = () =>{
    setNum(prev => ++prev);
    }
    const handleClickless = () =>{
        setNum(prev => --prev);
        }

        const [num2,setNum2]=useState(0);
        const handleClickplus2 = () =>{
        setNum2(prev => ++prev);
        }
        const handleClickless2 = () =>{
            setNum2(prev => --prev);
            }

            const [num3,setNum3]=useState(0);
            const handleClickplus3 = () =>{
            setNum3(prev => ++prev);
            }
            const handleClickless3 = () =>{
                setNum3(prev => --prev);
                }
    return(
        <div className='text-[#282828] m-8'>  
    <div className='flex mb-12 text-[#282828]'>
        <img src={img1}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
            <button className='font-MontserratMeduim text-base leading-5 tracking-tighter text-center'>Remove</button>
        </div>
        <div className='ml-4'>
        <div className='flex ml-14'>
            <button className='py-4 px-6' onClick={handleClickless2}><img src={less}/></button>
           <div className='font-MontserratSmall  pt-2 text-xl leading-7 text-center'>
           {num2 }
           </div>
            <button className='py-4 px-6' onClick={handleClickplus2}><img src={add}/></button>
            </div>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-lefttext-base ml-16 pl-16 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
 <div className='flex mb-12   text-[#282828]'>
        <img src={img2}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
            <button className='font-MontserratMeduim text-base leading-5 tracking-tighter text-center'>Remove</button>
        </div>
        <div className='ml-4'>
            <div className='flex ml-14'>
            <button className='py-4 px-6' onClick={handleClickless2}><img src={less}/></button>
           <div className='font-MontserratSmall  pt-2 text-xl leading-7 text-center'>
           {num2 }
           </div>
            <button className='py-4 px-6' onClick={handleClickplus2}><img src={add}/></button>
            </div>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-lefttext-base ml-14 pl-14 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
 <div className='flex mb-12   text-[#282828]'>
        <img src={img3}/>
        <div className='mx-4'>
            <p className='font-MontserratSmall text-sm leading-5'>Ceylon Ginger Cinnamon <br/>chai tea - 50 g</p>
            <button className='font-MontserratMeduim text-base leading-5 tracking-tighter text-center'>Remove</button>
        </div>
        <div className='ml-4'>
            <div className='flex ml-14'>
            <button className='py-4 px-6' onClick={handleClickless3}><img src={less}/></button>
           <div className='font-MontserratSmall  pt-2 text-xl leading-7 text-center'>
           {num3 }
           </div>
            <button className='py-4 px-6' onClick={handleClickplus3}><img src={add}/></button>
            </div>
            <p className='font-MontserratMeduim text-16 font-medium leading-24 text-left text-base ml-14 pl-14 leading-6 tracking-tighter'>€3.90</p>
        </div>
 </div>
 <img className='mx-4' src={Line}/>
 <div className='flex my-6'><p className='font-MontserratSmall mr-16 pr-16 text-16 leading-24 tracking-wide text-left'>Subtotal</p>
 <div className='ml-16 pl-4'><p className='font-MontserratMeduim text-16 font-medium leading-24 text-left text-base ml-16 pl-16 leading-6 tracking-tighter'>€3.90</p></div></div>
 <button className='font-MontserratMeduim text-16 leading-20 tracking-tighter text-center 
  border border-solid border-black gap-8 mx-16'><p className='mx-16 px-4 my-4'>BACK TO SHOPPING</p></button>
        </div>
    )
}
export default List;