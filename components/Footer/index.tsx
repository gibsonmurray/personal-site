"use client"

import { motion } from "framer-motion"
import { container, children } from "./animations"

const Footer = () => {
    return (
        <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="footer flex items-center justify-center gap-1 text-sm text-zinc-500 *:opacity-0 *:translate-x-3"
        >
            <motion.span variants={children}>made</motion.span>
            <motion.span variants={children}>in</motion.span>
            <motion.span variants={children}>the</motion.span>
            <motion.span variants={children}>usa</motion.span>
        </motion.div>
    )
}

export default Footer
