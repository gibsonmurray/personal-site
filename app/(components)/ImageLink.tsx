import { motion } from "framer-motion"
import { CircleArrowUpIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

type ImageLinkProps = {
    idx: number
    href?: string
    src: string
    alt: string
    rotations: number[]
    hovering: number
    setHovering: (idx: number) => void
    title: string
    className?: string
}

function ImageLink({
    idx,
    href,
    src,
    alt,
    rotations,
    hovering,
    setHovering,
    title,
    className,
}: ImageLinkProps) {
    const [screenWidth, setScreenWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        }
        return 0
    })

    const setMarginRight = () => {
        if (hovering === -1) return 0
        if (hovering < idx) return -50
        if (hovering > idx) return 50
        return 0
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    return (
        <motion.a
            title={title}
            className="absolute aspect-[4/3] h-32 overflow-hidden rounded-2xl md:h-52 md:rounded-3xl"
            href={href || "#"}
            target={href ? "_blank" : "_self"}
            onMouseEnter={() => setHovering(idx)}
            onMouseLeave={() => setHovering(-1)}
            whileHover={{
                scale: 1.05,
                rotate: 0,
            }}
            animate={{
                marginRight: setMarginRight(),
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                mass: 0.8,
                bounce: 0.6,
            }}
            style={{
                translateX:
                    rotations.length > 2
                        ? screenWidth < 768
                            ? idx === 0
                                ? -80
                                : idx === 2
                                  ? 80
                                  : 0
                            : idx === 0
                              ? -150
                              : idx === 2
                                ? 150
                                : 0
                        : rotations.length > 1
                          ? screenWidth < 768
                              ? idx === 0
                                  ? -50
                                  : 50
                              : idx === 0
                                ? -100
                                : 100
                          : 0,
                translateY:
                    screenWidth < 768
                        ? idx === 0
                            ? -50
                            : idx === 1 && rotations.length < 3
                              ? 20
                              : idx === 2
                                ? 50
                                : 0
                        : 0,
                rotate: rotations[idx],
            }}
        >
            <Image
                src={src}
                alt={alt}
                className="aspect-[4/3] h-44 rounded-2xl object-cover md:rounded-3xl"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
            <CircleArrowUpIcon
                className={`absolute right-2 top-2 h-5 stroke-[3px] text-white/50 rotate-45 md:right-4 md:top-4 md:h-6 ${className}`}
            />
            <div
                className={`absolute left-0 top-0 h-full w-full rounded-2xl border-4 border-white/50 transition-all duration-300 md:rounded-3xl ${className}`}
            />
        </motion.a>
    )
}

export default ImageLink
