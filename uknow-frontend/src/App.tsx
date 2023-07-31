import Home from './pages/Home'
import Hero from './pages/Hero'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Recover from './pages/Recover'
import Footer from './elements/Footer'
import UnderConstruction from './pages/UnderConstruction';
import Course from './pages/Course'
import Navbar from './elements/Navbar'



function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/home' element={<Home />} />
      <Route path='/course' element={<Course />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Register />} />
      <Route path='/recover' element={<Recover />} />
      <Route path='/under-construction' element={<UnderConstruction />} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
