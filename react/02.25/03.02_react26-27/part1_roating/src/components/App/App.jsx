import { Route, Routes } from 'react-router-dom'
import About from '../About/About'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import Navigation from '../Navigation/Navigation'
import Profile from '../Profile/Profile'
import RouterHooks from '../RouterHooks/RouterHooks'
import Settings from '../Settings/Settings'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/users/:id' element={<RouterHooks />} />
      </Routes>
    </div>
  )
}

export default App
