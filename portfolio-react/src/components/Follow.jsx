import React from 'react' 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../App.css'
import { useRef } from 'react';
gsap.registerPlugin(useGSAP);

function Follow() {

  const container = useRef();
  useGSAP(
      () => {
        gsap.from(".page6 div h1", {
          opacity: 0, 
          scrollTrigger: {
            trigger: ".page6 div h1  ",
            scrub:2, 
            end:"top 50%"
          },
          y: 200,
          duration:10,
          stagger:  8,
        })
      },
      { scope: container }
  );
  return (
 
           <div ref={container} className="page6 lg:h-[105vh] h-[70vh] w-full flex flex-col ">
          <div className="cusor z-[9] absolute rounded-full flex items-center justify-center font-[18px] opacity-0 h-[50px] w-[50px] bg-[#00bbd4b0] ">hiii</div>
          <div className="textpartpage6 capitalize overflow-hidden h-full flex flex-col items-center justify-center font-bold ">

            <div className='  overflow-hidden  lg:h-[150px] h-[70px] '><h1 className=" text-[#ffffff91] bg-transparent leading-none lg:text-[140px] text-[40px] fisth1">you can get in </h1></div>
            <div className='  overflow-hidden  lg:h-[150px] h-[70px] '><h1 className=" text-[#ffffff91] bg-transparent leading-none lg:text-[140px] text-[40px] secondh2"> touch with me <a className=' maill hover:font-extrabold ' href="bishalkandi859494@gmail.com" target="_blank">Mail</a></h1></div>
            <div className=' bg-red- overflow-hidden  lg:h-[150px] h-[70px] '><h1 className=' text-[#ffffff91] bg-transparent leading-none lg:text-[140px] text-[40px] '>or <a href="https://instagram.com/bisxxal?igshid=OGQ5ZDc2ODk2ZA==" className="inns hover:font-extrabold"  target="_blank">Instagram</a> </h1></div>
            
            <button className=' mt-[20px] bg-[#00ff00] w-[150px] py-2 rounded-3xl text-[19px] font-semibold '><a href="mailto:bishalkandi859494@gmail.com">Hire me</a></button>
          </div>
        </div>
 
  )
}

export default Follow