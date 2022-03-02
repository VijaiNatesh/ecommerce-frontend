import React from 'react'
import styles from '../src/myStyles.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from '../src/component/User'
import Navigation from './component/Navigation';
import Login from './component/Login';
import Home from './component/Home';
import AddItem from './component/AddItem'
import Cart from './component/Cart'
import Order from './component/Order'
import Logout from './component/Logout';

function App() {
  return (
    <div className={styles.app}>    
      E-Commerce Website
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/additem' element= {<AddItem />} />     
          <Route path='/cart' element= {<Cart />} /> 
          <Route path='/order' element= {<Order />} />                                  
          <Route path='/user' element={<User />} />
          <Route path='/login' element={<Login />} />    
          <Route path='/logout' element ={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
