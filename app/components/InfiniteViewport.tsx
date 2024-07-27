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

    const handleMouseDown = (event: MouseEvent) => {
        isDragging.current = true
        lastMousePosition.current = { x: event.clientX, y: event.clientY }
    }

    const handleMouseMove = (event: MouseEvent) => {
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
            // Handle zooming
            const rect = containerRef.current!.getBoundingClientRect()
            const mouseX = event.clientX - rect.left
            const mouseY = event.clientY - rect.top

            const newZoom =
                event.deltaY > 0 ? zoom / zoomFactor : zoom * zoomFactor
            const scaleDiff = newZoom - zoom

            setZoom(newZoom)
            setPosition((prev) => ({
                x: prev.x - ((mouseX - prev.x) * scaleDiff) / zoom,
                y: prev.y - ((mouseY - prev.y) * scaleDiff) / zoom,
            }))
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
        ctx.save()
        ctx.translate(position.x, position.y)
        ctx.scale(zoom, zoom)

        ctx.restore()
    }, [position, zoom])

    useEffect(() => {
        const container = domContainerRef.current!
        container.style.transform = `translate(${position.x}px, ${position.y}px) scale(${zoom})`
        container.style.transformOrigin = "center"
    }, [position, zoom])

    useEffect(() => {
        const container = containerRef.current!
        container.addEventListener("mousedown", handleMouseDown)
        container.addEventListener("mousemove", handleMouseMove)
        container.addEventListener("mouseup", handleMouseUp)
        container.addEventListener("wheel", handleWheel)

        return () => {
            container.removeEventListener("wheel", handleWheel)
            container.removeEventListener("mousemove", handleMouseMove)
            container.removeEventListener("mouseup", handleMouseUp)
            container.removeEventListener("mousedown", handleMouseDown)
        }
    }, [position, zoom])

    return (
        <div ref={containerRef} className="relative h-screen w-screen">
            <canvas ref={canvasRef} className="absolute h-full w-full" />
            <div
                ref={domContainerRef}
                className="absolute grid h-full w-full place-items-center"
            >
                {props.children}
            </div>
        </div>
    )
}
