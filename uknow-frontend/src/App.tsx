import Home from './pages/Home'
import Hero from './pages/Hero'
import Content from './pages/Content'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Recover from './pages/Recover'
import Footer from './elements/Footer'
import UnderConstruction from './pages/UnderConstruction';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/home' element={<Home />} />
      <Route path='/content' element={<Content />} />
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
