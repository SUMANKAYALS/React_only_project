import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Login from './page/Login'
import Signup from './page/Signup'
import Contacus from './page/Contacus'
import Landing from './page/LandingPage'
import EmailVerify from './page/EmailVerify'
import Menu from './page/Menu'
import Oder from './page/ProfilePage'
import ProductDetails from './page/ProductDetails'
import CartPage from './components/CartPage'
import ProfilePage from './page/ProfilePage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/contactus' element={<Contacus />}></Route>
          <Route path='/verify-otp' element={<EmailVerify />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          {/* <Route path='/order' element={<Oder />}></Route> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='/profile' element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App