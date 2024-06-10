var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"


    
})
var h4a=document.querySelectorAll("#nav h4")
    h4a.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale=3
            crsr.style.border="1px solid #fff"
            crsr.style.backgroundColor="transparent"
        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale=1
            crsr.style.border="0px solid rgba(122, 197, 10, 0.927)"
            crsr.style.backgroundColor="rgba(122, 197, 10, 0.927)"
        })
    })





gsap.to("#nav",{
    backgroundColor :"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%" ,  //halka sa niche ajye tb black color ayega
        end:"top -11%",    //taki pra effect show ho hme
        scrub:1         //loop me chlega ise
    }
    
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})
gsap.from("#about img,#about-us",{   //jab kisi chiz ko niche se lana ho
    y:50,
    opacity:0,
    duration:6,
    stagger:0.8 ,   //ek ek element ko ye bari bari krke uthyega
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }

})
gsap.from(".card",{   
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.8 ,
       
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }

})
gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2

    }
})
gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:2

    }
})