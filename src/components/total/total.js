import line from './Line.png';




function Total() {
    return(
        <div className='mx-16 w-448 h-160 '>
        <div className='text-[#282828]  py-6 mx-2'>
        <img className='mx-8' src={line}/>
        <div className='m-5 flex container '><p className='font-MontserratSmall text-base mr-16 pr-16 leading-6 tracking-wide text-left'>Subtotal</p>
        <div className='ml-16 pl-16'><p className='font-MontserratMeduim text-16 leading-24 pl-4 ml-14 tracking-wider text-left'>€3.90</p></div></div>
        <div className='m-5 flex'><p className='font-MontserratSmall text-base leading-6 mr-16 pr-16 tracking-wide text-left'>Delivery</p> 
        <div className='ml-16 pl-16'><p className='font-MontserratMeduim text-16 leading-24 pl-4 ml-14 tracking-wider text-left'>€3.90</p></div></div>
        <img className='mx-8' src={line}/>
        <div className='flex m-5'><p className='font-MontserratMeduim mr-16 pr-16 text-base leading-6 tracking-wider text-left'>Total</p>
        <div className='ml-16 pl-16'><p className='font-Montserrat text-xl leading-7 tracking-normal text-left ml-16 pl-8'>€7.85</p></div></div> 
        </div>
        </div>
    )};
    export default Total;