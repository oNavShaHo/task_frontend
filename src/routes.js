import React,{useState,useEffect} from 'react'
import Login from './pages/Login'
import Products from './pages/Products'
import Signup from './pages/Signup'
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

function Rts() {
  return (
    <Router>
    <div>
      <section>                              
          <Routes>                                                                       
             <Route path="/Home" element={<Home/>}/>
             <Route path="/signup" element={<Signup/>}/>
             <Route path="/" element={<Login/>}/>
             <Route path="/product" element={<Products/>}/>
             <Route path="/cart" element={<Cart/>}/>

          </Routes>                    
      </section>
    </div>
  </Router>
  )
}

export default  Rts