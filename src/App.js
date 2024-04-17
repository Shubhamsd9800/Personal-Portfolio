import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Abouts from './components/Abouts'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Abouts/>
      <Skills/>
    </div>
  )
}

export default App