
let tlLoader = gsap.timeline();

    let element = document.querySelector('#loader h1');
    let count=0;
    function time(){
        let Interval = setInterval(function(){
        
            count += Math.floor(Math.random()*20);
            if(count<100){
                element.textContent = count + "%";
            }else{
                element.textContent = "100%";
                stopInterval();
            }
        }, 150);
    }
    

function stopInterval() {
    clearInterval(Interval);
}

tlLoader.to('#loader h1', {
    scale: 2,
    duration: 2,
    delay: 0.2,
    onStart: time()
})
tlLoader.to('#loader', {
    y: "-100vh",
    duration: 0.5
})

tl = gsap.timeline();
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
