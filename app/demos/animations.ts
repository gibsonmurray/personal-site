import { Variants } from "framer-motion"

export const container: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 4,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
        },
    },
}

export const children: Variants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "backOut",
            delay: 1.5,
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        transition: {
            duration: 1,
        },
    },
}

export const backArrow = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.5 } },
}
