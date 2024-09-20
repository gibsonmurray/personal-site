import gsap from "gsap"
import $ from "jquery"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const animations = {
    scroll: (bubble: HTMLElement | null) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: bubble,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                // markers: true,
            },
        })
            .fromTo(
                bubble,
                {
                    scale: 0,
                    y: -50,
                },
                {
                    scale: 1,
                    y: 0,
                    ease: "power4.out",
                },
            )
            .to(bubble, {
                scale: 0,
                y: 50,
                ease: "power4.in",
            })
    },

    enter: () => {
        gsap.fromTo(
            ".row",
            {
                opacity: 0,
                scale: 1.5,
                filter: "blur(10px)",
                y: 70,
            },
            {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                y: 0,
                duration: 0.3,
                ease: "back.out(1)",
                stagger: 0.08,
            },
        )
    },

    expand: (
        bubble: HTMLElement | null,
        location: { row: number; column: number },
    ) => {
        if (!bubble) return
        const $bubble = $(bubble)
        const img = $bubble.find(".bubble-image")
        const bg = $bubble.find(".bubble-background")

        const scale = gsap.getProperty(bubble, "scale") as number
        const baseSize = 300
        const scaledSize = baseSize / scale

        $(".bubble").css("pointer-events", "none") // Disable pointer events for all bubbles

        $(".row").not(`:eq(${location.row})`).css("z-index", -1)

        gsap.timeline()
            .set(bubble, {
                pointerEvents: "none",
            })
            .set(bg, {
                opacity: 1,
            })
            .to(bg, {
                width: `${scaledSize}vmax`,
                height: `${scaledSize}vmax`,
                duration: 0.5,
                borderRadius: 0,
                ease: "power3.in",
            })
            .to(
                img.get(0)!,
                {
                    opacity: 0,
                    duration: 0.5,
                },
                "<",
            )
    },
}

export default animations
