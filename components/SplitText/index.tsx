import { FC, ReactNode } from "react"
import { motion } from "framer-motion"
import { container, childVariants } from "./animations"

type SplitTextProps = {
    children: ReactNode
    className?: string
}

const SplitText: FC<SplitTextProps> = ({ children, className }) => {
    const letters = children?.toString().split("")

    return (
        <motion.span
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
        >
            {letters?.map((letter, index) => (
                <motion.span key={index} variants={childVariants}>
                    {letter}
                </motion.span>
            ))}
        </motion.span>
    )
}

export default SplitText
