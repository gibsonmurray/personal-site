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
    enter: () => {
        gsap.timeline()
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
    },
}
