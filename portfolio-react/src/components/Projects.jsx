
import React from 'react' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../App.css'
import { useRef } from 'react';
import img from '../assets/images';
gsap.registerPlugin(useGSAP);
function Projects() {
  return (
    <div className='w-full overflow-hidden h-[70vh] lg:h-screen  bg-transparent z-[2]  '>
        <div className="page7 relative h-[70vh] lg:h-screen flex items-center flex-col bg-[#7E8389]">
          <div className="pg7div">
            <h1 className=' absolute leading-none  max-md:top-1/4 text-[#ffffff66]  w-full left-0 lg:left-[46px] font-bold lg:text-[290px] text-[100px] mt-10  '>
            My Work Samples</h1>

          </div>
          <div className="myworkdiv h-[700px] lg:h-[85vh] mt-[20px] flex items-center gap-2 lg:gap-4  justify-center rounded- overflow-hidden z-[2]">
            <img className=' rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w1} alt=""/>
            <img className=' rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w2} alt=""/>
            <img className=' rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[55%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w3} alt=""/>
            <img className=' rounded-xl h-[57%] object-cover w-[10vw] border border-[#ffffff8c] hover:w-[60%] hover:rounded-3xl lg:hover:w-[59%] hover:h-[30%] lg:hover:h-[60%]' src={img.w4} alt=""/>
          </div>
          <h1 className=' text-[40px] font-bold pb-10' >See all my works </h1>
        </div>
    </div>
  )
}

export default Projects