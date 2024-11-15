import { TargetAndTransition } from "framer-motion"

const transition: TargetAndTransition["transition"] = {
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    duration: 2,
}

export const waveformAnimations: TargetAndTransition[] = [
    {
        height: [12, 3, 10, 5, 8, 3],
        transition: transition,
    },
    {
        height: [3, 12, 5, 10, 3, 8],
        transition: {
            ...transition,
            duration: 2.2,
        },
    },
    {
        height: [10, 5, 12, 3, 8, 5],
        transition: {
            ...transition,
            duration: 2.5,
        },
    },
    {
        height: [7, 10, 12, 5, 8, 3],
        transition,
    },
    {
        height: [13, 3, 5, 10, 8, 11],
        transition: {
            ...transition,
            duration: 2.2,
        },
    },
    {
        height: [4, 8, 10, 4, 3, 9],
        transition: {
            ...transition,
            duration: 2.2,
        },
    },
]
