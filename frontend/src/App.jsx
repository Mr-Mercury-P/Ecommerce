import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import AddProduct from './AddProduct/AddProduct'
import { AuthProvider } from './context/AuthContext'
import Navigation from './Navigation/Navigation'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add-product" element={<AddProduct/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}