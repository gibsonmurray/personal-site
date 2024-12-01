"use client"

import { data } from "./data"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { RefObject, useEffect, useRef, useState } from "react"
import { getRandomInt } from "./utils"

const FunText = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null)
    const [centerRect, setCenterRect] = useState({
        x: 0,
        y: 0,
    })
    const [cursorPoint, setCursorPoint] = useState({
        x: 0,
        y: 0,
    })
    const [shiftPoint, setShiftPoint] = useState({
        x: 0,
        y: 0,
    })

    const interstellarRef = useRef<HTMLDivElement>(null)
    const prestigeRef = useRef<HTMLDivElement>(null)
    const oppenheimerRef = useRef<HTMLDivElement>(null)
    const darkKnightRef = useRef<HTMLDivElement>(null)
    const inceptionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPoint({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    const handleHoverOverText = (e: React.MouseEvent<HTMLSpanElement>) => {
        const text = e.currentTarget.dataset.text!
        setHoveredText(text)
        let ref: RefObject<HTMLDivElement | null>
        switch (text) {
            case "interstellar":
                ref = interstellarRef
                break
            case "prestige":
                ref = prestigeRef
                break
            case "oppenheimer":
                ref = oppenheimerRef
                break
            case "dark-knight":
                ref = darkKnightRef
                break
            default:
                ref = inceptionRef
                break
        }
        const rect = ref.current!.getBoundingClientRect()
        setCenterRect({
            x: rect.x + rect.width / 2,
            y: rect.y + rect.height / 2,
        })
        setShiftPoint({
            x: (cursorPoint.x - centerRect.x) / 6,
            y: (cursorPoint.y - centerRect.y) / 6,
        })

        // data[text] = data[text].map((item) => ({
        //     ...item,
        //     offsetX: getRandomInt(-500, 500),
        //     offsetY: getRandomInt(-300, 300),
        //     rotate: getRandomInt(-10, 10),
        // }))
    }

    return (
        <div className="relative flex h-svh w-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-7xl font-black uppercase text-zinc-300 *:cursor-default">
                <span
                    ref={interstellarRef}
                    data-text="interstellar"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    interstellar
                </span>
                <span
                    ref={prestigeRef}
                    data-text="prestige"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the prestige
                </span>
                <span
                    ref={oppenheimerRef}
                    data-text="oppenheimer"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    oppenheimer
                </span>
                <span
                    ref={darkKnightRef}
                    data-text="darkKnight"
                    className="transition-all duration-300 hover:text-zinc-500 hover:scale-105"
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the dark knight
                </span>
                <span
                    ref={inceptionRef}
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
                            className="absolute flex aspect-[3/2] w-64 items-center justify-center overflow-hidden rounded-xl"
                            initial={{
                                opacity: 0,
                                rotate: item.rotate,
                                x: item.offsetX,
                                y: item.offsetY,
                            }}
                            animate={{
                                opacity: 1,
                                rotate: item.rotate,
                                x: shiftPoint.x + item.offsetX,
                                y: shiftPoint.y + item.offsetY,
                                transition: {
                                    type: "spring",
                                    bounce: 0.4,
                                    duration: 1,
                                },
                            }}
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
