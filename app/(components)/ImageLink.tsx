import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

type ImageLinkProps = {
    idx: number
    href: string
    src: string
    alt: string
    rotations: number[]
}

function ImageLink({ idx, href, src, alt, rotations }: ImageLinkProps) {
    const uniqueClass = `card-img-${idx}`
    const [hovered, setHovered] = useState(false)

    const getMarginRight = (index: number) => {
        if (!hovered) return 0
        if (index < idx) return 50
        if (index > idx) return -50
        return 0
    }

    return (
        <motion.a
            className={`card-img ${uniqueClass} absolute overflow-hidden rounded-3xl scale-0`}
            href={href}
            target="_blank"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{
                scale: hovered ? 1.05 : 1,
                rotate: hovered ? 0 : rotations[idx],
                marginRight: getMarginRight(idx),
            }}
            transition={{
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275], // equivalent to elastic(0.8, 0.6)
            }}
        >
            <Image
                src={src}
                alt={alt}
                className="aspect-[4/3] h-44 rounded-3xl object-cover"
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl border-[5px] border-white/50 transition-all duration-300 hover:border-[8px]" />
        </motion.a>
    )
}

export default ImageLink
