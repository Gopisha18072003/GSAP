
let tl = gsap.timeline();
tl.to('#page1 h1', {
    transform: "translateX(-106%)",
    scrollTrigger: {
        trigger: '#page1',
        scroller: 'body',
        start: 'top 0',
        scrub: 2,
        pin: true
    }
})

tl.to('#page1 h1', {
    fontWeight: 200,
    scrollTrigger: {
        trigger: '#page1 h1',
        scroller: 'body',
        start: '-30% top',
        end: '+=420px center',
        // markers: true,
        scrub: true

    }
})
tl.from('#page1 h1', {
    fontWeight: 200,
    scrollTrigger: {
        trigger: '#page1 h1',
        scroller: 'body',
        start: '80% center',
        end: '+=350px center',
        // markers: true,
        scrub: true
    }
})
