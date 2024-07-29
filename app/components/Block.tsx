"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef} from "react"

export default function Block(props: {
    highlightColor?: string
}) {
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

        document.querySelectorAll(".beam").forEach((el) => {
            el.classList.remove("hidden")
        })

        setTimeout(() => {
            document.querySelectorAll(".beam").forEach((el) => {
                el.classList.add("hidden")
            })
        }, 440)
    }

    return (
        <motion.div
            ref={blockRef}
            layout
            className="relative grid h-48 w-48 cursor-pointer place-items-center overflow-hidden rounded-3xl bg-zinc-50 shadow-lg shadow-black/5"
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ rotate: hoverDirection === "left" ? 5 : -5 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverDirection(null)}
        >
            <BorderBeam
                size={60}
                duration={1}
                borderWidth={2}
                colorFrom="rgba(0, 0, 0, 0)"
                colorTo={props.highlightColor || undefined}
                className="beam hidden"
            />
            <BorderBeam
                size={60}
                duration={1}
                borderWidth={2}
                colorFrom="rgba(0, 0, 0, 0)"
                colorTo={props.highlightColor || undefined}

                className="beam rotate-x-180 hidden rotate-90"
            />
            <Image
                src="/images/prof-pic.png"
                width={200}
                height={200}
                alt="image"
                className="cursor-events-none"
            />
        </motion.div>
    )
}
