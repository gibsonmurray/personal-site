import { motion, MotionProps } from "framer-motion"
import Image from "next/image"

type ImageLinkProps = {
    idx: number
    href: string
    src: string
    alt: string
    rotations: number[]
    hovering: number
    setHovering: (idx: number) => void
}

function ImageLink({
    idx,
    href,
    src,
    alt,
    rotations,
    hovering,
    setHovering,
}: ImageLinkProps) {

    const setMarginRight = () => {
        if (hovering === -1) return 0
        if (hovering < idx) return -50
        if (hovering > idx) return 50
        return 0
    }

    return (
        <motion.a
            className="absolute aspect-[4/3] h-52 overflow-hidden rounded-3xl"
            href={href}
            target="_blank"
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
                translateX: idx === 0 ? -150 : idx === 2 ? 150 : 0,
                rotate: rotations[idx],
            }}
        >
            <Image
                src={src}
                alt={alt}
                className="aspect-[4/3] h-44 rounded-3xl object-cover"
                fill
            />
            <div className="absolute left-0 top-0 h-full w-full rounded-3xl border-[5px] border-white/50 transition-all duration-300 hover:border-[8px]" />
        </motion.a>
    )
}

export default ImageLink
