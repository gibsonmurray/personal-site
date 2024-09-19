import gsap from "gsap"
import $ from "jquery"

const animations = {
    enter: (selector: string) => {
        gsap.from(selector, {
            opacity: 0,
            scale: 1.3,
            filter: "blur(10px)",
            y: 70,
            duration: 0.5,
            ease: "back.out(1)",
        })
    },

    expand: (selector: string) => {
        const bubble = $(selector).parent()
        const img = bubble.find("#bubble-image")

        const scale = gsap.getProperty(bubble.get(0)!, "scale") as number
        const baseSize = 100
        const scaledSize = baseSize / scale

        gsap.timeline()
            .set(bubble, {
                pointerEvents: "none",
            })
            .set(selector, {
                opacity: 1,
            })
            .to(selector, {
                width: `${scaledSize}vmax`,
                height: `${scaledSize}vmax`,
                duration: 0.5,
                borderRadius: 0,
                ease: "power3.in",
            })
            .to(
                img,
                {
                    opacity: 0,
                    duration: 0.5,
                },
                "<"
            )
    },
}

export default animations
