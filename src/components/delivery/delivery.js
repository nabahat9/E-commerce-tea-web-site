import expand from './expand.png';




function Delivery() {
    return(
       <div className='text-[#282828] mx-2 mt-12 mb-4 bg-[#F4F4F4]  px-6 py-10'>
        <p className='font-MontserratSmall text-2xl leading-7 tracking-normal mt-4 mb-6 text-left'>
        Delivery and retour</p>
        <div className='font-MontserratSmall mt-4 text-base leading-5 tracking-tight text-left'>
        <div className='flex mx-2 my-4'>
            <img src={expand}/>
            <p>Order before 12:00 and we will ship the same day.</p>
        </div>

        <div className='flex mx-2 my-4'>
            <img src={expand}/>
            <div>
            <p>Orders made after Friday 12:00 are processed on 
            <br/> Monday.</p>
            </div>
        </div>

        <div className='flex mx-2 my-4'>
            <img src={expand}/>
            <p>To return your articles, please contact us first.</p>
        </div>

        <div className='flex mx-2 my-4'>
            <img src={expand}/>
            <p>Postal charges for retour are not reimbursed.</p>
        </div>
       </div>
       </div>
    )};
    export default Delivery;