import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import '../App.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Moveing() {
    const container = useRef();
    useGSAP(
        () => {
            gsap.to(".movindtextdiv h1", {
                transform: "translateX(calc(-100% - 2vw - 4px))",
              
                scrollTrigger: {
                  trigger: ".movindtextdiv h1",
                  // scroller: ".scroller",
                 
                  scrub: 0.7
                }
              });
        },
        { scope: container }
    );
  return (
    <div ref={container} className="movindtextdiv max-md:my-7 mt-10 leading-none lg:text-[200px] text-[100px] lg:h-[250px] overflow-hidden mb-[7vh] relative whitespace-nowrap z-[20] w-full ">
        <h1 className=' font-bold inline-block mr-[10px] '>Bishal !! Bishal  !! </h1>
        <h1 className=' font-bold inline-block mr-[10px] '>Bishal !! Bishal  !!</h1>
        <h1 className=' font-bold inline-block mr-[10px] '>Bishal !! Bishal  !!</h1>
        
    </div>
  )
}

export default Moveing