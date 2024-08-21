import Image from "next/image"
import React from "react"
import { AnimationControls, motion } from "framer-motion"

function Bubble(props: {
    link: string
    thumbnail: string
    color: string
    controls: AnimationControls
}) {
    const { link, thumbnail, color } = props
    return (
        <motion.a
            className={`bubble flex aspect-square h-[200px] w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-zinc-300/90 shadow-md shadow-zinc-400/5 bg-[${color}]`}
            href={link}
        >
            <Image
                className="object-cover"
                src={thumbnail}
                alt="thumbnail"
                width={200}
                height={200}
            />
        </motion.a>
    )
}

export default Bubble
