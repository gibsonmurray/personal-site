import gsap from "gsap"

const config = {
    nav: "#nav",
    squares: ".home-square",
    homeBtn: "#home-btn",
    ease: "back.out",
}

export const animations = {
    enter: () => {
        gsap.timeline({ defaults: { ease: config.ease } })
            .fromTo(
                config.nav,
                {
                    y: 90,
                },
                {
                    y: 0,
                    duration: 0.5,
                    delay: 2,
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
    homeHover: () => {
        gsap.to(config.homeBtn, {
            padding: 6,
            duration: 0.5,
            ease: "back.out(0.8)",
        })
    },
    homeRestore: () => {
        gsap.to(config.homeBtn, {
            padding: 9,
            duration: 0.5,
            ease: "back.out(0.8)",
        })
    },
    homeDown: () => {
        gsap.to(config.homeBtn, {
            padding: 20,
            duration: 0.5,
            ease: "back.out(0.8)",
        })
    },
}
