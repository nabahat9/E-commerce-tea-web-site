import line from './line.png';




function Line() {
    return(
        <div className='flex font-MontserratSmall text-[#A0A0A0] text-base justify-center leading-7'>
        <p className='mr-14 px-6 h-1'>1. My Bag</p>
        <img className='w-250 mt-3 mx-16' src={line}/> 
        <p className='px-6 h-1'>2. Delivery</p>
        <img className='w-250 mt-3 mx-16' src={line}/> 
        <p className='px-6 h-1'>2. Review & Payment</p>
        </div>
    )};
    export default Line;