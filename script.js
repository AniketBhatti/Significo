function homePageAnimation() {

    gsap.set(".marqueeSlide", {
        scale: 5
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    })

    tl
        .to(".videodiv", {
            '--clip': "0%",
            ease: Power1,
        }, 'video-marqi')

        .to(".marqueeSlide", {
            scale: 1,
            ease: Power1,
        }, 'video-marqi')


        .to(".lft", {
            xPercent: -10,
            stagger: .05,
            ease: Power4,
        }, 'row-indiv')


        .to(".rgt", {
            xPercent: 10,
            stagger: .05,
            ease: Power4,
        }, 'row-indiv')
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },

        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation() {
    document.querySelectorAll(".listelement")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {

                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                    ease: Power4,
                    duration: .5,
                })

            })

            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                    ease: Power4,
                    duration: .5,
                })
            })
        })
}

function paraAnimation() {
    var clutter = "";

    document.querySelector(".textpara")
        .textContent.split("")

        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })

    document.querySelector(".textpara").innerHTML = clutter

    gsap.set(".textpara span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
        },
        opacity: 1,
        stagger: .03,
        ease: Power4,
    })

}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();

}

function capsuleAnimation() {
    gsap.to(".calsule2", {
        scrollTrigger: {
            trigger: ".capsuleeffect",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,

        },

        y: 0,
        ease: Power4,
    })
}

function bodyColorChange() {
    document.querySelectorAll(".section")
        .forEach(function (e) {
            ScrollTrigger.create({
                trigger: e,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                },
                onEnterBack: function () {
                    document.body.setAttribute("theme", e.dataset.color)
                },

            })
        })
}



homePageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
capsuleAnimation();
bodyColorChange();
loco();