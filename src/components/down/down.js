import React from 'react';
import local_coffe from './local_cafe.png';
import local_shopping from './local_shopping.png';
import redeem from './redeem.png';
import sell from './sell.png';

function Down() {
  return (<div className='bg-[#F4F4F4] text-[rgb(40,40,40)] font-MontserratMeduim font-medium text-16 leading-24 tracking-tighter pt-12 pb-10 w-full'>
    <div className='container mx-auto text-center'>
<div className='inline-block px-10 '>
<img className='inline-block mr-2' src={local_coffe}/>
<p className=' inline-block'>450+ KIND OF LOOSEF TEA</p>
    </div>
    <div className='inline-block px-10 '>
<img className='inline-block mr-2' src={local_shopping}/>
<p className=' inline-block'>CERTIFICATED ORGANIC TEAS</p>
    </div>
    <div className='inline-block px-10 '>
<img className='inline-block mr-2' src={redeem}/>
<p className=' inline-block'>FREE DELIVERY</p>
    </div>
    <div className='inline-block px-10 '>
<img className='inline-block mr-2' src={sell}/>
<p className=' inline-block'>SAMPLE FOR ALL TEAS</p>
    </div>
    </div>
    <div className='mt-10'>
<button className=' mx-auto block border border-[#282828] border-1 px-4 py-2'>
    <p className='px-16 py-3'>
    LEARN MORE
    </p>
</button>
</div>
  </div>)}
  export default Down;
