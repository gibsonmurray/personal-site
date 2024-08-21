"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

function Bubble(props: { link: string; thumbnail: string; color: string }) {
    const { link, thumbnail, color } = props
    const [clicked, setClicked] = useState(false)
    const router = useRouter()

    const handleClick = () => {
        setClicked(true)
    }

    return (
        <motion.button
            className={`bubble relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center border-2 shadow-md shadow-zinc-400/5 scale-0`}
            onClick={handleClick}
            whileHover={{
                scale: 1.1,
                transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 10,
                    mass: 0.8,
                    bounce: 0.6,
                },
            }}
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
                    background: color,
                    opacity: clicked ? 1 : 0,
                }}
            ></motion.div>

            <motion.img
                className="h-[200px] w-[200px] rounded-full object-cover"
                src={thumbnail}
                alt="thumbnail"
                animate={{
                    opacity: clicked ? 0 : 1,
                }}
            />
        </motion.button>
    )
}

export default Bubble
