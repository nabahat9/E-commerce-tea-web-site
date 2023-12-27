import visa from './Visa.png';
import mastercard from './mastercard-dark-large.png';
import maestro from './maestro-dark-large.png';
import group from './Group.png';
import group2 from './Group2.png';






function Payment() {return(
  <div className='bg-[#F4F4F4] mx-2 my-10 px-4 py-12'>
  <p className='ml-5 font-MontserratSmall text-2xl leading-7 tracking-normal text-left text-[#282828]'>
    Payment type</p>
  <div className='flex my-10'>
    <img src={visa} className='mx-5'/>
    <img src={mastercard} className='mx-5'/>
    <img src={maestro} className='mx-5'/>
    <img src={group} className='mx-5'/>
    <img src={group2} className='mx-5'/>
  </div>
  </div>
    )};
    export default Payment;