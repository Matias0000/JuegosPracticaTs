import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from './views/Inicio'
import Memotest from './views/Memotest'
import Pokemon from './views/Pokemon'
import WordPerMinute from './views/WordPerMinute'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/Memotest' element={<Memotest />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/wpm' element={<WordPerMinute />} />
    </Routes> 
  )
}

export default App
