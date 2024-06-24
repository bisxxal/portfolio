import React from 'react' 
import '../App.css'
import img from '../assets/images';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);

function Hero() {
    const container = useRef();
    useGSAP(
        () => {
            var t1 = gsap.timeline(); 
            t1.from(".leftside div h1 ", {
                y: 100,
                opacity: 0,
                duration: 0.5,
                delay: 0,
                stagger: 0.3,
              });

              t1.from(".righside img", { 
                delay:-1,
                y:1000, 
                  duration: 1,
                });
        },
        { scope: container }
    );
  return (
    <>
    <div ref={container} className="mainfont overflow-hidden pt-5 lg:pt-0 w-full h-screen bg-[#131A26] flex lg:flex-row flex-col justify-center items-center relative rounded-3xl lg:rounded-b-[100px]  "> 
   
    <div className="leftside max-md:mt-4 text-[#ffffffc1] h-[91%] pl-10 lg:w-1/2 w-full  pt-10">
     <div className=' max-md:leading-[55px] overflow-hidden'><h1>Hey </h1></div>
     <div className=' max-md:leading-[55px] overflow-hidden'><h1>I'm <span className=' animate-gradient '>Bishal</span> </h1></div>
     <div className=' max-md:leading-[55px] overflow-hidden '><h1>Full-Stack Web</h1></div>
     <div className=' max-md:leading-[55px] overflow-hidden'> <h1>Developer</h1></div>
    <button className='bg-[#0d121b] max-md:mt-2 shadow-lg rounded-xl font-bold px-6 py-4 '>
    Download CV
</button>
 
    </div>

    <div className="righside h-[95vh] w-full  overflow-hidde lg:w-[38%] max-md:p-8 lg:p-10 "> 

      <div className=' overflow-hidden h-[95%] mt-6   rounded-3xl'>
      <img className=' w-full h-full rounded-3xl object-cover ' src={img.bisx2} alt=""/>
      </div> 
      </div>
  </div>
    </>
  )
}

export default Hero