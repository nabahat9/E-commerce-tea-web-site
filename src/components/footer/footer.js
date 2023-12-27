import React from 'react';
import call from './call.png';
import mail from './mail.png';
import location_on from './location_on.png';


function Footer() {
    return(<div className='bg-[#F4F4F4] flex pt-14 px-14 pb-10  text-[#282828]'>
<div className='w-1/4'>
<p className='text-base leading-6 tracking-tighter font-MontserratMeduim pb-6'>COLLECTIONS</p>
<div className='text-sm leading-5 tracking-tightest font-MontserratSmall space-y-2'>
<p>Black teas</p>
<p>Green teas</p>
<p>White teas</p>
<p>Herbal teas</p>
<p>Matcha</p>
<p>Chai</p>
<p>Oolong</p>
<p>Rooibos</p>
<p>Teaware</p>
</div>
</div>
<div className='w-1/4'>
    <p className='text-base leading-6 tracking-tighter font-MontserratMeduim pb-6'>LEARN</p>
    <div className='text-sm leading-5 tracking-tightest font-MontserratSmall space-y-2'>
        <p>About us</p>
        <p>About our teas </p>
        <p>Tea academy</p>
    </div>
</div>
<div className='w-1/4'>
   <p className='text-base leading-6 tracking-tighter font-MontserratMeduim pb-6'>CUSTUMER SERVICE</p> 
   <div className='text-sm leading-5 tracking-tightest font-MontserratSmall space-y-2'>
    <p>Ordering and payment </p>
    <p>Delivery</p>
    <p>Privacy and policy </p>
    <p>Terms & Conditions</p>
   </div>
</div>
<div className='w-1/4'>
    <p className='text-base leading-6 tracking-tighter font-MontserratMeduim pb-6'>CONTACT US</p>
    <div className='text-sm leading-5 tracking-tightest font-MontserratSmall space-y-2'>
        <div className='flex'>
<img src={location_on} className=''/>

<p className='items-center pl-2'>3 Falahi, Falahi St, Pasdaran Ave,</p></div>
<p className='ml-6'>
Shiraz, Fars Provieence
<br/> Iran</p>

        <div className='flex'>
 <img src={mail}/>
 <p className='pl-2'>Email: amoopur@gmail.com</p>
        </div>
        <div className='flex'>
 <img src={call}/>
 <p className='items-center pl-2'>Tel: +98 9173038406 </p>
        </div>
    </div>
</div>
    </div>)}
    export default Footer;