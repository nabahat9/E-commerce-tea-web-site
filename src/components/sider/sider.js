import React, { useState } from 'react';
import add from './Add.png';
import line from './Line 1.png';
import rectangle from './Rectangle8.png';
import cyrcle from './Ellipse 1.png';
import noadd from './noadd.png';

function Sider() {
 
 const [showSubList,setSubList]=useState(Array(6).fill(false));
 const handleClick = (index) =>{
setSubList(prevState => {
const updatedState = [...prevState];
updatedState[index] = !updatedState[index];
return updatedState} );
 }

 const [isChacked, setChecked] = useState(Array(35).fill(false));

 const handleChange = (index) => {
   setChecked(previousValues => {
     const updated = [...previousValues]; // Create a copy of the previous state
     updated[index] = !previousValues[index]; // Toggle the value at the specified index
     return updated; 
    }

    )
 }

    return(
        <div className='ml-16 mt-8 text-[#282828]'>
        <p>HOME/COLLECTIONS/CHAI</p>
        <div className="w-[300px] mt-10">
<div className='px-15px py-2' > 
    <div>
    <div className='flex  pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>COLLECTIONS</p>
    </div>
    <div className='flex-1'>
     <button onClick={() => handleClick(1)}>
     {showSubList[1] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
    {showSubList[1] && (
            <ul className='font-montserrat text-base leading-5 tracking-tighter'>
 <li><input type="checkbox" className="border:2px dotted #00f;display:block;background:#ff0000;" value={1} checked={isChacked[1]} onChange={() =>handleChange(1)} class="form-checkbox rounded-none h-15 w-15 border" />  Black teas</li>
<li><input type="checkbox" value={2} checked={isChacked[2]} onChange={() =>handleChange(2)} /> Green teas</li> 
<li><input type="checkbox" value={3} checked={isChacked[3]} onChange={() =>handleChange(3)} /> White teas</li>
<li><input type="checkbox" value={4} checked={isChacked[4]} onChange={() =>handleChange(4)} /> Chai</li>
<li><input type="checkbox" value={5} checked={isChacked[5]} onChange={() =>handleChange(5)} /> Matcha</li>
<li><input type="checkbox" value={6} checked={isChacked[6]} onChange={() =>handleChange(6)} /> Herbal teas</li>
<li><input type="checkbox" value={7} checked={isChacked[7]} onChange={() =>handleChange(7)} /> Oolong</li>
<li><input type="checkbox" value={8} checked={isChacked[8]} onChange={() =>handleChange(8)} /> Rooibos</li>
<li><input type="checkbox" value={9} checked={isChacked[9]} onChange={() =>handleChange(9)} /> Teaware</li>

            </ul>
            )}
    </div>
    <div class=" ml-4">
    <img className="flex" src={line}/>
    </div>
</div>


<div className='px-15px py-2' > 
    <div >
        <div className='flex pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>ORIGINS</p>
    </div>
    <div className='flex-1'>
     <button onClick={()=> handleClick(2)}>
     {showSubList[2] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
    {showSubList[2] && (
    <ul className='font-montserrat text-base leading-5 tracking-tighter'>
    <li><input type="checkbox" value="" checked={isChacked[11-1]} onChange={() =>handleChange(11-1)} /> India</li>
    <li><input type="checkbox" value="" checked={isChacked[12-1]} onChange={() =>handleChange(12-1)} /> Japan</li>
    <li><input type="checkbox" value="" checked={isChacked[13-1]} onChange={() =>handleChange(13-1)} /> Iran</li>
    <li><input type="checkbox" value="" checked={isChacked[14-1]} onChange={() =>handleChange(14-1)} /> South Africa</li>
    </ul>
    )}
    </div>
    <div class=" ml-4">
    <img className="flex" src={line}/>
    </div>
</div>


<div className='px-15px py-2' > 
    <div >
        <div className='flex pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>FLAVORS</p>
    </div>
    <div className='flex-1'>
     <button onClick={() => handleClick(3)}>
     {showSubList[3] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
   { showSubList[3] && (
    <ul className='font-montserrat text-base leading-5 tracking-tighter'>
<li><input type="checkbox" value="" checked={isChacked[15-1]} onChange={() =>handleChange(15-1)} /> Spicy</li>
<li><input type="checkbox" value="" checked={isChacked[16-1]} onChange={() =>handleChange(16-1)} /> Sweet</li>
<li><input type="checkbox" value="" checked={isChacked[17-1]} onChange={() =>handleChange(17-1)} /> Citrus</li>
<li><input type="checkbox" value="" checked={isChacked[18-1]} onChange={() =>handleChange(18-1)} /> Smooth</li>
<li><input type="checkbox" value="" checked={isChacked[19-1]} onChange={() =>handleChange(19-1)} /> Fruity</li>
<li><input type="checkbox" value="" checked={isChacked[20-1]} onChange={() =>handleChange(20-1)} /> Floral</li>
<li><input type="checkbox" value="" checked={isChacked[21-1]} onChange={() =>handleChange(21-1)} /> Grassy</li>
<li><input type="checkbox" value="" checked={isChacked[22-1]} onChange={() =>handleChange(22-1)} /> Minty</li>
<li><input type="checkbox" value="" checked={isChacked[23-1]} onChange={() =>handleChange(23-1)} /> Bitter</li>
<li><input type="checkbox" value="" checked={isChacked[24-1]} onChange={() =>handleChange(24-1)} /> Creamy</li>

</ul>
   )}
   </div>
   <div class=" ml-4">
    <img className="flex" src={line}/>
    </div>
</div>

<div className='px-15px py-2' > 
    <div>
        <div className='flex pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>QUALITIES</p> 
    </div>
    <div className='flex-1'>
     <button onClick={() => handleClick(4)}>
     {showSubList[4] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
   { showSubList[4] && (
    <ul className='font-montserrat text-base leading-5 tracking-tighter'>
<li><input type="checkbox" className='rounded-none' value="" checked={isChacked[25-1]} onChange={() =>handleChange(25-1)} /> Detox</li>
<li><input type="checkbox" value="" checked={isChacked[26-1]} onChange={() =>handleChange(26-1)} /> Energy</li>
<li><input type="checkbox" value="" checked={isChacked[27-1]} onChange={() =>handleChange(27-1)} /> Relax</li>
<li><input type="checkbox" value="" checked={isChacked[28-1]} onChange={() =>handleChange(28-1)} /> Digestion</li>

    </ul>
   )}
   </div>
   <div class=" ml-4">
    <img className="flex" src={line}/>

</div>
</div>


<div className='px-15px py-2' > 
    <div>
        <div className='flex pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>CAFEINS</p>
    </div>
    <div className='flex-1'>
     <button onClick={()=>handleClick(5)}>
     {showSubList[5] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
    {
        showSubList[5] && (
            <ul className='font-montserrat text-base leading-5 tracking-tighter'>
<li><input type="checkbox"  value="" checked={isChacked[29-1]} onChange={() =>handleChange(29-1)} /> No Caffeine</li>
<li><input type="checkbox" value="" checked={isChacked[30-1]} onChange={() =>handleChange(30-1)} /> Low Caffeine</li>
<li><input type="checkbox" value="" checked={isChacked[31-1]} onChange={() =>handleChange(31-1)} /> Medium Caffeine</li>
<li><input type="checkbox" value="" checked={isChacked[32-1]} onChange={() =>handleChange(32-1)} /> High Caffeine</li>

            </ul>
        )
    }
    </div>
    <div class=" ml-4">
    <img className="flex" src={line}/>
    </div>
</div>


<div className='px-15px py-2' > 
    <div>
        <div className='flex pb-1'>
        <div className='flex-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>ALLERGENS</p>
    </div>
    <div className='flex-1'>
     <button onClick={()=>handleClick(6)}>
     {showSubList[6] ? <img src={noadd} /> : <img src={add} />}
    </button>
    </div>
    </div>
    {
        showSubList[6] && (
            <ul className='font-montserrat text-base leading-5 tracking-tighter'>
<li><input type="checkbox" value="" checked={isChacked[33-1]} onChange={() =>handleChange(33-1)} /> Lactose-free</li>
<li><input type="checkbox" value="" checked={isChacked[34-1]} onChange={() =>handleChange(34-1)} /> Gluten-free</li>
<li><input type="checkbox" value="" checked={isChacked[35-1]} onChange={() =>handleChange(35-1)} /> Nuts-free</li>
<li><input type="checkbox" value="" checked={isChacked[36-1]} onChange={() =>handleChange(36-1)} /> Soy-free</li>

            </ul>
        )
    }
    </div>
    <div class=" ml-4">
    <img className="flex" src={line}/>
    </div>
</div>


<div className='px-15px py-2'> 
    <div className='flex pb-1'>
    <p className='font-montserratMeduim text-lg leading-6 tracking-tighter'>ORIGINS</p>
    <img src={cyrcle}/>
    <img src={rectangle}/>
    </div>
    <div class="pt-1 ml-4">
    <img className="flex" src={line}/>
    </div>
</div>
</div>  </div>)}

        export default Sider;