"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { cn } from "@/lib/utils"
import { motion, MotionProps } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { useState, useRef, useEffect } from "react"

type BlockProps = {
    highlightColor?: string
    size?: "1x1" | "1x2" | "2x1" | "2x2"
    title?: string
    titlePosition?: "top" | "bottom"
    thumbnail: string | StaticImageData
    playBeamAnimation?: boolean
    className?: string
    beamDuration?: number
} & MotionProps

export default function Block({
    highlightColor,
    size = "1x1",
    title,
    titlePosition,
    thumbnail,
    playBeamAnimation = false,
    className,
    beamDuration = 500,
    ...motionProps
}: BlockProps) {
    const sizeMap = {
        "1x1": {
            height: "h-48",
            width: "w-48",
            gridSize: "col-span-1 row-span-1",
        },
        "1x2": {
            height: "h-[440px]",
            width: "w-48",
            gridSize: "col-span-1 row-span-2",
        },
        "2x1": {
            height: "h-48",
            width: "w-[440px]",
            gridSize: "col-span-2 row-span-1",
        },
        "2x2": {
            height: "h-[440px]",
            width: "w-[440px]",
            gridSize: "col-span-2 row-span-2",
        },
    }

    const { height, width, gridSize } = sizeMap[size]

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

    const animateBeam = (duration: number = beamDuration) => {
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
            className={cn(
                "relative grid place-items-center will-change-transform",
                gridSize,
                className,
            )}
            layout
            {...motionProps}
        >
            <motion.div
                ref={blockRef}
                className={`relative grid cursor-pointer place-items-center overflow-hidden rounded-3xl bg-zinc-300 shadow-lg shadow-black/5 ${height} ${width}`}
                animate={{ y: 0 }}
                whileHover={{
                    rotate: hoverDirection === "left" ? 1.5 : -1.5,
                    y: [0, -10, 0],
                    transition: {
                        y: { repeat: Infinity, duration: 1.5 },
                    },
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={thumbnail}
                    fill
                    alt="image"
                    className="cursor-events-none rounded-3xl object-cover p-[3px]"
                />
                <BorderBeam
                    size={size === "1x1" ? 200 : 300}
                    duration={beamDuration / 1000}
                    borderWidth={2}
                    className="beam hidden"
                    color={highlightColor}
                />
            </motion.div>
            <motion.span
                ref={titleRef}
                className="absolute -z-10 text-center text-lg font-bold text-zinc-500"
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
                                      ? -titleHeight - 15
                                      : titleHeight + 1,
                          }
                        : { opacity: 0, y: 0 }
                }
            >
                {title}
            </motion.span>
        </motion.div>
    )
}
