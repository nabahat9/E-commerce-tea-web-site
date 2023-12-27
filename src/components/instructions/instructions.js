import React from 'react';
import alarm from './alarm.png';
import img from './Ellipse.png';
import kettle from './kettle.png';
import line from './Line.png';
import line3 from './Line3.png';
import water from './water_voc.png';



function Instructions() {
    return(
        <div className='flex px-16 py-12 bg-[#F4F4F4]'>
        <div className='px-14 mr-14'> 
<p className='font-MontserratSmall text-2xl leading-7 mb-10'>Steeping instructions</p>
<div>
    <div className='text-[#000000] flex my-3'>
        <img src={kettle}  className='mx-3'/>
        <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>SERVING SIZE:
        <span className='font-MontserratSmall text-base leading-4'> 2 tsp per cup, 6 tsp per pot</span></p>
    </div>
    <img src={line3} className='my-2 mx-14'/>

    <div className='text-[#282828] flex my-3'>
        <img src={water} className='mx-3' />
        <p className='font-MontserratMeduim text-base leading-5 tracking-wider'>WATER TEMPERATURE:
         <span className='font-MontserratSmall text-base leading-4'>100°C</span></p>
    </div>
    <img src={line3} className='my-2 mx-14'/>

    <div className='text-[#000000] flex my-3'>
        <img src={alarm} className='mx-3' />
        <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>STEEPING TIME: 3 - 5 minutes</p>
    </div>
    <img src={line3} className='my-2 mx-14'/>

    <div className='text-[#282828] flex my-3'>
        <img src={img} className='mx-3' />
        <p>COLOR AFTER 3 MINUTES</p>
    </div>
</div>
        </div>

        <div className='text-[#282828] ml-16'>
<p className='font-MontserratSmall text-2xl leading-7 mb-6'>About this tea</p>
<div className='flex mb-6'>
    <div className='mr-10 my-4'>
    <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>FLAVOR</p>
    <p className='font-MontserratSmall text-base leading-5 tracking-wider'>Spicy</p>
    </div>
    <img src={line} />
    <div className='mx-10 my-4'>
    <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>QUALITIES</p>
    <p className='font-MontserratSmall text-base leading-5 tracking-wider'>Smoothing</p>
    </div>
    <img src={line} />
    <div className='mx-10 my-4'>
    <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>CAFFEINE</p>
    <p className='font-MontserratSmall text-base leading-5 tracking-wider'>Medium</p>
    </div>
    <img src={line} />
    <div className='ml-10 my-4'>
    <p className='font-MontserratMeduim text-lg leading-5 tracking-tighter'>ALLERGENS</p>
    <p className='font-MontserratSmall text-base leading-5 tracking-wider'>Nuts-free</p>
    </div>
</div>
<p className='font-MontserratSmall text-2xl leading-7 mb-6'>Ingredient</p>
<p className='font-MontserratSmall text-base leading-5 tracking-wide'>Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,<br/> Cinnamon sticks, Cardamom, Cinnamon pieces.</p>
        </div>
        </div>
    )}
    export default Instructions