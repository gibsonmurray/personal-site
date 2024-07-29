"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function InfiniteViewport(props: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const domContainerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState(() => ({ x: 0, y: 0 }))

    const lastMousePosition = useRef({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const isDragging = useRef(false)
    const bgRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = (event: MouseEvent) => {
        isDragging.current = true
        lastMousePosition.current = { x: event.clientX, y: event.clientY }
    }

    const handleDrag = (event: MouseEvent) => {
        if (!isDragging.current) return
        const dx = event.clientX - lastMousePosition.current.x
        const dy = event.clientY - lastMousePosition.current.y
        setPosition((prev) => ({
            x: prev.x + dx,
            y: prev.y + dy,
        }))
        lastMousePosition.current = { x: event.clientX, y: event.clientY }
    }

    const handleMouseUp = () => {
        isDragging.current = false
    }

    const handleWheel = (event: WheelEvent) => {
        event.preventDefault()
        const zoomFactor = 1.025
        const scrollSensitivity = 1

        if (event.ctrlKey || event.metaKey) {
            const newZoom =
                event.deltaY > 0 ? zoom / zoomFactor : zoom * zoomFactor
            setZoom(newZoom)
        } else {
            // Handle scrolling
            const deltaX = event.deltaX * scrollSensitivity
            const deltaY = event.deltaY * scrollSensitivity
            setPosition((prev) => ({
                x: prev.x - deltaX,
                y: prev.y - deltaY,
            }))
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.translate(position.x, position.y)
        ctx.scale(zoom, zoom)
        ctx.save()

        ctx.restore()
    }, [position, zoom])

    useEffect(() => {
        const container = domContainerRef.current!
        container.style.transform = `translate(${position.x}px, ${position.y}px) scale(${zoom})`
        container.style.transformOrigin = "center"
    }, [position, zoom])

    useEffect(() => {
        const container = containerRef.current!
        const bg = bgRef.current!

        bg.addEventListener("mousedown", handleMouseDown)
        bg.addEventListener("mousemove", handleDrag)
        bg.addEventListener("mouseup", handleMouseUp)
        container.addEventListener("wheel", handleWheel)

        return () => {
            bg.removeEventListener("mousedown", handleMouseDown)
            bg.removeEventListener("mousemove", handleDrag)
            bg.removeEventListener("mouseup", handleMouseUp)
            container.removeEventListener("wheel", handleWheel)
        }
    }, [position, zoom])

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-screen bg-zinc-200"
        >
            <canvas ref={canvasRef} className="absolute h-full w-full" />

            <div
                ref={domContainerRef}
                className="absolute grid h-full w-full place-items-center"
            >
                <div
                    ref={bgRef}
                    className="absolute h-full w-full cursor-grab active:cursor-grabbing"
                ></div>
                <div className="z-10 grid place-items-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
