"use client"

import { BorderBeam } from "@/components/magicui/border-beam"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"

export default function Block(props: {
    highlightColor?: string
    size?: "1x1" | "1x2" | "2x1" | "2x2"
}) {


    let height = "h-48"
    let width = "w-48"

    if (props.size === "1x1") {
        height = "h-48"
        width = "w-48"
    } else if (props.size === "1x2") {
        height = "h-48"
        width = "w-[404px]"
    } else if (props.size === "2x1") {
        height = "h-48"
        width = "w-[404px]"
    } else if (props.size === "2x2") {
        height = "h-[404px]"
        width = "w-[404px]"
    }


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

        blockRef.current!.querySelectorAll(".beam").forEach((el) => {
            el.classList.remove("hidden")
        })

        setTimeout(() => {
            blockRef.current!.querySelectorAll(".beam").forEach((el) => {
                el.classList.add("hidden")
            })
        }, 500)
    }

    return (
        <motion.div
            ref={blockRef}
            layout
            className={`relative border-2 border-zinc-200 grid cursor-pointer place-items-center overflow-hidden rounded-3xl bg-zinc-50 shadow-lg shadow-black/5 ${height} ${width}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: 0 }}
            whileHover={{ rotate: hoverDirection === "left" ? 5 : -5 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoverDirection(null)}
        >
            <BorderBeam
                size={props.size === "1x1" ? 200 : 300}
                duration={0.5}
                borderWidth={2}
                colorFrom={props.highlightColor || undefined}
                colorTo="rgba(0, 0, 0, 0)"
                className="beam hidden"
            />
            {/* <BorderBeam
                size={60}
                duration={1}
                borderWidth={2}
                colorFrom="rgba(0, 0, 0, 0)"
                colorTo={props.highlightColor || undefined}
                className="beam hidden rotate-90 rotate-x-180"
            /> */}
            {/* <Image
                src="/images/prof-pic.png"
                width={200}
                height={200}
                alt="image"
                className="cursor-events-none"
            /> */}
        </motion.div>
    )
}
