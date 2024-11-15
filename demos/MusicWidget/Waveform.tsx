import { motion, TargetAndTransition } from "framer-motion"
import { generateWaveformAnimations } from "./animations"
import { useEffect, useState } from "react"

const hoveringAnimation = {
    height: 2,
    opacity: 0,
}

const toPauseAnimation = {
    height: 11,
}

const Waveform = () => {
    const [isHovering, setIsHovering] = useState(false)
    const [paused, setPaused] = useState(false)

    const [animations, setAnimations] = useState<TargetAndTransition[]>([])

    useEffect(() => {
        if (!paused && !isHovering) {
            setAnimations(generateWaveformAnimations(6))
        }
    }, [paused, isHovering])

    return (
        <motion.button
            className="flex h-8 min-w-8 flex-1 items-center justify-center gap-[1.5px] overflow-hidden rounded-full bg-white"
            animate={isHovering || paused ? { gap: "3px" } : { gap: "1.5px" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => {
                if (paused) {
                    setIsHovering(false)
                }
                setPaused(!paused)
            }}
        >
            {animations.slice(0, 2).map((animation, index) => (
                <motion.div
                    key={index}
                    className="h-3 w-[2px] rounded-full bg-black"
                    animate={
                        isHovering || paused ? hoveringAnimation : animation
                    }
                ></motion.div>
            ))}
            <motion.div
                key={3}
                className="h-3 w-[2px] rounded-full bg-black"
                animate={
                    isHovering || paused ? toPauseAnimation : animations[2]
                }
            ></motion.div>
            <motion.div
                key={4}
                className="h-3 w-[2px] rounded-full bg-black"
                animate={
                    isHovering || paused ? toPauseAnimation : animations[3]
                }
            ></motion.div>
            {animations.slice(4, 6).map((animation, index) => (
                <motion.div
                    key={index}
                    className="h-3 w-[2px] rounded-full bg-black"
                    animate={
                        isHovering || paused ? hoveringAnimation : animation
                    }
                ></motion.div>
            ))}
        </motion.button>
    )
}

export default Waveform
