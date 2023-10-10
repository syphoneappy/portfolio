import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Social from './Components/Social'
import About from './Components/About'
import Projects from './Components/Projects'
import Expirience from './Components/Expirience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Social />
      <Projects />
      <Expirience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
