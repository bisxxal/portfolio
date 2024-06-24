import VanillaTilt from 'vanilla-tilt';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci"; 
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const container = useRef(); 
  const element = useRef();

  
  useGSAP(() => {
    gsap.from(".secondftr span", {
      y:-500,  
      delay:2,
      duration:10,
      stagger:3,
      opacity:0,
        scrollTrigger:{
            trigger:".footer", 
            start:"top 47%",
            end:"top 46%",
            scrub:2
        }
    });
  });
  
  useEffect(() => {
    const elements = document.querySelectorAll('.tilt');
    VanillaTilt.init(elements, {
      max: 20,
      speed: 1000,
      perspective: 500,
      glare: true,
      "max-glare": 0.5,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    });
 
    return () => {
      elements.forEach(element => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      });
    };
  }, []);
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div ref={container} className=' bg-[#121925] w-full overflow-hidden footer flex flex-col justify-around h-[78vh] lg:h-screen '>
      <div className=" flex flex-col justify-center items-center    text-center font-bold ">
        <h1 className= 'secondftr text-[110px] opacity-100  max-md:text-[90px] lg:text-[250px] leading-none'>
          <span>C</span><span>O</span><span>N</span><span>T</span><span>A</span>
          <span>C</span><span>T</span>
        </h1>
        <h1 className=' w-[80%]  lg:w-[27%] mx-auto rounded-full  text-[30px]'>
        Me,  I am avalivale for Work
        </h1>
      </div>

<div className=' flex items-center max-md:flex-wrap  max-md:w-[70%] max-md:gap-5 max-md:mx-auto justify-around'>

   <Link to="#" onClick={() => handleExternalLink('https://github.com/bisxxal')} ref={element} className= " d-pointer h-52 max-md:h-36  w-44 max-md:w-32 lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] hover:bg-black flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <FaGithub />
          <h1 >git hub</h1>
        </div>
      </Link>
   <Link to="#" onClick={() => handleExternalLink('https://www.linkedin.com/in/vishal-b-1ab8bb26a/')} ref={element} className= " d-pointer h-52 max-md:h-36  w-44 max-md:w-32 lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] hover:bg-[#0A66C2] flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <CiLinkedin />
          <h1 >linked in</h1>
        </div>
      </Link>
   <Link to="#" onClick={() => handleExternalLink('https://instagram.com/bisxxal')} ref={element} className= " d-pointer h-52 max-md:h-36  w-44 max-md:w-32 lg:w-52 bg-[#0D121B] rounded-3xl  lg:rounded-[40px] ins flex items-center justify-center tilt " data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
          <FaInstagram />
          <h1 >instagram</h1>
       
        </div>
      </Link>
   <Link to="#" onClick={() => handleExternalLink('bishalkandi859494@gmail.com')} ref={element} className= " d-pointer h-52 max-md:h-36  w-44 max-md:w-32 lg:w-52 bg-[#0D121B] rounded-3xl   lg:rounded-[40px]   flex items-center justify-center tilt mail" data-tilt data-tilt-max="50" data-tilt-speed="1000" data-tilt-perspective="500">
      <div className=' tilt-child flex items-center justify-center flex-col text-xl capitalize gap-3' >
            <SiGmail />
          <h1 >Mail</h1> 
        </div>
      </Link>
</div>
   
    </div>
  );
}

export default Footer;
