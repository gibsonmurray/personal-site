import { useEffect, useState } from "react"
import Block from "./Block"
import { motion, useAnimation } from "framer-motion"

export default function LaunchScreen() {
    const controls = useAnimation()
    const [animateBeam, setAnimateBeam] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const animationSequence = [
            {
                scale: 1.2,
                filter: "blur(0px)",
                opacity: 1,
                transition: { duration: 0.3, delay: 0.3 },
            },
            {
                scale: 1.3,
                rotate: [0, 5, -5, 5, -5, 0],
                transition: {
                    duration: 0.4,
                },
            },
            {
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 1200,
                    damping: 30,
                    duration: 0.1,
                },
            },
        ]

        const runAnimation = async () => {
            for (const step of animationSequence) {
                await controls.start(step)
                setAnimateBeam(true)
                setTimeout(() => setHidden(true), 700)
            }
        }

        runAnimation()
    }, [controls])

    return (
        <motion.div
            style={{ display: hidden ? "none" : "fixed" }}
            className="fixed z-10 grid h-screen w-screen place-items-center bg-zinc-200"
        >
            <motion.div
                initial={{ scale: 0.5, filter: "blur(10px)", opacity: 0 }}
                animate={controls}
            >
                <Block
                    size="1x1"
                    thumbnail="/images/prof-pic.png"
                    playBeamAnimation={animateBeam}
                    className="relative"
                />
            </motion.div>
        </motion.div>
    )
}
