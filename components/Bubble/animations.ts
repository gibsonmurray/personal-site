import gsap from "gsap"
import $ from "jquery"

const animations = {
    setScale: (bubble: HTMLElement | null, scale: number) => {
        if (!bubble) return
        gsap.set(bubble, {
            opacity: 1,
            scale: scale,
        })
    },

    setYTranslation: (bubble: HTMLElement | null, y: number) => {
        if (!bubble) return
        gsap.set(bubble, {
            y,
        })
    },

    enter: () => {
        gsap.from(".row", {
            opacity: 0,
            scale: 1.5,
            filter: "blur(10px)",
            y: 70,
            duration: 0.3,
            ease: "back.out(1)",
            stagger: 0.08,
        })
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
