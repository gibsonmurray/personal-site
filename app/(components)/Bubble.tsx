"use client"

import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gsap from "gsap"

function Bubble(props: { link: string; thumbnail: string; colors: string[] }) {
    const { link, thumbnail, colors } = props
    const [clicked, setClicked] = useState(false)
    const router = useRouter()
    const bubbleRef = useRef(null)
    const [originalScale, setOriginalScale] = useState(1)

    const handleClick = () => {
        setClicked(true)
    }

    const handleMouseEnter = () => {
        if (!bubbleRef.current) return
        const transform = (bubbleRef.current as HTMLElement).style.transform

        const scaleMatch = transform.match(/scale\(([^)]+)\)/)
        const scaleValue = scaleMatch ? parseFloat(scaleMatch[1]) : 1

        setOriginalScale(scaleValue)

        gsap.to(bubbleRef.current, {
            scale: scaleValue + 0.08,
            ease: "elastic.out(0.8, 0.4)"
        })
    }

    const handleMouseLeave = () => {
        gsap.to(bubbleRef.current, {
            scale: originalScale,
            ease: "elastic.out(0.8, 0.4)"
        })
    }

    return (
        <motion.button
            ref={bubbleRef}
            className="bubble relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center rounded-full border-2 shadow-md shadow-zinc-400/5 scale-0"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                borderRadius: 9999,
                overflow: clicked ? "" : "hidden",
                zIndex: clicked ? 1000 : 0,
                borderColor: clicked ? "transparent" : "rgb(212 212 216 / 0.9)",
            }}
        >
            <motion.div
                className="absolute flex h-full w-full items-center justify-center rounded-full border-2 border-zinc-300/90 opacity-0"
                animate={{
                    backgroundColor: clicked ? colors[1] : colors[0],
                    width: clicked
                        ? Math.max(window.innerWidth, window.innerHeight) * 3
                        : 200,
                    height: clicked
                        ? Math.max(window.innerWidth, window.innerHeight) * 3
                        : 200,
                    transition: {
                        duration: 0.5,
                        ease: [0.895, 0.03, 0.685, 0.22],
                    },
                }}
                onAnimationComplete={() => {
                    if (clicked) {
                        router.push(link)
                    }
                }}
                style={{
                    opacity: clicked ? 1 : 0,
                    backgroundColor: colors[0],
                }}
            ></motion.div>

            <motion.div
                className="relative h-[200px] w-[200px] rounded-full"
                animate={{
                    opacity: clicked ? 0 : 1,
                }}
            >
                <Image
                    className="rounded-full object-cover"
                    src={thumbnail}
                    alt="thumbnail"
                    fill
                />
            </motion.div>
        </motion.button>
    )
}

export default Bubble
