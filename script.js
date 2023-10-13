let tl = gsap.timeline();
tl.from('#logo, #middle-nav div, #last-nav div', {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: 0.5
})

tl.from('main h1', {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.5
})
tl.from('#first-img, #second-img', {
    scale: 0,
    duration: 1
})
tl.from('#scroll-down', {
    opacity: 0
})
tl.to('#scroll-down', {
    y: 20,
    duration: 0.5,
    repeat: -1,
    yoyo: true
})