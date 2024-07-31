"use client"

import { ReactNode, useEffect, useRef, useState } from "react"

export default function InfiniteViewport(props: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const domContainerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState(() => ({ x: 0, y: 0 }))

    const lastMousePosition = useRef({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const isDragging = useRef(false)
    const bgRef = useRef<HTMLDivElement>(null)

    const handleMouseDown = (event: MouseEvent | TouchEvent) => {
        isDragging.current = true
        if (event instanceof MouseEvent) {
            lastMousePosition.current = { x: event.clientX, y: event.clientY }
        } else {
            lastMousePosition.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }
        }
    }

    const handleDrag = (event: MouseEvent | TouchEvent) => {
        if (!isDragging.current) return
        let clientX: number, clientY: number
        if (event instanceof MouseEvent) {
            clientX = event.clientX
            clientY = event.clientY
        } else {
            clientX = event.touches[0].clientX
            clientY = event.touches[0].clientY
        }
        const dx = clientX - lastMousePosition.current.x
        const dy = clientY - lastMousePosition.current.y
        setPosition((prev) => ({
            x: prev.x + dx,
            y: prev.y + dy,
        }))
        lastMousePosition.current = { x: clientX, y: clientY }
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

        container.addEventListener("mousedown", handleMouseDown)
        container.addEventListener("touchstart", handleMouseDown)
        container.addEventListener("mousemove", handleDrag)
        container.addEventListener("touchmove", handleDrag)
        container.addEventListener("mouseup", handleMouseUp)
        container.addEventListener("touchend", handleMouseUp)
        container.addEventListener("wheel", handleWheel)

        return () => {
            container.removeEventListener("mousedown", handleMouseDown)
            container.removeEventListener("touchstart", handleMouseDown)
            container.removeEventListener("mousemove", handleDrag)
            container.removeEventListener("touchmove", handleDrag)
            container.removeEventListener("mouseup", handleMouseUp)
            container.removeEventListener("touchend", handleMouseUp)
            container.removeEventListener("wheel", handleWheel)
        }
    }, [position, zoom])

    return (
        <div
            ref={containerRef}
            className="relative h-screen w-screen bg-zinc-200 cursor-grab active:cursor-grabbing grid place-items-center"
        >
            <canvas ref={canvasRef} className="absolute h-full w-full" />

            <div
                ref={domContainerRef}
                className="absolute grid h-[10000px] w-[10000px] place-items-center"
            >
                <div
                    ref={bgRef}
                    className="absolute h-full w-full cursor-grab active:cursor-grabbing"
                ></div>
                <div className="z-10 grid place-items-center w-full h-full">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
