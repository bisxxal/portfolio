function locomotivejs() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scroller"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".scroller").style.transform ? "transform" : "fixed",
     
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  
}
locomotivejs();
function animationcursor(){

  var page1 = document.querySelector(".page6");
  var page2 = document.querySelector(".mainfont");
  
  page1.addEventListener("mousemove",(dets)=>{
     
    gsap.to(".cusor",{
        x:dets.x+"px",
        y:dets.y+"px",
        delay:0.1,
        opacity: 1
    })
})
 page1.addEventListener("mouseenter", () => {
      gsap.to(".cusor", {
          scale: 1,
          opacity: 1
      });
  });
  
  page1.addEventListener("mouseleave", () => {
      gsap.to(".cusor", {
          scale: 0,
          opacity: 0
      });
  });
 
  page2.addEventListener("mousemove",(dets)=>{
     
    gsap.to(".cusor",{
        x:dets.x+"px",
        y:dets.y+"px",
        delay:0.1,
        opacity: 1
    })
})
  
 page2.addEventListener("mouseenter", () => {
      gsap.to(".cusor", {
          scale: 1,
          opacity: 1
      });
  });
  
  page2.addEventListener("mouseleave", () => {
      gsap.to(".cusor", {
          scale: 0,
          opacity: 0
      });
  });
  
  
}
animationcursor()
 
gsap.to(".movindtextdiv h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",

  scrollTrigger: {
    trigger: ".movindtextdiv h1",
    scroller: ".scroller",
    // markers: true,
    scrub: 0.7
  }
});


// gsap.from(".myworkdiv img", {
//   opacity: 0,
//   // delay:0.3,
//   scrollTrigger: {
//     trigger: ".page7 .myworkdiv img",
//     scroller: ".scroller",
//     // markers:true,
//     // start: "top 20%"
//   },
//   y: -200,
//   duration:0.9,
//   stagger:  0.6

// })

// gsap.from(".page7 .myworkdiv img", {
//   stagger: 0.6,
//   opacity: 0,
 
//   scrollTrigger: {
//     trigger: ".page7 .myworkdiv img",
//     scroller: ".scroller",
    
//   },
//   y: -200,
//   duration:0.9,

// })

gsap.from(".page7 .myworkdiv img", {
  opacity: 0,
  y: -200,
  duration: 0.9,
  // stagger: {
  //   amount: 0.6
  // },
  scrollTrigger: {
    trigger: ".page7 .myworkdiv img",
    scroller: ".scroller",
  }
});

gsap.from(".page7 .pg7div h1", {
  opacity: 0,
  // delay:0.3,
  scrollTrigger: {
    trigger: ".page7 h1 ",
    scroller: ".scroller",
     
  },
  y: 200,
  duration:0.5,
  // stagger:  0.6

})

gsap.from(".page6 div h1", {
  opacity: 0,
  // delay:0.3,
  scrollTrigger: {
    trigger: ".page6 div h1  ",
    scroller: ".scroller", 
    scrub:2,
    // markers:true,
    // start:"top 30%",
    end:"top 50%"
  },
  y: 200,
  duration:0.5,
  stagger:  0.3,
})
gsap.from(".abouttextpart p ", {
  opacity: 0,
  // delay:0.3,
  scrollTrigger: {
    trigger: ".aboutpart .abouttextpart p  ",
    scroller: ".scroller", 
    scrub:2,
    // markers:true,
    // start:"top 30%",
    end:"top 50%"
  },
  y: 200,
  duration:0.5,
  stagger:  0.3,
})
gsap.from(".hellopart h1 ", {
  opacity: 0,
  
  scrollTrigger: {
    trigger: ".hellopart h1",
    scroller: ".scroller", 
  }, 
  duration:1,
  delay:0.5

})
gsap.from(" .gradient", {
  opacity: 0,
  x:-100,
  scrollTrigger: {
    trigger: ".gradient",
    scroller: ".scroller", 
  }, 
  duration:0.9,
  delay:0.5

})
  gsap.from(".nav .logo h2", {
    opacity: 0,
    duration: 0.9,
    stagger:0.3,
    y:-20,
    delay:0.8
  });
  gsap.from(".nav .rnav div", {
    opacity: 0,
    duration: 0.9,
    stagger:0.3,
    y:-20,
    delay:0.8
  });
  gsap.from(".righside img", {
    opacity: 0,
    duration: 2,
    delay:0.8,
    y:-100,
    // x:100
  });
  gsap.from(".skilsimgh img ,.skilsimgh h2", {
    stagger:0.1,
    scale: 0,
    opacity: 0,
    delay:0,
    y:-100,
    duration: .9,
    scrollTrigger: {
        trigger: ".skilsimgh  ",
        scroller: ".scroller",
        // markers: true,
        // start: "top 50%",
    },
});
function anietext() {

  var t1 = gsap.timeline(); 


  t1.from(".loadderr h2",{
    x:40,
    delay:0.2,
    stagger:0.1,
    opacity:0
  });
  t1.to(".loadderr h2",{
    x:-40,
    delay:0.1,
    stagger:0.1,
    opacity:0
  });
  t1.to(".loadderr",{
    opacity:0,
    zIndex:0,
    // delay:0.3
  }) 
 
 

  t1.from(".leftside div h1 ", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0,
    stagger: 0.3,
  });
 

  t1.from(" .leftside button", {
    y: 80,
    opacity: 0,
    duration: 0.5,
    delay: 0,
    stagger: 0.3,
  });

  // t1.from(".righside img", {
  //   scale: 2,
  //   opacity: 0,
  //   duration: 0.8,
  // });
}
anietext();

 