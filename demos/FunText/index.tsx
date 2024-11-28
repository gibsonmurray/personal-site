"use client"

import { data } from "./data"
import { AnimatePresence, motion, useMotionValue } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const FunText = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null)
    const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })

    const shiftX = useMotionValue(0)
    const shiftY = useMotionValue(0)

    const interstellarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const handleHoverOverText = (e: React.MouseEvent<HTMLSpanElement>) => {
        if (!interstellarRef.current) return
        setHoveredText(e.currentTarget.textContent!)
        const rect = interstellarRef.current.getBoundingClientRect()
        const centerRect = {
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
        }
        shiftX.set((cursorPos.x - centerRect.x) / 5)
        shiftY.set((cursorPos.y - centerRect.y) / 5)
    }

    return (
        <div className="relative flex h-svh w-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-7xl font-black uppercase text-zinc-300 *:cursor-default">
                <span
                    ref={interstellarRef}
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    interstellar
                </span>
                <span className="transition-all duration-300 hover:text-zinc-500 hover:scale-105">
                    the prestige
                </span>
                <span className="transition-all duration-300 hover:text-zinc-500 hover:scale-105">
                    oppenheimer
                </span>
                <span className="transition-all duration-300 hover:text-zinc-500 hover:scale-105">
                    the dark knight
                </span>
                <span className="transition-all duration-300 hover:text-zinc-500 hover:scale-105">
                    inception
                </span>
            </div>
            <AnimatePresence>
                {hoveredText &&
                    data[hoveredText].map((item, index) => (
                        <motion.div
                            key={index}
                            className="absolute flex aspect-[3/2] w-64 items-center justify-center overflow-hidden rounded-xl"
                            style={{
                                translateX:
                                    shiftX.get() / (index === 1 ? 2 : 1) +
                                    item.offsetX,
                                translateY:
                                    shiftY.get() / (index === 1 ? 2 : 1) +
                                    item.offsetY,
                                rotate: item.rotate,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Image
                                src={item.src}
                                alt={hoveredText}
                                className="object-cover"
                                fill
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
        </div>
    )
}

export default FunText
