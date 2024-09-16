"use client"

import Row from "./(components)/Row"
import { bubbles } from "./bubbles"
import Bubble from "./(components)/Bubble"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Home() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [lastMousePosition, setLastMousePosition] = useState({
        x: 0,
        y: 0,
    })
    const [isDragging, setIsDragging] = useState(false)
    const [initAnimationDone, setInitAnimationDone] = useState(false)

    const [screenWidth, setScreenWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        }
        return 0
    })

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    function setBubbleScales() {
        const bubbles = document.querySelectorAll(
            ".bubble",
        ) as NodeListOf<HTMLElement>
        bubbles.forEach((bubble) => {
            const dist = distanceFromCenter(bubble)
            let scale = Math.max(1 - Math.pow(dist / 500, 2.5), 0)
            if (screenWidth < 768) {
                scale = Math.max(1 - Math.pow(dist / 400, 2.5), 0)
            }
            if (initAnimationDone) {
                // subtle scale down animation, less choppy
                gsap.to(bubble, {
                    scale: scale,
                    ease: "elastic.out(1, 0.7)",
                    duration: 0.2,
                })
            } else {
                gsap.set(bubble, {
                    scale: scale,
                })
            }
            bubble.style.pointerEvents = scale > 0.5 ? "auto" : "none"
        })
    }

    useLayoutEffect(() => {
        const $main = mainRef.current
        const $container = containerRef.current

        if (!$main || !$container) return

        const handleWheel = (event: WheelEvent) => {
            const scrollSensitivity = -1
            const dx = event.deltaX * scrollSensitivity
            const dy = event.deltaY * scrollSensitivity
            setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
            $container.style.translate = `${position.x}px ${position.y}px`
            setBubbleScales()
        }

        const handleMouseDown = (event: MouseEvent) => {
            setIsDragging(true)
            setLastMousePosition({ x: event.clientX, y: event.clientY })
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (!isDragging) return
            const dx = event.clientX - lastMousePosition.x
            const dy = event.clientY - lastMousePosition.y
            setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
            setLastMousePosition({ x: event.clientX, y: event.clientY })
            $container.style.translate = `${position.x}px ${position.y}px`
            setBubbleScales()
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        const handleTouchStart = (event: TouchEvent) => {
            setIsDragging(true)
            setLastMousePosition({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
            })
        }

        const handleTouchMove = (event: TouchEvent) => {
            if (!isDragging) return
            const dx = event.touches[0].clientX - lastMousePosition.x
            const dy = event.touches[0].clientY - lastMousePosition.y
            setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
            setLastMousePosition({
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
            })
            $container.style.translate = `${position.x}px ${position.y}px`
            setBubbleScales()
            event.preventDefault()
        }

        const handleTouchEnd = () => {
            setIsDragging(false)
        }

        if (initAnimationDone) {
            $main.addEventListener("wheel", handleWheel, { passive: true })
            $main.addEventListener("mousedown", handleMouseDown)
            $main.addEventListener("mousemove", handleMouseMove)
            $main.addEventListener("mouseup", handleMouseUp)
            $main.addEventListener("touchstart", handleTouchStart)
            $main.addEventListener("touchmove", handleTouchMove)
            $main.addEventListener("touchend", handleTouchEnd)
        }

        window.addEventListener("resize", () => {
            window.location.reload()
        })

        return () => {
            $main.removeEventListener("wheel", handleWheel)
            $main.removeEventListener("mousedown", handleMouseDown)
            $main.removeEventListener("mousemove", handleMouseMove)
            $main.removeEventListener("mouseup", handleMouseUp)
            $main.removeEventListener("touchstart", handleTouchStart)
            $main.removeEventListener("touchmove", handleTouchMove)
            $main.removeEventListener("touchend", handleTouchEnd)
        }
    }, [isDragging, lastMousePosition, position, initAnimationDone])

    useGSAP(() => {
        const bubbles = document.querySelectorAll(
            ".bubble",
        ) as NodeListOf<HTMLElement>
        const $centerBubble = document.querySelector(
            ".center-bubble",
        ) as HTMLElement
        const sortedBubbles = Array.from(bubbles).sort((a, b) => {
            return (
                distanceOfCenterBubble(a, $centerBubble) -
                distanceOfCenterBubble(b, $centerBubble)
            )
        })

        setBubbleScales()

        sortedBubbles.forEach((bubble) => {
            const dist = distanceOfCenterBubble(bubble, $centerBubble)
            const delay = dist / 2000

            gsap.from(bubble, {
                scale: 0,
                delay: 0.4 + delay,
                duration: 0.5,
                ease: "elastic.out(1, 0.7)",
                onComplete: () => {
                    setInitAnimationDone(true)
                },
            })
        })
    })

    return (
        <div
            ref={containerRef}
            className="relative flex h-screen w-screen flex-col items-center justify-center"
        >
            <main
                ref={mainRef}
                className={`absolute flex h-[10000px] w-[10000px] cursor-grab flex-col items-center justify-center -translate-x-[100px] active:cursor-grabbing`}
            >
                {bubbles.map((row, idx) => {
                    const rowOffset = screenWidth < 768 ? 5 : 20
                    const colOffset = 100
                    const offsetY =
                        (Math.floor(bubbles.length / 2) - idx) * rowOffset
                    let offsetX =
                        row.length % 2 !== 0 ? ((idx + 1) % 2) * colOffset : 0
                    if (
                        // if the row above is odd and the current row is even, add colOffset
                        bubbles[idx - 1] &&
                        bubbles[idx - 1].length % 2 !== 0 &&
                        row.length % 2 === 0
                    ) {
                        offsetX = colOffset
                    }
                    return (
                        <Row key={idx}>
                            {bubbles[idx].map((bubble, j) => (
                                <Bubble
                                    key={j}
                                    title={bubble.title}
                                    path={bubble.path}
                                    thumbnail={bubble.thumbnail}
                                    colors={bubble.colors}
                                    darkColors={bubble.darkColors}
                                    offsetX={offsetX}
                                    offsetY={offsetY}
                                    initAnimationDone={initAnimationDone}
                                    className={
                                        bubble.path === "/about"
                                            ? "center-bubble"
                                            : ""
                                    }
                                />
                            ))}
                        </Row>
                    )
                })}
            </main>
        </div>
    )
}

export default Home

function getCenterView() {
    const vh = window.innerHeight
    const vw = window.innerWidth
    return { x: Math.round(vw / 2), y: Math.round(vh / 2) }
}

function distanceFromCenter(element: HTMLElement) {
    const rect = element.getBoundingClientRect()
    const center = getCenterView()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    return Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2))
}

function distanceOfCenterBubble(
    element: HTMLElement,
    centerElement: HTMLElement,
) {
    const rect1 = element.getBoundingClientRect()
    const rect2 = centerElement.getBoundingClientRect()
    const dx = (rect1.left + rect1.right) / 2 - (rect2.left + rect2.right) / 2
    const dy = (rect1.top + rect1.bottom) / 2 - (rect2.top + rect2.bottom) / 2
    return Math.sqrt(dx * dx + dy * dy)
}
