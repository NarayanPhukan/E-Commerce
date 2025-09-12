import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SearchBar from './Components/SearchBar';
// import { Analytics } from "@vercel/analytics/react/"

const App = () => {
  return (
    
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        {/* <Navbar /> */}
        <SearchBar />
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
        
        </Routes>
        <Footer />
      </div>
    
  );
};

export default App;
