import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Character from './features/character/Character'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/character' element={<Character />} />
    </Routes>
  )
}

export default App
