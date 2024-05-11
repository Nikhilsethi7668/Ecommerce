import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav'
import Home from './Components/Home'

import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { search } = useLocation();

  return (
    <div className=' h-screen w-screen flex gap-0'>
      {search && <Link to="/" className="homebtn absolute text-red-600 opacity-100 left-[17vw] top-[2vh]">
        HOME
      </Link>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path='/create' element={<Create />} />
        <Route path='details/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
