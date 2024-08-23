"use client"

import InlineLink from "./InlineLink"
import ImageLink from "./ImageLink"
import {
    ChevronLeftIcon,
    GithubIcon,
    LinkedinIcon,
    CodepenIcon,
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MouseEvent, ReactNode, useMemo, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

function ExpandedBubble(props: {
    color: string
    thumbnail: string
    title: string
    subtitle?: ReactNode | string
    links?: {
        text: string
        href: string
        className?: string
        newTab?: boolean
    }[]
    imgs?: {
        href?: string
        src: string
        title: string
        className?: string
    }[]
    content?: ReactNode | string
    darkBorder?: boolean
    mainLink?: string
}) {
    const [hoveringLink, setHoveringLink] = useState(false)
    const [backClicked, setBackClicked] = useState(false)
    const router = useRouter()
    const [hoveringImg, setHoveringImg] = useState(-1)

    const handleBackClicked = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setBackClicked(true)
        setTimeout(() => router.push("/"), 700)
    }

    const rotations = useMemo(() => {
        return Array.from({ length: props.imgs!.length }).map(
            () => Math.random() * 20 - 10,
        )
    }, [])

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    }

    const imgVariants = {
        hidden: {
            scale: backClicked ? 1 : 0,
        },
        visible: {
            scale: 1,
        },
    }

    return (
        <motion.div
            className="relative flex h-svh w-screen flex-col items-center justify-start overflow-y-auto pb-16"
            style={{ backgroundColor: props.color }}
            animate={{
                opacity: backClicked ? 0 : 1,
                transition: {
                    delay: 0.5,
                },
            }}
        >
            <motion.div
                className="container flex max-w-lg flex-col flex-wrap items-center justify-start gap-10 p-5 md:px-0 md:py-10"
                initial="hidden"
                animate={backClicked ? "hidden" : "visible"}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div
                    className="flex w-full items-center justify-between text-zinc-600"
                    variants={childVariants}
                >
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-1"
                        onMouseEnter={() => setHoveringLink(true)}
                        onMouseLeave={() => setHoveringLink(false)}
                        onClick={handleBackClicked}
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
                </motion.div>
                {/* Image and Title */}
                <motion.div
                    variants={childVariants}
                    className="flex w-full flex-col items-center justify-center gap-4 md:flex-row"
                >
                    <Link
                        href={props.mainLink || "#"}
                        target={props.mainLink ? "_blank" : "_self"}
                        className="relative aspect-square h-36 rounded-full"
                    >
                        <Image
                            src={props.thumbnail}
                            alt={props.title}
                            fill
                            className="rounded-full object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                        />
                        <div
                            className={`absolute left-0 top-0 h-full w-full rounded-full border-4 ${props.darkBorder ? "border-zinc-300/60" : "border-white/50"}`}
                        />
                    </Link>
                    <div className="flex h-full w-full flex-col flex-wrap items-start justify-center gap-2">
                        <span className="w-full text-center text-3xl font-bold text-zinc-800 md:text-left">
                            {props.title}
                        </span>
                        <span className="w-full text-center md:text-left">
                            {props.subtitle}
                        </span>
                        <span className="flex w-full flex-wrap items-center justify-center gap-1 text-base font-medium text-zinc-300 md:justify-start">
                            {props.links?.map((link, i) => (
                                <span key={`${link.text}-${i}`}>
                                    <InlineLink
                                        text={link.text}
                                        href={link.href}
                                        className={link.className}
                                        newTab={link.newTab}
                                    />
                                    {props.links &&
                                        i < props.links.length - 1 && (
                                            <span>{" | "}</span>
                                        )}
                                </span>
                            ))}
                        </span>
                    </div>
                </motion.div>

                {/* Example Imgs/Links */}
                <motion.div
                    className="flex h-44 md:h-52 w-full items-center justify-center"
                    variants={containerVariants}
                >
                    {props.imgs?.map((imageData, idx) => (
                        <motion.div
                            key={idx}
                            variants={imgVariants}
                            className="relative flex items-center justify-center"
                        >
                            <ImageLink
                                idx={idx}
                                title={imageData.title}
                                src={imageData.src}
                                href={imageData.href}
                                alt={imageData.title}
                                rotations={rotations}
                                hovering={hoveringImg}
                                setHovering={setHoveringImg}
                                className={imageData.className}
                            />
                        </motion.div>
                    ))}
                </motion.div>
                {/* Content */}
                <motion.div className="w-full" variants={childVariants}>
                    {props.content}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default ExpandedBubble
