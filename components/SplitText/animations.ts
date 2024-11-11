import { Variants } from "framer-motion"

export const container: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.9,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.5,
            staggerDirection: -1,
        },
    },
}

export const childVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}
