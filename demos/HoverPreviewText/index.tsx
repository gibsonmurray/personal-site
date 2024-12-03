"use client"

import { data, IMAGE_PATH } from "./data"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"

const HoverPreviewText = () => {
    const [hoveredText, setHoveredText] = useState<string | null>(null)

    const handleHoverOverText = (e: React.MouseEvent<HTMLSpanElement>) => {
        const text = e.currentTarget.dataset.text!
        setHoveredText(text)
    }

    const [normalizedMousePosition, setNormalizedMousePosition] = useState({
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const normalizer = 4

            setNormalizedMousePosition({
                x: (e.clientX - window.innerWidth / 2) / normalizer,
                y: (e.clientY - window.innerHeight / 2) / normalizer,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useEffect(() => {
        const mobileToast = () => {
            if (window.innerWidth < 768) {
                toast.warning(
                    "The demo may not work as expected on smaller screens.",
                )
            }
        }
        setTimeout(mobileToast, 1000)

        window.addEventListener("resize", mobileToast)
        return () => window.removeEventListener("resize", mobileToast)
    }, [])

    const initialScaleY = 1.15
    const hoverScaleY = 1.3
    const transition = {
        type: "spring",
        stiffness: 300,
        damping: 10,
        mass: 0.8,
    }

    return (
        <div className="relative flex w-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1 text-nowrap text-5xl font-black uppercase text-zinc-300 *:cursor-default md:text-7xl">
                <motion.span
                    data-text="interstellar"
                    className="transition-colors duration-300 hover:text-zinc-500"
                    animate={{
                        scaleY: initialScaleY,
                    }}
                    whileHover={{
                        scaleY: hoverScaleY,
                    }}
                    transition={transition}
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    interstellar
                </motion.span>
                <motion.span
                    data-text="prestige"
                    className="transition-colors duration-300 hover:text-zinc-500"
                    animate={{
                        scaleY: initialScaleY,
                    }}
                    whileHover={{
                        scaleY: hoverScaleY,
                    }}
                    transition={transition}
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the prestige
                </motion.span>
                <motion.span
                    data-text="oppenheimer"
                    className="transition-colors duration-300 hover:text-zinc-500"
                    animate={{
                        scaleY: initialScaleY,
                    }}
                    whileHover={{
                        scaleY: hoverScaleY,
                    }}
                    transition={transition}
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    oppenheimer
                </motion.span>
                <motion.span
                    data-text="darkKnight"
                    className="transition-colors duration-300 hover:text-zinc-500"
                    animate={{
                        scaleY: initialScaleY,
                    }}
                    whileHover={{
                        scaleY: hoverScaleY,
                    }}
                    transition={transition}
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    the dark knight
                </motion.span>
                <motion.span
                    data-text="inception"
                    className="transition-colors duration-300 hover:text-zinc-500"
                    animate={{
                        scaleY: initialScaleY,
                    }}
                    whileHover={{
                        scaleY: hoverScaleY,
                    }}
                    transition={transition}
                    onMouseEnter={handleHoverOverText}
                    onMouseMove={handleHoverOverText}
                    onMouseLeave={() => setHoveredText(null)}
                >
                    inception
                </motion.span>
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
                                x:
                                    item.offsetX +
                                    (index === 1
                                        ? normalizedMousePosition.x / 2
                                        : normalizedMousePosition.x),
                                y: item.offsetY + normalizedMousePosition.y,
                                rotate: item.rotate,
                            }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 10,
                                mass: 0.6,
                            }}
                        >
                            <Image
                                src={`${IMAGE_PATH}/${item.src}`}
                                alt={hoveredText}
                                className="object-cover"
                                fill
                                unoptimized
                                priority
                            />
                        </motion.div>
                    ))}
            </AnimatePresence>
        </div>
    )
}

export default HoverPreviewText
