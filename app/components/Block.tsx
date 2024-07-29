"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"

type BlockProps = {
    dataGrid: { i: string; x: number; y: number; w: number; h: number }
}

export default function Block({ dataGrid }: BlockProps) {
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
            data-grid={dataGrid}
            layout
            className="grid h-48 w-48 cursor-pointer place-items-center overflow-hidden rounded-3xl bg-zinc-50 shadow-lg shadow-black/5 active:cursor-grabbing"
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ rotate: hoverDirection === "left" ? 5 : -5 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverDirection(null)}
        >
            {dataGrid.i}
        </motion.div>
    )
}
