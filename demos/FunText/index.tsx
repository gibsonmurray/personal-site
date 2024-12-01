"use client"

import { data } from "./data"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const FunText = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null)

    const handleHoverOverText = (e: React.MouseEvent<HTMLSpanElement>) => {
        const text = e.currentTarget.dataset.text!
        setHoveredText(text)
    }

    return (
        <div className="relative flex h-svh w-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-7xl font-black uppercase text-zinc-300 *:cursor-default">
                <span
                    data-text="interstellar"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    interstellar
                </span>
                <span
                    data-text="prestige"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the prestige
                </span>
                <span
                    data-text="oppenheimer"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    oppenheimer
                </span>
                <span
                    data-text="darkKnight"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the dark knight
                </span>
                <span
                    data-text="inception"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    inception
                </span>
            </div>
            <AnimatePresence>
                {hoveredText &&
                    data[hoveredText].map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute flex aspect-[3/2] w-64 items-center justify-center overflow-hidden rounded-xl shadow-xl"
                            initial={{
                                scale: 0,
                                opacity: 0,
                                x: item.offsetX,
                                y: item.offsetY,
                                rotate: item.rotate,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                x: item.offsetX,
                                y: item.offsetY,
                                rotate: item.rotate,
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <Image
                                src={item.src}
                                alt={hoveredText}
                                className="object-cover"
                                fill
                                unoptimized
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
        </div>
    )
}

export default FunText
