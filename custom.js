// init controller
var controller = new ScrollMagic.Controller();

// build bg-scene-1
var bgScene = new ScrollMagic.Scene({ triggerElement: ".logo-section", duration: 100, triggerHook: 0.05, name: "logo" })
    // .setTween(tween)

    .setTween(new TimelineMax().add([
        // hero block animations
        TweenMax.to('.star', 0.5, { scale: 0.9, top: 50, left: 100, rotate: 20 }),
        TweenMax.to('.right_half_circle', 0.5, { scale: 0.9, top: 100, right: -180})

    ]))


    .addIndicators(
        {
            name: 'logoSection',
            colorStart: "#FFFFFF",
            colorEnd: "#FFFFFF"
        }
    )
    .addTo(controller);



// build scene-1
var scene = new ScrollMagic.Scene({ triggerElement: ".logo-section", duration: 300, triggerHook: 0.1 })
    // .setTween(tween)

    .setTween(new TimelineMax().add([
        // hero block animations
        TweenMax.to('.logo-section img', 0.4, { autoAlpha: 0, scale: 0.9 }),
        TweenMax.to('.welcome-content', 0.4, { autoAlpha: 0, scale: 0.9 }),
        TweenMax.to('.disclaimer-text p', 0.4, { autoAlpha: 0, scale: 0.9 }),
        TweenMax.to('.star', 1, {scale: 0.9,top: 500, left: 80, rotate: 20})
        
    ]))


    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);



    // build scene-2
var scene2 = new ScrollMagic.Scene({ triggerElement: ".welcome-content h3", duration: 100, triggerHook: 0.09 })
.setTween(new TimelineMax().add([
    // hero block animations
    TweenMax.from('.hero-second-section', 1, { opacity: 0 }, { opacity: 0.5, duration: 10 })
]))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


// build scene-2
var scene3 = new ScrollMagic.Scene({ triggerElement: ".disclaimer-text", duration: 100, triggerHook: 0.2 })
.setTween(new TimelineMax().add([
    // hero block animations
    TweenMax.to('.hero-second-section h3', 1, { opacity: 0 }, { opacity: 0.5, duration: 10 })
]))
.addIndicators(
    {
        name: 'seconsSection',
        colorStart: "#FFFFFF",
        colorEnd: "#FFFFFF"
    }
)
.addTo(controller);

// build scene-3
var scene3 = new ScrollMagic.Scene({ triggerElement: ".steer-your-ship-content-wrap", duration: 100, triggerHook: 0.2 })
.setTween(new TimelineMax().add([
    // hero block animations
    TweenMax.fromTo('.scene-3 img', 0.4, { autoAlpha: 0, scale: 1.5}, { autoAlpha: 1, scale: 1}),
]))
.addIndicators(
    {
        name: 'seconsSection',
        colorStart: "#FFFFFF",
        colorEnd: "#FFFFFF"
    }
)
.addTo(controller);
