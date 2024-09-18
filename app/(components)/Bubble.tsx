"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useMotionValueEvent } from "framer-motion"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useScroll } from "framer-motion"

function Bubble(props: {
    title: string
    path: string
    thumbnail: string
    color: string
    initAnimationDone: boolean
    className?: string
    hidden?: boolean
}) {
    const [clicked, setClicked] = useState(false)
    const router = useRouter()
    const bubbleRef = useRef(null)
    const [scale, setScale] = useState(1)
    const [screenDimensions, setScreenDimensions] = useState(() => {
        if (typeof window !== "undefined") {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            }
        }
        return { width: 0, height: 0 }
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleClick = () => {
        setClicked(true)
    }

    const { scrollY } = useScroll()

    const setBubbleScale = useCallback(() => {
        const dist = distanceFromCenter(bubbleRef.current!)
        let scale = Math.max(1 - Math.pow(dist / 470, 3), 0)
        setScale(scale)
    }, [bubbleRef])

    useMotionValueEvent(scrollY, "change", (latest) => {
        setBubbleScale()
    })

    useEffect(() => {
        setBubbleScale()
    }, [setBubbleScale])

    return (
        <motion.button
            ref={bubbleRef}
            title={props.title}
            className={cn(
                "bubble relative flex aspect-square h-52 cursor-pointer items-center justify-center",
                props.className,
                props.hidden ? "invisible" : "",
            )}
            onClick={handleClick}
            style={{
                borderRadius: 9999,
                overflow: clicked ? "visible" : "hidden",
                zIndex: clicked ? 100 : 0,
                scale,
            }}
        >
            <motion.div
                className={`absolute flex h-full w-full items-center justify-center rounded-full opacity-0`}
                animate={{
                    width: clicked
                        ? Math.max(
                              screenDimensions.width,
                              screenDimensions.height,
                          ) * 3
                        : 200,
                    height: clicked
                        ? Math.max(
                              screenDimensions.width,
                              screenDimensions.height,
                          ) * 3
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
                    backgroundColor: props.color,
                    opacity: clicked ? 1 : 0,
                }}
            ></motion.div>

            <motion.div
                className="relative h-full w-full rounded-full"
                animate={{
                    opacity: clicked ? 0 : 1,
                }}
            >
                {!props.hidden && (
                    <Image
                        className="h-full w-full rounded-full object-cover"
                        src={props.thumbnail}
                        alt="thumbnail"
                        fill
                        sizes="300px"
                        priority
                    />
                )}
            </motion.div>
            <motion.div
                className="absolute left-0 top-0 h-full w-full rounded-full border-4 border-zinc-300/70 transition-[border-color] duration-500"
                style={{ opacity: clicked ? 0 : 1 }}
            />
        </motion.button>
    )
}

export default Bubble

function getCenterPoint() {
    const vh = window.innerHeight
    const vw = window.innerWidth
    return { x: Math.round(vw / 2), y: Math.round(vh / 2) }
}

function distanceFromCenter(element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    const center = getCenterPoint()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    return Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2))
}
