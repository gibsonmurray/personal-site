"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gsap from "gsap"

function Bubble(props: {
    title: string
    link: string
    thumbnail: string
    colors: string[]
    offsetX: number
    offsetY: number
    initAnimationDone: boolean
    className?: string
}) {
    const {
        title,
        link,
        thumbnail,
        colors,
        offsetX,
        offsetY,
        initAnimationDone,
        className,
    } = props
    const [clicked, setClicked] = useState(false)
    const router = useRouter()
    const bubbleRef = useRef(null)
    const [scaleValue, setScaleValue] = useState(1)

    const handleClick = () => {
        setClicked(true)
    }

    const getScaleValue = () => {
        if (!bubbleRef.current || !initAnimationDone) return 1
        const transform = (bubbleRef.current! as HTMLElement).style.transform
        const scaleMatch = transform.match(/scale\(([^)]+)\)/)
        const sv = scaleMatch ? parseFloat(scaleMatch[1]) : 1
        return sv
    }

    useEffect(() => {
        setScaleValue(getScaleValue())
    }, [initAnimationDone])

    const handleMouseEnter = () => {
        if (!bubbleRef.current || !initAnimationDone) return
        const sv = getScaleValue()
        setScaleValue(sv)
        gsap.to(bubbleRef.current, {
            scale: sv + 0.08,
            ease: "elastic.out(0.8, 0.4)",
        })
    }

    const handleMouseLeave = () => {
        if (!bubbleRef.current || !initAnimationDone) return
        gsap.to(bubbleRef.current, {
            scale: scaleValue,
            ease: "elastic.out(0.8, 0.4)",
        })
    }

    return (
        <motion.button
            ref={bubbleRef}
            title={title}
            className={`${className} bubble relative flex h-[150px] w-[150px] md:h-[200px] md:w-[200px] cursor-pointer items-center justify-center rounded-full shadow-md shadow-zinc-400/5 scale-0`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                borderRadius: 9999,
                overflow: clicked ? "visible" : "hidden",
                borderColor: clicked ? "transparent" : "rgb(212 212 216 / 0.9)",
                zIndex: clicked ? 100 : 0,
                translate: `${offsetX}px ${offsetY}px`,
                pointerEvents: "none",
            }}
        >
            <motion.div
                className="absolute flex h-full w-full items-center justify-center rounded-full opacity-0"
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
                    priority
                />
            </motion.div>
            <motion.div
                className={`absolute left-0 top-0 h-full w-full rounded-full border-4 border-zinc-300/70`}
                style={{ opacity: clicked ? 0 : 1 }}
            />
        </motion.button>
    )
}

export default Bubble
