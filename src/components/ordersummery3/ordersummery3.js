import line from './Line.png';




function Ordersumery3() {
    return(
        <div className=' mx-2 mb-12 ml-16'>
        <div className='text-[#282828]  bg-[#F4F4F4] py-6 w-455 h-322'>
        <p className='font-montserrat text-2xl font-normal leading-7 tracking-normal pb-6 mx-5 mb-5 mt-2 text-left'>
        Order summery
        </p>
        <div className='m-5 flex container '><p className='font-MontserratSmall text-base mr-16 pr-16 leading-6 tracking-wide text-left'>Subtotal</p>
        <div className='ml-10 pl-16'><p className='font-MontserratMeduim text-16 leading-24 pl-4 ml-14 tracking-wider text-left'>€3.90</p></div></div>
        <div className='m-5 flex'><p className='font-MontserratSmall text-base leading-6 mr-16 pr-16 tracking-wide text-left'>Delivery</p> 
        <div className='ml-10 pl-16'><p className='font-MontserratMeduim text-16 leading-24 pl-4 ml-14 tracking-wider text-left'>€3.90</p></div></div>
        <img className='mx-4' src={line}/>
        <div className='flex m-5'><p className='font-MontserratMeduim mr-16 pr-16 text-base leading-6 tracking-wider text-left'>Total</p>
        <div className='ml-10 pl-16'><p className='font-Montserrat text-xl leading-7 tracking-normal text-left ml-16 pl-8'>€7.85</p></div></div> 
        <p className='font-MontserratSmall m-5 text-base leading-6 tracking-wide text-left text-gray-800 text-opacity-70'>
            Estimated shipping time: 2 days</p>
            </div>
        <button className='font-MontserratMeduim text-16  mb-6 mt-8 h-56 w-455 leading-20 bg-[#282828] tracking-tighter  text-center text-white '><p className='px-16 mx-10 my-3'>PAY </p></button>
        
        </div>
    )};
    export default Ordersumery3;