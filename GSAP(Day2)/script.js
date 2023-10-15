let tl =gsap.timeline();
tl.from('nav', {
    opacity: 0,
    duration: 0.5,
    delay: 0.5
})
tl.from('nav h1, #nav-part2 h3, nav h4', {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})
tl.from('#left h1', {
    opacity: 0,
    x: -800,
    duration: 0.5,
    stagger: 0.5
})
tl.from('#buttom', {
    opacity:0,
    duration: 0.5
})
tl.from('#buttom h4', {
    y: -80,
    duration: 0.5,
    opacity: 0,
    stagger: 0.3
})

tl.from('#right', {
    scale: 0.5,
    opacity: 0,
    duration: 0.5
})

gsap.from('#page2 .box', {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#page2 .box",
        scroller: "body",
        end: "top 40%",
        scrub: 1
    }
})
