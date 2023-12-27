import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home/home';
import Down from './components/down/down';
import Collections from './components/collections/collections';
import Lastblog from './components/lastblog/lastblog';
import Forwholesalers from './components/forwholesalers/forwholesalers';
import Footer from './components/footer/footer';
import Teapic from './components/teapic/teapic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sider from './components/sider/sider';
import Content from './components/content/content';
import Product from './components/product/product';
import Instructions from './components/instructions/instructions';
import Mayknow from './components/mayknow/mayknow';
import Addtobag from './components/addtobag/addtobag';
import Line from './components/line/line';
import List from './components/list/list';
import Ordersumery from './components/ordersumery/ordersumery';
import Payment from './components/paymenttype/paymenttype';
import Delivery from './components/delivery/delivery';
import Popular from './components/popular/popular';
import Sign from './components/signIn/sign';
import Creation from './components/creationaccount/creationaccount';
import Check from './components/check/check';
import Navbarg from './components/navbargrey';
import Shipping from './components/shipping/shipping';
import Biling from './components/biling/biling';
import Ordersumery2 from './components/ordersumery/ordersumery';
import Deliverydet from './components/deliverydet/deliverydet';
import Paymetype from './components/paymetype/paymetype';
import Ordersumery3 from './components/ordersummery3/ordersummery3';
import Lineb from './components/lineb/lineb';
import Thankyou from './components/thankyou/thankyou';
import List2 from './components/list2/list2';
import Deliverydet2 from './components/deliverydet2/deliverydet2';
import Paymentmethode from './components/paymentmethode/paymentmethode';
import Estimatedmethode from './components/estimatedshipping/estimatedshipping';
import Total from './components/total/total';
import Button from './components/button/button';
import Suggest from './components/suggest/suggest';




function App() {

  return (

    <Router>
      
      <div className='homePage'>
        <Routes>
          <Route path='/' element={<>
            <Navbar />
            <Home />
            <Down />
            <Collections />
            <Lastblog />
            <Forwholesalers />
          
          </>} />
        </Routes>
      </div>
      <div className='collections'>
        <Routes>
          <Route path='/collections' element={<>
            <Navbar />
           <Teapic />
           <div className='flex'>
        <Sider />
        <Content/>
        </div>
       
         </>} />
        </Routes>
      </div>

      <div className='product'>
        <Routes>
          <Route path='/product' element={<>
            <Navbar />
          <Product/>
          <Instructions/>
          <Mayknow/>
      
         </>} />
        </Routes>
      </div>

      <div className='mybag'>
        <Routes>
          <Route path='/mybag' element={<div>
            <Navbar />
          <Line/>
          <div className='flex'>
            <div className='mr-16 pr-8'>
            <div className='mr-16 pr-16 '>
          <List/>
          </div>
          </div>
          <div className='ml-16 pl-16'>
          <Ordersumery/>
          <Payment/>
          <Delivery/>
          </div>
          </div>
          <Popular/>
         
         </div>} />
        </Routes>
      </div>

      <div className='account'>
        <Routes>
          <Route path='/account' element={<>
            <Navbar />
          <div className='flex mb-16 justify-center'>
            <div className='mr-16'>
          <Sign/>
          </div>
          <div className='ml-14'>
          <div className='ml-16'>
          <Creation/>
          <Check/>
          </div>
          </div>
         </div>
         </>} />
        </Routes>
      </div>

      <div className='delivery'>
        <Routes>
          <Route path='/delivery' element={<><Navbarg/>
          <div className='bg-[#F4F4F4]'>
          <Lineb/>
          <div className='flex justify-center mt-16 '>
          <Shipping/>
          <Biling/>
          <Ordersumery2/>
          </div>
         </div>
         </>} />
        </Routes>
      </div>

      <div className='Payment'>
        <Routes>
          <Route path='/payment' element={<><Navbar/>
          <Lineb/>
          <div className='flex justify-center mt-16 '>
          <Deliverydet/>
          <Paymetype/>
          <Ordersumery3/>
         </div>
         </>} />
        </Routes>
      </div>

      <div className='paymentsuccess'>
        <Routes>
          <Route path='/paymentsuccess' element={<><Navbar/>
          <Thankyou/>
          <div className='flex justify-left mt-16 '>
          <List2/>
          <Deliverydet2/>
          <div>
          <Paymentmethode/>
          <Estimatedmethode/>
          </div>
          </div>
          <div className='flex justify-left mt-16 '>
            <Total/>
            <Button/>
          </div>
          <Suggest/>
         </>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

