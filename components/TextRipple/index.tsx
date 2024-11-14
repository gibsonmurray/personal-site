"use client"

import { cn } from "@/utils"
import { motion, stagger, useAnimate } from "framer-motion"
import { FC, ReactNode, useEffect } from "react"

type TextRippleProps = {
    children: ReactNode
    className?: string
}

const TextRipple: FC<TextRippleProps> = ({ children, className }) => {
    const text = children?.toString() || ""
    const characters = Array.from(text)

    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(
            ".char",
            {
                y: [1, -4, 1],
            },
            {
                delay: stagger(0.07, { startDelay: 2.7 }),
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "linear",
            },
        )
    }, [animate])

    return (
        <motion.div className={cn(className)} ref={scope}>
            {characters.map((char, index) => (
                <span className="char inline-block tracking-wide" key={index}>
                    {char}
                </span>
            ))}
        </motion.div>
    )
}

export default TextRipple
