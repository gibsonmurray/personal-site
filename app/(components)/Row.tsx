import { easeInOut, motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

function Row(props: { children: React.ReactNode }) {
    const { children } = props

    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6, 0.8, 1],
        [-90, -50, -10, 10, 50, 150],
        {
            ease: easeInOut,
        },
    )

    return (
        <motion.div
            ref={ref}
            style={{ y, scrollSnapAlign: "center" }}
            className="center relative min-h-[100px] gap-1 md:gap-4"
        >
            {children}
        </motion.div>
    )
}

export default Row
