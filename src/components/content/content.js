import React, { useState } from 'react';
import more from './more.png';
import img from './img.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';


function Content() {
    return(<>
     <div className='text-[#282828] mb-8 mt-12 pt-10'>
             <div className='flex items-right justify-end' >SORT BY <img src={more}/></div>
            <div className='mt-8 flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-5'>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img}/>
                    <div className='items-center justify-center '>
                     <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'><span className='font-MontserratMeduim text-xl leading-12 tracking-tighter"'>€4.85 </span>/ 50 g</p>
                     </div>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img1}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img2}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
            </div>
            <div className='flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-10 '>
                <div className='w-1/3 mx-5 px-4 '>
                    <img src={img3}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img4}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img5}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
            </div>
            <div className='flex container mx-auto text-center font-MontserratMeduim text-2xl leading-8 tracking-tighter py-10 '>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img6}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img7}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
                <div className='w-1/3 mx-5 px-4'>
                    <img src={img8}/>
                    <p className='pt-6'>Ceylon Ginger <br/>Cinnamon chai tea</p>
                     <p className='pt-6'>€4.85 / 50 g</p>
                </div>
            </div>
        </div>
        
    </>)
}
export default Content;