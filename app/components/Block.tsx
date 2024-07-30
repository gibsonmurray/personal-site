"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useState, useRef, useEffect } from "react"

const BEAM_DURATION = 500

type BlockProps = {
    highlightColor?: string
    size?: "1x1" | "1x2" | "2x1" | "2x2"
    title?: string
    titlePosition?: "top" | "bottom"
    thumbnail: string | StaticImageData
    playBeamAnimation?: boolean
    className?: string
}

export default function Block({
    highlightColor,
    size = "1x1",
    title,
    titlePosition,
    thumbnail,
    playBeamAnimation = false,
    className,
}: BlockProps) {
    const sizeMap = {
        "1x1": { height: "h-48", width: "w-48" },
        "1x2": { height: "h-[432px]", width: "w-48" },
        "2x1": { height: "h-48", width: "w-[432px]" },
        "2x2": { height: "h-[432px]", width: "w-[432px]" },
    }

    const { height, width } = sizeMap[size]

    const [hoverDirection, setHoverDirection] = useState<
        "left" | "right" | null
    >(null)
    const blockRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const [titleHeight, setTitleHeight] = useState(0)
    const [repeatInterval, setRepeatInterval] = useState<NodeJS.Timeout | null>(
        null,
    )

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (blockRef.current) {
            const rect = blockRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const isFromLeft = e.clientX < centerX
            setHoverDirection(isFromLeft ? "left" : "right")
        }

        const interval = setInterval(() => {
            animateBeam(1000)
        }, 5000)
        setRepeatInterval(interval)

        animateBeam()
    }

    const handleMouseLeave = () => {
        setHoverDirection(null)
        clearInterval(repeatInterval!)
    }

    const animateBeam = (duration: number = BEAM_DURATION) => {
        const beams = blockRef.current?.querySelectorAll(".beam")
        beams?.forEach((el) => el.classList.remove("hidden"))
        setTimeout(() => {
            beams?.forEach((el) => el.classList.add("hidden"))
        }, duration)
    }

    useEffect(() => {
        if (titleRef.current) {
            setTitleHeight(titleRef.current.offsetHeight)
        }
    }, [])

    useEffect(() => {
        if (playBeamAnimation) {
            animateBeam()
        }
    }, [playBeamAnimation])

    return (
        <motion.div
            className={cn("absolute grid place-items-center", className)}
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
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                ref={blockRef}
                className={`relative grid cursor-pointer place-items-center overflow-hidden rounded-3xl  bg-zinc-50 shadow-lg shadow-black/5 hover:shadow-xl ${height} ${width}`}
            >
                <Image
                    src={thumbnail}
                    fill
                    alt="image"
                    className="cursor-events-none object-cover p-[3px] rounded-3xl"
                />
                <BorderBeam
                    size={size === "1x1" ? 200 : 300}
                    duration={BEAM_DURATION / 1000}
                    borderWidth={2}
                    className="beam hidden"
                    color={highlightColor}
                />
            </motion.div>
            <motion.span
                ref={titleRef}
                className="absolute -z-10 text-center text-xl font-bold text-zinc-600"
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
