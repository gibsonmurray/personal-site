"use client"

import InlineLink from "./InlineLink"
import { motion } from "framer-motion"
import { MouseEvent, ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import EmbededCodepen from "./EmbededCodepen"

function ExpandedBubble(props: {
    color: string
    title: string
    subtitle?: ReactNode | string
    skills?: {
        text: string
        href: string
        className?: string
        newTab?: boolean
    }[]
    content?: ReactNode | string
    penLink?: string
}) {
    const [backClicked, setBackClicked] = useState(false)
    const router = useRouter()

    const handleBackClicked = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setBackClicked(true)
        setTimeout(() => router.push("/"), 700)
    }

    const penHash = props.penLink?.split("/").pop()!

    return (
        <motion.div
            className={`center relative h-svh w-screen bg-[${props.color}]`}
            animate={{
                opacity: backClicked ? 0 : 1,
                transition: {
                    delay: 0.5,
                },
            }}
        >
            <motion.div className="flex h-full w-full flex-col flex-wrap items-center justify-start gap-10 p-5 md:px-0 md:py-10">
                {/* Title */}
                <motion.div className="center w-full flex-col gap-2">
                    <span className="text-3xl font-bold text-zinc-800 transition-[color] duration-500">
                        {props.title}
                    </span>
                    <span className="text-base font-medium text-zinc-600">
                        {props.subtitle}
                    </span>
                    <span className="center w-full flex-wrap gap-1 text-base font-medium text-zinc-600 transition-[color] duration-500">
                        {props.skills?.map((skill, i) => (
                            <span key={`${skill.text}-${i}`}>
                                <InlineLink
                                    text={skill.text}
                                    href={skill.href}
                                    className={skill.className}
                                    newTab={skill.newTab}
                                />
                                {props.skills &&
                                    i < props.skills.length - 1 && (
                                        <span>{" | "}</span>
                                    )}
                            </span>
                        ))}
                    </span>
                </motion.div>

                {/* Codepen Demo */}
                {props.title !== "About Me" && (
                    <EmbededCodepen penHash={penHash} penTitle={props.title} />
                )}
            </motion.div>
        </motion.div>
    )
}

export default ExpandedBubble
