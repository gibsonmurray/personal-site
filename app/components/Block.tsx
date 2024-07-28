"use client"

import { motion } from "framer-motion"
import { useState, useRef } from "react"

export default function Block() {
    const [hoverDirection, setHoverDirection] = useState<
        "left" | "right" | null
    >(null)
    const blockRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        if (blockRef.current) {
            const rect = blockRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const isFromLeft = e.clientX < centerX
            setHoverDirection(isFromLeft ? "left" : "right")
        }
    }

    return (
        <motion.div
            ref={blockRef}
            className="grid h-48 w-48 cursor-grab place-items-center rounded-2xl bg-zinc-50 shadow-sm shadow-black/5 active:cursor-grabbing"
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ rotate: hoverDirection === "left" ? 5 : -5 }}
            drag
            dragMomentum={false}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverDirection(null)}
        >
            {hoverDirection && <p>Hovered from {hoverDirection}</p>}
        </motion.div>
    )
}
