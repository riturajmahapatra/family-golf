const crsr = document.querySelector("#cursor")
const blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ "px";
    crsr.style.top = dets.y+ "px";
    blr.style.left = dets.x- 100+"px";
    blr.style.top = dets.y- 100+ "px";
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"60px",
    duration:0.5,
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        // markers: true,
        start:"top -10%",
        end: "top -11%",
        scrub: 1.5 //it works as a loop
    }
    
})

gsap.to("#main",{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub: 1.5 
    }
})