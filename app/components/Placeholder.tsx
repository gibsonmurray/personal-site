import { motion } from "framer-motion"

export default function Placeholder() {
    return (
        <motion.div
            className="absolute -z-10 hidden h-48 w-48 rounded-3xl bg-black/[0.4] shadow-inner shadow-black/5"
            layout
        ></motion.div>
    )
}
