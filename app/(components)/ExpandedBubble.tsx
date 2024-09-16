"use client"

import { motion } from "framer-motion"
import { MouseEvent, ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import EmbededCodepen from "./EmbededCodepen"

function ExpandedBubble(props: {
    color: string
    title: string
    subtitle: ReactNode | string
    caption: ReactNode | string
    skills: {
        text: string
        href: string
        className?: string
        newTab?: boolean
    }[]
    penLink: string
    component: ReactNode | null
}) {
    // const [backClicked, setBackClicked] = useState(false)
    // const router = useRouter()

    // const handleBackClicked = (event: MouseEvent<HTMLAnchorElement>) => {
    //     event.preventDefault()
    //     setBackClicked(true)
    //     setTimeout(() => router.push("/"), 700)
    // }

    const penHash = props.penLink?.split("/").pop()!

    return (
        <motion.div
            className={`center relative h-svh w-screen`}
            style={{ backgroundColor: props.color }}
            animate={{
                // opacity: backClicked ? 0 : 1,
                transition: {
                    delay: 0.5,
                },
            }}
        >
            <motion.div className="flex h-full w-full flex-col flex-wrap items-center justify-start gap-10 p-5 md:px-0 md:py-10">
                {/* TODO: Navbar */}

                {/* Codepen Demo */}
                {props.title !== "About Me" && (
                    <EmbededCodepen penHash={penHash} penTitle={props.title} />
                )}
            </motion.div>
        </motion.div>
    )
}

export default ExpandedBubble
