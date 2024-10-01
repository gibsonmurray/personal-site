import gsap from "gsap"

const config = {
    duration: 0.5,
    ease: "back.out(0.8)",
    cornerTweens: [
        "42px 0px 0px 0px",
        "0px 42px 0px 0px",
        "0px 0px 0px 42px",
        "0px 0px 42px 0px",
    ],
}

export const animations = {
    open: () => {
        gsap.timeline()
            .fromTo(
                "#modal-bg",
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
            )
            .fromTo(
                ".modal-square",
                {
                    scale: 0,
                    y: 400,
                },
                {
                    scale: 1,
                    y: 0,
                    stagger: 0.05,
                    ease: config.ease,
                    duration: config.duration,
                },
            )
            .to(".modal-square", {
                borderRadius: function (index: number) {
                    const corner = config.cornerTweens[index]
                    return corner
                },
                ease: config.ease,
                duration: config.duration,
            })
            .to(
                "#modal-grid",
                {
                    gap: 0,
                    ease: config.ease,
                    duration: config.duration,
                },
                "<",
            )
            .to(
                "#modal-grid",
                {
                    borderColor: "rgb(228, 228, 231)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    ease: config.ease,
                    duration: config.duration,
                },
                "<40%",
            )
            .fromTo(
                "#modal-content > *",
                {
                    opacity: 0,
                    y: 10,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: config.ease,
                    duration: config.duration,
                },
            )
    },

    close: () => {
        return new Promise<boolean>((resolve) => {
            gsap.timeline({
                onComplete: () => resolve(true),
            })
                .to("#modal-content > *", {
                    opacity: 0,
                    y: -10,
                    ease: config.ease,
                    stagger: 0.1,
                    duration: config.duration,
                })
                .to(
                    "#modal-grid",
                    {
                        borderColor: "transparent",
                        boxShadow: "none",
                        ease: config.ease,
                        duration: config.duration,
                    },
                    "<",
                )
                .to(
                    "#modal-grid",
                    {
                        gap: 20,
                        ease: config.ease,
                        duration: config.duration,
                    },
                    "<70%",
                )
                .to(
                    ".modal-square",
                    {
                        borderRadius: "42px",
                        ease: config.ease,
                        duration: config.duration,
                    },
                    "<",
                )
                .to(
                    ".modal-square",
                    {
                        scale: 0,
                        y: -500,
                        ease: "power4.inOut",
                        duration: config.duration,
                        stagger: 0.08,
                    },
                    "<10%",
                )
                .to("#modal-bg", {
                    opacity: 0,
                    ease: config.ease,
                    duration: config.duration,
                })
        })
    },
}
