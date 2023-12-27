import { useState } from 'react';
import leading1 from './Leading1.png';
import leading from './Leading2 (2).png';



function Sign() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    return(<div className="text-[#282828] px-10 py-10 h-455 w-552 bg-[#F4F4F4] mr-16 mb-8">
    <p className="font-MontserratSmall mb-4 text-2xl leading-7 tracking-normal text-left">Already a customer?</p>
    <p className="font-MontserratSmall my-4 text-base leading-6 tracking-wide text-left">Welcome back! Sign in for faster checkout.</p>
    <div>

<div className='flex my-4 bg-white border h-56 w-456 border-solid border-[#282828] py-3'>
  <img src={leading1} className='mx-4'/>
    <input
        type="email"
        placeholder="Enter your email"
        value={email}
        className='bg-transparent font-MontserratSmall text-lg  leading-6 tracking-tight text-left'
      />
      </div>
      </div>
      <div>

  <div className='flex my-4 bg-white border h-56 w-456 border-solid border-[#282828] py-3'>
  <img src={leading} className='mx-4'/>
       <input
        type="password"
        placeholder="Enter your password"
        value={password}
        className='bg-transparent font-MontserratSmall text-lg  leading-6 tracking-tight text-left'
      />
      </div>
      </div>

    <div className='flex my-6 '><div className='flex mr-10'><input type="checkbox"/>
    <p className='font-MontserratSmall text-lg leading-6 tracking-tight text-left'>Please remember me</p></div>
    <p className='font-MontserratSmall text-lg leading-6 tracking-tight text-right ml-16 text-[#C3B212]'>Forget password?</p></div>
    <button className='font-MontserratMeduim h-56 w-456 text-16 leading-20 bg-[#282828] text-white tracking-tighter text-center 
  border border-solid border-[#282828] gap-8  '><p className=' my-4'>SIGN IN </p></button>

    </div>) 
    }
    export default Sign;