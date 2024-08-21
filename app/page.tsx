"use client"

import Row from "./(components)/Row"
import { bubbles, rows } from "./bubbles"
import Bubble from "./(components)/Bubble"
import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

function Home() {
    const rowOffset = 20

    const containerRef = useRef<HTMLDivElement>(null)
    const mainRef = useRef<HTMLElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [lastMousePosition, setLastMousePosition] = useState({
        x: 0,
        y: 0,
    })
    const [isDragging, setIsDragging] = useState(false)

    useLayoutEffect(() => {
        const $main = mainRef.current
        const $container = containerRef.current

        if (!$main || !$container) return

        const setBubbleScales = () => {
            const bubbles = document.querySelectorAll(
                ".bubble",
            ) as NodeListOf<HTMLElement>
            bubbles.forEach((bubble) => {
                const dist = distanceFromCenter(bubble)
                const scale = Math.max(1 - Math.pow(dist / 500, 2.5), 0)
                bubble.style.scale = scale.toString()
                bubble.style.pointerEvents = scale > 0.5 ? "auto" : "none"
            })
        }

        setBubbleScales()

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

        $main.addEventListener("wheel", handleWheel)
        $main.addEventListener("mousedown", handleMouseDown)
        $main.addEventListener("mousemove", handleMouseMove)
        $main.addEventListener("mouseup", handleMouseUp)
        $main.addEventListener("touchstart", handleTouchStart)
        $main.addEventListener("touchmove", handleTouchMove)
        $main.addEventListener("touchend", handleTouchEnd)

        return () => {
            $main.removeEventListener("wheel", handleWheel)
            $main.removeEventListener("mousedown", handleMouseDown)
            $main.removeEventListener("mousemove", handleMouseMove)
            $main.removeEventListener("mouseup", handleMouseUp)
            $main.removeEventListener("touchstart", handleTouchStart)
            $main.removeEventListener("touchmove", handleTouchMove)
            $main.removeEventListener("touchend", handleTouchEnd)
        }
    }, [isDragging, lastMousePosition, position])

    useGSAP(() => {
        const bubbles = document.querySelectorAll(
            ".bubble",
        ) as NodeListOf<HTMLElement>
        const $centerBubble = bubbles[Math.floor(bubbles.length / 2)]
        const sortedBubbles = Array.from(bubbles).sort((a, b) => {
            return (
                distanceOfCenterBubble(a, $centerBubble) -
                distanceOfCenterBubble(b, $centerBubble)
            )
        })

        sortedBubbles.forEach((bubble, index) => {
            const distance = distanceOfCenterBubble(bubble, $centerBubble)
            const delay = distance / 2000 // Adjust the divisor to control the wave speed

            gsap.from(bubble, {
                scale: 0,
                delay: 0.4 + delay, // Start with a base delay and add the distance-based delay
                duration: 0.5,
                ease: "elastic.out(1, 0.7)",
            })
        })
    })

    const getCenterView = () => {
        const vh = window.innerHeight
        const vw = window.innerWidth
        return { x: Math.round(vw / 2), y: Math.round(vh / 2) }
    }

    const distanceFromCenter = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect()
        const center = getCenterView()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2
        return Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2))
    }

    const distanceOfCenterBubble = (
        element: HTMLElement,
        centerElement: HTMLElement,
    ) => {
        const rect1 = element.getBoundingClientRect()
        const rect2 = centerElement.getBoundingClientRect()
        const dx =
            (rect1.left + rect1.right) / 2 - (rect2.left + rect2.right) / 2
        const dy =
            (rect1.top + rect1.bottom) / 2 - (rect2.top + rect2.bottom) / 2
        return Math.sqrt(dx * dx + dy * dy)
    }

    return (
        <div
            ref={containerRef}
            className="relative flex h-screen w-screen flex-col items-center justify-center"
        >
            <main
                ref={mainRef}
                className="absolute flex h-[10000px] w-[10000px] cursor-grab flex-col items-center justify-center active:cursor-grabbing"
            >
                {rows.map((cols, i) => {
                    const offset = (Math.floor(rows.length / 2) - i) * rowOffset
                    const startIndex = rows
                        .slice(0, i)
                        .reduce((acc, size) => acc + size, 0)
                    const endIndex = startIndex + cols

                    return (
                        <Row key={i} offset={offset}>
                            {bubbles
                                .slice(startIndex, endIndex)
                                .map((bubble, j) => (
                                    <Bubble
                                        key={j}
                                        link={bubble.link}
                                        thumbnail={bubble.thumbnail}
                                        colors={bubble.colors}
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
