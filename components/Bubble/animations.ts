import gsap from "gsap"
import $ from "jquery"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { getEasePrefix, getMaxScale } from "./utils"

gsap.registerPlugin(ScrollTrigger)

const animations = {
    scroll: (
        bubble: HTMLElement | null,
        column: number,
        totalColumns: number,
    ) => {
        const maxScale = getMaxScale(column, totalColumns, {
            scaleDecrement: 0.1,
        })
        const easePrefix = getEasePrefix(maxScale, 0.9)

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
                    scale: maxScale,
                    y: 0,
                    ease: `${easePrefix}.out`,
                },
            )
            .to(bubble, {
                scale: 0,
                y: 50,
                ease: `${easePrefix}.in`,
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
    ): Promise<void> => {
        return new Promise((resolve) => {
            if (!bubble) {
                resolve()
                return
            }
            const $bubble = $(bubble)
            const img = $bubble.find(".bubble-image")
            const bg = $bubble.find(".bubble-background")

            const scale = gsap.getProperty(bubble, "scale") as number
            const baseSize = 300
            const scaledSize = baseSize / scale

            $(".bubble").css("pointer-events", "none") // Disable pointer events for all bubbles

            $(".row").eq(location.row).css("z-index", 100)

            $(".row").not(`:eq(${location.row})`).css("z-index", 0)

            gsap.timeline({
                onComplete: resolve, // Add this line to resolve the Promise when the animation is complete
            })
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
        })
    },
}

export default animations
