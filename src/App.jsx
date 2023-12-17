import { useState, useEffect } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Picker from './pages/picker'
import Changer from './pages/Changer'

function App() {
  const navigate = useNavigate()

  useEffect(() =>{
    navigate('/')
  })

  return (
    <>
    <Routes>
      <Route path='/' element={<Picker/>} />
      <Route path='/changer/:hex' element={<Changer/>} />
      <Route path='/changer' element={<Changer/>} />
    </Routes>
    </>
    
  )
  
}

export default App
