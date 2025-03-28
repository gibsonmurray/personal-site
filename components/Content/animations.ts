import { Variants } from "motion/react"

export const container: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 2,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.5,
        },
    },
}

export const children: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "backOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
    },
}
