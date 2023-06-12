import { Routes, Route, useLocation } from 'react-router-dom'
import { Landing, Home } from './views/index'
import { Nav } from './components/index'
import Character from './features/character/Character'
import './App.css'

function App() {
  const { pathname } = useLocation()
  return (
    <div className='App'>
      {pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/character' element={<Character />} />
      </Routes>
    </div>
  )
}

export default App
