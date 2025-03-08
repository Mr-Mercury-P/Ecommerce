import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct/AddProduct'
import Cart from './Cart/Cart'
import Checkout from './Checkout/Checkout'
import { AuthProvider } from './context/AuthContext'
import Home from './Home/Home'
import Login from './Login/Login'
import Navigation from './Navigation/Navigation'
import Register from './Register/Register'
const stripePromise=loadStripe("pk_test_51MOH8zSB0s2EMORR1S7r29neT4EL162r7P5EmVbS71UAcHp55KqfBGfT0b5JbJdHKUuLlhlcNtfvO7mLOLb9lmQW00OSfFmdcL")
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={
              <Elements stripe={stripePromise}>
                <Checkout/>
              </Elements>
            }/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}