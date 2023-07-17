const crsr = document.querySelector("#cursor")
const blr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blr.style.left = dets.x - 100 + "px";
    blr.style.top = dets.y - 100 + "px";
})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #c3fd5e";
        crsr.style.backgroundColor = " #c3fd5e"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "html",
        // markers: true,
        start: "top -5%",
        end: "top 25%",
        scrub: 1.5 //it works as a loop
    }

})

gsap.to("#main", {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -20%",
        end: "top -70%",
        scrub: 1.5
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us img",
        scroller: "body",
        // markers:true,
        scrub: 2
    }

})
gsap.from(".card", {
    scale: 1.1,
    opacity: 0,
    duration: 1,
    stagger: 0.09,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers:true,
        scrub: 0.3
    }

})

gsap.from("#img1", {
    y: -70,
    x: -70,
    duration: 1,
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

})
gsap.from("#img2", {
    y: 70,
    x: 70,
    duration: 1,
    scrollTrigger: {
        trigger: "#img1",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }

})
gsap.from(".page3-h1", {
    y: 50,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#img2",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }

})
