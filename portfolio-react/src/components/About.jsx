import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from '../assets/images';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function About() {

  
    const container = useRef();
    const paragraphRef = useRef(null);
    const paragraph = paragraphRef.current;
 
    useGSAP(() => { 
      const text = new SplitType(paragraph, { types: 'chars' });
      
      gsap.from(text.chars, {
        color:'#515151', 
        x: 1,  
        scrollTrigger: {
          trigger: paragraph, 
          start: 'top bottom',  
          end: 'top top',  
          scrub: true, 
          duration:3,  
        },
        stagger: 0.05, 
      }
    );
    } ,{ scope: container });
  return (
    <>
    <div ref={container} className="h-[75vh] w-full flex items-center flex-col aboutpart overflow-hidden">
          <div className="hellopart h-full  w-full relative flex flex-col items-center justify-center">
            <div className="gradient"></div>
            <img className='w-full h-full blur-sm object-cover brightness-[53%]' src={img.whatsapp} alt=""/>
            <h1 className=' absolute max-md:top-[7%] top-[15%] text-[40px] font-bold  '>Hey there!! </h1>
            <div className="abouttextpart lg:text-[27px] absolute z-[21] max-md:px-7 px-10 lg:px-24 text-xl lg:leading-[40px] leading-[30px] w-full  ">
              <p  ref={paragraphRef}>  I'm Bishal, a full-stack web developer. I build beautiful and functional websites
                 by working on both the front and back ends. From creating sleek interfaces with HTML, CSS, and JavaScript to crafting powerful back-end solutions using Node.js and MongoDB, I love bringing ideas to life in the digital space. Take a tour of my portfolio to see the exciting projects I've been working on. Let's explore the vast world of full-stack development together!
              </p>
              
            </div>
            <button className=' absolute bg-[#00acf0] sad px-5 py-3 z-[30] rounded-3xl top-[85%]'>
              <a href="https://instagram.com/bisxxal?igshid=OGQ5ZDc2ODk2ZA=="  target="_blank">Say hii 👋👋</a></button>
          </div>
        </div>
    </>
  )
}

export default About