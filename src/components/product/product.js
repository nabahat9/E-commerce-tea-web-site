import React, { useState } from 'react';
import rectangle from './Rectangle.png';
import eco from './eco.png';
import Group1 from './Group1.png';
import Group2 from './Group2.png';
import Group3 from './Group3.png';
import Group4 from './Group4.png';
import Group5 from './Group5.png';
import Group from './Group.png';
import language from './language.png';
import redeem from './redeem.png';
import mall from './local_mall.png';
import less from './less.png';
import add from './Add.png';
import Modal from '../addtobag/addtobag';

function Product() {
    const [modalOpen,setModalOpen]=useState(false);
    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

    const [num,setNum]=useState(0);
const handleClickplus = () =>{
setNum(prev => ++prev);
}
const handleClickless = () =>{
    setNum(prev => --prev);
    }

    ////////// return //////////
    return(
     
    <div className='text-[#282828] mx-10 my-5 px-5'>
   
    <div>
        <p>HOME/COLLECTIONS/CHAI/CEYLON GINGER CINNAMON CHAI TEA</p>
    </div>

    <div className='flex mx-10 my-10 py-5'>
<div className='flex-1'><img src={rectangle}/></div>
<div className='flex-1'>
    <p className='font-porto text-3xl leading-11 mb-8'>Ceylon Ginger Cinnamon <br/>chai tea</p>
    <p className='font-MontserratSmall text-base leading-6 tracking-wider mb-10'>A lovely warming Chai tea with ginger cinnamon flavours.</p>
    <div className='flex '>

        <div className='flex-1  mr-6  flex'>
            <div className=' mr-2'>
        <img src={language}  />
        </div>
        <div className=' ml-1 '>
        <p className=''>Origin: Iran</p>
        </div>
        </div>

        <div className=' justify-center flex-1 mx-6 items-center flex'>
        <div className=' mr-2 '>
        <img src={redeem}/>
        </div>
        <div className=' ml-1 '>
        <p>Organic</p>
        </div>
        </div>

        <div className='flex-1 items-center ml-6 flex'>
        <div className=' mr-2'>
        <img src={eco}/>
        </div>
        <div className='ml-1  '>
        <p >Vegan</p>
        </div>
        </div>

    </div>
    <p className='font-porto my-6 text-xl leading-tight'>€3.90</p>
    <div>
<p className='font-MontserratMeduim text-base leading-6 tracking-tighter'>Variants</p>
<div className='flex my-4'>
    <div className='flex-1'>
        <img src={Group5}/>
        <p>50 g bag</p>
    </div>

    <div className='flex-1'>
        <img src={Group2}/>
        <p>100 g bag</p>
    </div>

    <div className='flex-1'>
        <img src={Group}/>
        <p>170 g bag</p>
    </div>

    <div className='flex-1'>
        <img src={Group3}/>
        <p>250 g bag</p>
    </div>

    <div className='flex-1'>
        <img src={Group4}/>
        <p>1 kg bag</p>
    </div>

    <div className='flex-1'>
        <img src={Group1}/>
        <p>Sampler</p>
    </div>
</div>
<div className='flex my-10'>
    <div className='flex'>
<button className='py-4 px-6' onClick={handleClickless}><img src={less}/></button>
<div className='font-Montserrat text-2xl leading-7 text-center pt-4'>
{num }
</div>
<button className='py-4 px-6' onClick={handleClickplus}><img src={add}/></button>
    </div>
    <div>
        <button className='bg-[#282828] flex px-14 py-4   text-[#FFFFFF]' onClick={openModal} >
<img src={mall}/>
<p className='mx-4'>ADD TO BAG</p>
        </button>
    </div>
</div>
    </div>
</div>
    </div>
    {modalOpen && <><div className="fixed inset-0 bg-black opacity-50 z-50
    " ></div>
     <Modal onClose={closeModal} /> 
     </>}  
    </div>)}
    export default Product;