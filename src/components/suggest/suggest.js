import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';



function Suggest() {
    return(<div className='text-[#282828] mx-14 my-16'>
    <p className='font-porto font-bold text-4xl leading-10 justify-center items-center mb-10 
    max-w-screen-md mx-auto text-center'>Suggested items base on your order</p>
    <div className='flex max-w-screen-md mx-auto '>

        <div className='mx-14 text-center '><img src={img2}/>
        <p className='mt-4'>Ceylon Ginger <br/> Cinnamon chai tea </p>
        <p>€4.85 / 50 g</p></div>

        <div className='mx-14 text-center '> <img src={img3}/>
        <p className='mt-4'>Ceylon Ginger <br/> Cinnamon chai tea </p>
        <p>€4.85 / 50 g</p></div>

        <div className='mx-14 text-center '> <img src={img1}/>
        <p className='mt-4'>Ceylon Ginger <br/> Cinnamon chai tea </p>
        <p>€4.85 / 50 g</p></div>
    </div>
    </div>)}
    export default Suggest;