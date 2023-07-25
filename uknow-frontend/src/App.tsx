import Home from './pages/Home'
import Hero from './pages/Hero'
import Content from './pages/Content'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/home' element={<Home />} />
      <Route path='/content' element={<Content />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
