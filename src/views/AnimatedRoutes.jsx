import React from 'react'
import { useLocation } from 'react-router'
import { Route, Routes} from 'react-router-dom';
import Products from './HomeView.jsx';
import Cart from './ProductsPage.jsx';
import Premier from './Premier.jsx';
import { AnimatePresence } from 'framer-motion'
import HomePage from './Home.jsx';
import { ContactUs } from './contact.jsx';
import SponsorshipComponent from './sponsor.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

export default function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<HomePage />} />
    <Route path='/Hyp3rForm' element={<HomePage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/premier' element={<Premier />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/sponsorme' element={<SponsorshipComponent />} />
    </Routes>
    </AnimatePresence>
      )
}
