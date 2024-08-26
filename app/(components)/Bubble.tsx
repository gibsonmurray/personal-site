"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import gsap from "gsap"

import { useAtom } from "jotai"

import {themeState, btnVisibleState} from "./ThemeToggle"

function Bubble(props: {
    title: string
    path: string
    thumbnail: string
    colors: string[]
    darkColors: string[]
    offsetX: number
    offsetY: number
    initAnimationDone: boolean
    className?: string
}) {
    const [clicked, setClicked] = useState(false)
    const router = useRouter()
    const bubbleRef = useRef(null)
    const [scaleValue, setScaleValue] = useState(1)

    const [theme] = useAtom(themeState)
    const [themeColors, setThemeColors] = useState(
        theme === "dark" ? props.darkColors : props.colors,
    )

    useEffect(() => {
        setThemeColors(theme === "dark" ? props.darkColors : props.colors)
    }, [theme])

    const [_, setBtnVisible] = useAtom(btnVisibleState)

    const [screenWidth, setScreenWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        }
        return 0
    })

    const [screenHeight, setScreenHeight] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerHeight
        }
        return 0
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
            setScreenHeight(window.innerHeight)
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleClick = () => {
        setClicked(true)
        setBtnVisible(false)
    }

    const getScaleValue = () => {
        if (!bubbleRef.current || !props.initAnimationDone) return 1
        const transform = (bubbleRef.current! as HTMLElement).style.transform
        const scaleMatch = transform.match(/scale\(([^)]+)\)/)
        const sv = scaleMatch ? parseFloat(scaleMatch[1]) : 1
        return sv
    }

    useEffect(() => {
        setScaleValue(getScaleValue())
    }, [props.initAnimationDone])

    const handleMouseEnter = () => {
        if (!bubbleRef.current || !props.initAnimationDone) return
        const sv = getScaleValue()
        setScaleValue(sv)
        gsap.to(bubbleRef.current, {
            scale: sv + 0.08,
            ease: "elastic.out(0.8, 0.4)",
        })
    }

    const handleMouseLeave = () => {
        if (!bubbleRef.current || !props.initAnimationDone) return
        gsap.to(bubbleRef.current, {
            scale: scaleValue,
            ease: "elastic.out(0.8, 0.4)",
        })
    }

    return (
        <motion.button
            ref={bubbleRef}
            title={props.title}
            className={`${props.className} bubble relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full shadow-md shadow-zinc-400/5 scale-0 md:h-[200px] md:w-[200px]`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                borderRadius: 9999,
                overflow: clicked ? "visible" : "hidden",
                zIndex: clicked ? 100 : 0,
                translate: `${props.offsetX}px ${props.offsetY}px`,
                pointerEvents: "none",
            }}
        >
            <motion.div
                className="absolute flex h-full w-full items-center justify-center rounded-full opacity-0"
                animate={{
                    backgroundColor: clicked ? themeColors[1] : themeColors[0],
                    width: clicked
                        ? Math.max(screenWidth, screenHeight) * 3
                        : 200,
                    height: clicked
                        ? Math.max(screenWidth, screenHeight) * 3
                        : 200,
                    transition: {
                        duration: 0.5,
                        ease: [0.895, 0.03, 0.685, 0.22],
                    },
                }}
                onAnimationComplete={() => {
                    if (clicked) {
                        router.push(props.path)
                    }
                }}
                style={{
                    opacity: clicked ? 1 : 0,
                    backgroundColor: themeColors[0],
                }}
            ></motion.div>

            <motion.div
                className="relative h-[200px] w-[200px] rounded-full"
                animate={{
                    opacity: clicked ? 0 : 1,
                }}
            >
                <Image
                    className="h-full w-full rounded-full object-cover"
                    src={props.thumbnail}
                    alt="thumbnail"
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 500px"
                    priority
                />
            </motion.div>
            <motion.div
                className={`absolute left-0 top-0 h-full w-full rounded-full border-4 transition-[border-color] duration-500 ${theme === "light" ? "border-zinc-300/70" : "border-zinc-800/70"}`}
                style={{ opacity: clicked ? 0 : 1 }}
            />
        </motion.button>
    )
}

export default Bubble
