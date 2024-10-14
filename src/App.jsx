import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'
import Highlight from './components/Highlight'
import Footer from './components/Footer'
import Contact from './pages/Contact'
const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/highlight' element={<Highlight />}/>
    <Route path='contact-us' element={<Contact />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App