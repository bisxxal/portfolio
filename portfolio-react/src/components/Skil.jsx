import React, { useRef } from 'react'
import img from '../assets/images';
import { motion } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import '../App.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Skil() {
  const container = useRef(null);
  

  return (
    <div>
        
        <div ref={container} className="skils relative min-h-[110vh] w-full  bg-[#000319] text-[white]">
          <h1 className=' text-center capitalize pt-6 font-bold text-[35px] p-[2vh] bg-transparent'>Things I'm good at skills. </h1>
      
      
          <div className="skillwrapper defect1 h-[99%] w-full flex lg:items-center  justify-center ">


            <div className=' flex flex-wrap w-full gap-8 lg:gap-14 mb-24 lg:mb-20 lg:w-[80%] justify-evenly lg:justify-center  '>
              
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px] ">
              
              <img className=' h-[58%] w-[55%] ' src={img.python} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>python</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1">
              <img className=' h-[58%] w-[55%] rounded-xl ' src={img.js} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Javascript</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]   react  ">
              <img className=' h-[58%] w-[60%] ' src={img.react} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'> react</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1">
              <img className=' h-[60%] w-[80%] ' src={img.node} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>node JS</h2>
            </motion.div>

            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1 mrg ps">
              <img className=' h-[57%] w-[60%] ' src={img.ts} alt="" />
              <h className=' mt-[10px] text-center font-[18px] bg-transparent'>Typescript</h>
            </motion.div>
            
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1 mrg ps">
              <img className=' h-[58%] w-[80%] ' src={img.nj} alt="" />
              <h className=' mt-[10px] text-center font-[18px] bg-transparent'>Next js</h>
            </motion.div>

            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1">
              <img className=' h-[68%] w-[60%] ' src={img.java} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Java</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1">
              <img className=' h-[58%] w-[60%] ' src={img.c} alt="" />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>C++</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1">
              <img className=' h-[58%] w-[50%] ' src={img.mongo} />
              <h2 className=' mt-[10px] text-center font-[18px] bg-transparent'>Mongo DB</h2>
            </motion.div>
            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1 mrg ps">
              <img className=' h-[58%] w-[50%] ' src={img.ps} alt="" />
              <h className=' mt-[10px] text-center font-[18px] bg-transparent'>Photoshop</h>
            </motion.div>



           


            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  defect1 mrg ps">
              <img className=' h-[58%] w-[50%] ' src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' alt="" />
              <h className=' mt-[10px] text-center font-[18px] bg-transparent'>Docker</h>
            </motion.div>



           

            <motion.div drag dragConstraints={container} whileDrag={{scale:1.2}} className="skilsimgh w-[150px] h-[145px] flex-col flex items-center justify-center overflow-hidden rounded-2xl lg:mx-[50px] bg-[#ffffff09] border-b border-[#ffffff5c] backdrop-blur-[5px]  mrg ht">
              <img className=' h-[58%] w-[85%] ' src={img.html} alt="" />
              <h className=' mt-[10px] text-center font-[18px] bg-transparent'>Html css</h>
            </motion.div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Skil