import React from 'react';
import img from './ImageHolder.png';
import img1 from './ImageHolder(1).png';
import img2 from './ImageHolder(2).png';
import img3 from './ImageHolder(3).png';
import img4 from './ImageHolder(4).png';
import img5 from './ImageHolder(5).png';
import img6 from './ImageHolder(6).png';
import img7 from './ImageHolder(7).png';
import img8 from './ImageHolder(8).png';


function Collections() {
    return(
        <div className='text-[#282828]'>
             <p  className='font-porto font-normal text-4xl leading-10 text-center pb-5 pt-10 '>Our Collections</p>
            <div className='flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-5'>
                <div className='w-1/3 px-4'>
                    <img src={img}/>
                     <p className='pt-6'>BLACK TEA</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img1}/>
                     <p className='pt-6'>GREEN TEA</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img2}/>
                     <p className='pt-6'>WHITE TEA</p>
                </div>
            </div>
            <div className='flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-10 '>
                <div className='w-1/3 px-4 '>
                    <img src={img3}/>
                     <p className='pt-6'>MATCHA</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img4}/>
                     <p className='pt-6'>HERBAL TEA</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img5}/>
                     <p className='pt-6'>CHAI</p>
                </div>
            </div>
            <div className='flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-10 '>
                <div className='w-1/3 px-4'>
                    <img src={img6}/>
                     <p className='pt-6'>OOLONG</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img7}/>
                     <p className='pt-6'>ROOIBOS</p>
                </div>
                <div className='w-1/3 px-4'>
                    <img src={img8}/>
                     <p className='pt-6'>TEAWARE</p>
                </div>
            </div>
        </div>
        )
}
export default Collections;