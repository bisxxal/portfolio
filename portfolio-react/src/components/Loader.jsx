import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
function Loader() {
    useGSAP(() => {
        var t1 = gsap.timeline(); 
        t1.from(".load h1 span", {
            opacity:1,
        });
        t1.from(".load h1 span", {
            x:7,   
            stagger:.3,
            opacity:1,
        });
        t1.to(".load h1 span", {
            x:-20,
            stagger:.3,
            opacity:0,
        });
 
        t1.to(".load", {
        //   delay:2,
          duration:2,
          opacity:0,
        });
      });
  return (
    <div className='load bg-[#080a10] w-full flex items-center justify-center text-white h-screen fixed top-0 left-0 z-[100] opacity-1'>
        <h1> <span className=' opacity-0 text-xl inline-block'> &lt;</span>  <span className=' opacity-0 text-xl inline-block'>   Just</span> <span className=' opacity-0 text-xl inline-block'>Coaded</span> <span className=' opacity-0 text-xl inline-block'> Things</span>  <span className=' opacity-0 text-xl inline-block'> / &gt;</span> </h1>
    </div>
  )
}

export default Loader