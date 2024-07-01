import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Moveing from './components/Moveing'
import About from './components/About'
import Skil from './components/Skil'
import Follow from './components/Follow'
import Projects from './components/Projects' 
import Fotter from './components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './components/Loader'


function App() { 
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
<Loader/>
    <div className='  bg-[#2A2438 bg-[#1e222d]   text-white  z-[20]'>
     
    <Navbar/> 
     <Hero/>
     <Moveing/>
     <About/>
     <Skil/>
     <Follow/>
     <Projects/>
      <Fotter/> 
    </div>
    </>
  )
}

export default App
