"use client"

import { motion } from "framer-motion"
import { MouseEvent, ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import EmbededCodepen from "./EmbededCodepen"
import { cn } from "@/lib/utils"

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
    penLink?: string
    component: ReactNode | null
    style?: React.CSSProperties
    className?: string
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
            {/* TODO: Navbar */}

            <motion.div
                className={cn(
                    "center absolute left-0 top-0 h-full w-full overflow-hidden",
                    props.penLink ? "*:w-full" : "",
                    props.className,
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                style={props.style}
            >
                {/* Codepen Demo */}
                {!props.component && props.penLink ? (
                    <EmbededCodepen penHash={penHash} penTitle={props.title} />
                ) : (
                    props.component
                )}
            </motion.div>
        </motion.div>
    )
}

export default ExpandedBubble
