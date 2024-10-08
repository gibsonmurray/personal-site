import gsap from "gsap"

const config = {
    nav: "#nav",
    squares: ".home-square",
    homeBtn: "#home-btn",
    overlayTop: "#overlay-top",
    overlayBottom: "#overlay-bottom",
    ease: "back.out",
}

export const animations = {
    enter: () => {
        gsap.timeline({ defaults: { ease: config.ease } })
            .set(config.nav, { opacity: 1 }) // so it doesn't appear before it should
            .fromTo(
                config.nav,
                {
                    y: 90,
                },
                {
                    y: 0,
                    duration: 0.5,
                    delay: 1.2,
                },
            )
            .fromTo(
                config.homeBtn,
                {
                    scale: 0,
                    padding: 20,
                },
                {
                    scale: 1,
                    rotate: 675,
                    padding: 9,
                    duration: 1,
                    ease: "back.out(0.8)",
                },
                "-=0.5",
            )
    },

    homeHover: (homeClicked: boolean) => {
        if (homeClicked) return
        gsap.to(config.homeBtn, {
            padding: 6,
            duration: 0.5,
            ease: "back.out(0.8)",
        })
    },

    homeRestore: (homeClicked: boolean) => {
        if (homeClicked) return
        gsap.to(config.homeBtn, {
            padding: 9,
            duration: 0.5,
            ease: "back.out(0.8)",
        })
    },

    homeDown: (setHomeClicked: (clicked: boolean) => void) => {
        gsap.to(config.homeBtn, {
            padding: 19,
            duration: 0.5,
            ease: "back.out(0.8)",
            onComplete: () => {
                setHomeClicked(false)
                animations.homeRestore(false)
            },
        })
    },

    homeOut: () => {
        const duration = 0.8
        const ease = "power4.inOut"
        setTimeout(() => {
            gsap.fromTo(
                config.overlayTop,
                {
                    bottom: "100%",
                },
                {
                    top: 0,
                    duration,
                    ease,
                },
            )
            gsap.fromTo(
                config.overlayBottom,
                {
                    top: "100%",
                },
                {
                    top: "50%",
                    duration,
                    ease,
                },
            )
        }, 0)
    },
}
