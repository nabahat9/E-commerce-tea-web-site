import React from 'react';
import Visa from './Visa.png';
import visa1 from './Visa1(1).png';
import visa2 from './Visa1(2).png';
import visa3 from './Visa1(3).png';
import line from './Line.png';
import line2 from './Line2.png';
import line3 from './Line3.png';


function Paymetype() {
    return(<div className='text-[#282828] mx-16 mb-16'>
<p className='mb-6 font-MontserratSmall text-22 leading-28 tracking-normal text-left'>Payment type</p>
<div className='w-360 my-6 h-56 flex  border-[#A0A0A0] border border-solid justify-center items-center'>
<img src={Visa}/>
</div>

<div className='my-6 border-[#A0A0A0] border border-solid justify-center items-center w-360 h-290 '>
       <div className=' flex mt-6 mb-8 mx-3'>
        <div className='mx-2'>
<p className='font-MontserratMeduim text-16 leading-24 tracking-wider text-left'>Credit or Debit card</p>
</div>
<div className='mx-2'>
<img src={visa1}/>
</div>
<div className='mx-2'>
<img src={visa2}/>
</div>
<div className='mx-2'>
<img src={visa3}/>
</div>
</div>

<div className='mt-10 mx-9 whitespace-pre-line'>
    <p className='font-MontserratSmall text-16  leading-24 tracking-tight text-left'>Card Number</p>
    <p className='text-[#A0A0A0]'>XXXX         XXXX        XXXX      XXXX</p>
    <img src={line}/>
</div>
<div>
    <div className='mx-8'>
        <div className='flex mt-10'>
    <p className='mr-14 font-MontserratSmall text-16 leading-24 tracking-tight text-left'>Expired date</p>
    <p className='font-MontserratSmall text-16  leading-24 tracking-tight text-left'>CVC</p>
    </div>
    <p className='text-[#A0A0A0]'>XX/XX</p>
    <div className='flex '>
        <img className=" mr-10"src={line2}/>
        <img src={line3}/>
    </div>

</div>

    </div></div>
<button className='border-[#282828] w-360 h-56 border border-solid'>Advanced payment</button>

    </div>)}
    export default Paymetype;