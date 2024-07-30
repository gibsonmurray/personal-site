"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

const BEAM_DURATION = 500

type BlockProps = {
    highlightColor?: string
    size?: "1x1" | "1x2" | "2x1" | "2x2"
    title?: string
    titlePosition?: "top" | "bottom"
}

export default function Block({
    highlightColor,
    size = "1x1",
    title,
    titlePosition,
}: BlockProps) {
    const sizeMap = {
        "1x1": { height: "h-48", width: "w-48" },
        "1x2": { height: "h-48", width: "w-[404px]" },
        "2x1": { height: "h-48", width: "w-[404px]" },
        "2x2": { height: "h-[404px]", width: "w-[404px]" },
    }

    const { height, width } = sizeMap[size]

    const [hoverDirection, setHoverDirection] = useState<
        "left" | "right" | null
    >(null)
    const blockRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const [titleHeight, setTitleHeight] = useState(0)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (blockRef.current) {
            const rect = blockRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const isFromLeft = e.clientX < centerX
            setHoverDirection(isFromLeft ? "left" : "right")
        }

        animateBeam()
    }

    const animateBeam = () => {
        const beams = blockRef.current?.querySelectorAll(".beam")
        beams?.forEach((el) => el.classList.remove("hidden"))
        setTimeout(() => {
            beams?.forEach((el) => el.classList.add("hidden"))
        }, BEAM_DURATION)
    }

    useEffect(() => {
        if (titleRef.current) {
            setTitleHeight(titleRef.current.offsetHeight)
        }
    }, [])

    return (
        <motion.div
            className="relative grid place-items-center"
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{
                rotate: hoverDirection === "left" ? 2.5 : -2.5,
                y: [0, -10, 0],
                transition: {
                    y: { repeat: Infinity, duration: 1.5 },
                },
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverDirection(null)}
        >
            <motion.div
                ref={blockRef}
                className={`relative grid cursor-pointer place-items-center overflow-hidden rounded-3xl border-2 border-zinc-200 bg-zinc-50 shadow-lg shadow-black/5 ${height} ${width}`}
            >
                <BorderBeam
                    size={size === "1x1" ? 200 : 300}
                    duration={BEAM_DURATION / 1000}
                    borderWidth={2}
                    className="beam hidden"
                    color={highlightColor}
                />
                <Image
                    src="/images/prof-pic.png"
                    width={200}
                    height={200}
                    alt="image"
                    className="cursor-events-none"
                />
            </motion.div>
            <motion.span
                ref={titleRef}
                className="absolute -z-10 text-center text-xl font-bold text-zinc-800"
                style={{
                    [titlePosition === "top" ? "top" : "bottom"]: 0,
                }}
                initial={{ opacity: 0 }}
                animate={
                    hoverDirection
                        ? {
                              opacity: 1,
                              y:
                                  titlePosition === "top"
                                      ? -titleHeight - 5
                                      : titleHeight + 5,
                          }
                        : { opacity: 0, y: 0 }
                }
            >
                {title}
            </motion.span>
        </motion.div>
    )
}
