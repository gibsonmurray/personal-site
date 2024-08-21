"use client"

import InlineLink from "../InlineLink"
import ImageLink from "../ImageLink"
import {
    ChevronLeftIcon,
    GithubIcon,
    LinkedinIcon,
    CodepenIcon,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

function ExpandedBubble(props: {
    color: string
    thumbnail: string
    title: string
    subtitle?: React.ReactNode | string
    links?: {
        text: string
        href: string
        className?: string
        newTab?: boolean
    }[]
}) {
    const [hoveringLink, setHoveringLink] = useState(false)

    return (
        <div
            className="flex items-center justify-center"
            style={{ backgroundColor: props.color }}
        >
            <motion.div
                className="container flex min-h-screen max-w-lg flex-col flex-wrap items-center justify-start gap-10 py-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex w-full items-center justify-between text-zinc-600">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-1"
                        onMouseEnter={() => setHoveringLink(true)}
                        onMouseLeave={() => setHoveringLink(false)}
                    >
                        <motion.div
                            animate={{
                                x: hoveringLink ? -3 : 0,
                            }}
                        >
                            <ChevronLeftIcon />
                        </motion.div>
                        <span className="font-semibold">Back</span>
                    </Link>

                    <div className="flex items-center justify-center gap-3">
                        <Link
                            href="https://github.com/gibsonmurray"
                            target="_blank"
                        >
                            <GithubIcon />
                        </Link>
                        <Link
                            href="https://codepen.io/gibsonmurray"
                            target="_blank"
                        >
                            <CodepenIcon />
                        </Link>
                        <Link
                            href="https://x.com/gibsonsmurray"
                            target="_blank"
                        >
                            <span className="text-3xl font-bold">𝕏</span>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/gibsonmurray/"
                            target="_blank"
                        >
                            <LinkedinIcon />
                        </Link>
                    </div>
                </div>

                <div className="flex w-full items-center justify-center">
                    <div className="relative aspect-square h-36 rounded-full">
                        <Image src={props.thumbnail} alt={props.title} fill />
                    </div>
                    <div className="flex h-full w-full flex-col flex-wrap items-start justify-center gap-2">
                        <span className="text-3xl font-bold text-zinc-800">
                            {props.title}
                        </span>
                        {props.subtitle}
                        <span className="flex w-full flex-wrap items-center justify-start gap-1 text-base font-medium text-zinc-300">
                            {props.links?.map((link, i) => {
                                const spacer = " | "
                                return (
                                    <>
                                        <InlineLink
                                            key={`${link.text}-${i}`}
                                            text={link.text}
                                            href={link.href}
                                            className={link.className}
                                            newTab={link.newTab}
                                        />
                                        {props.links &&
                                            i < props.links.length - 1 &&
                                            spacer}
                                    </>
                                )
                            })}
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ExpandedBubble
