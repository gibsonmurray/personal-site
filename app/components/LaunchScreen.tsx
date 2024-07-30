import { useEffect, useState } from "react"
import Block from "./Block"
import { motion, useAnimation } from "framer-motion"

export default function LaunchScreen() {
    const controls = useAnimation()
    const [animateBeam, setAnimateBeam] = useState(false)
    const [hidden, setHidden] = useState(false)

    const animationTiming = [
        { duration: 0.3, delay: 0.3 },
        { duration: 0.5, delay: 0 },
        { duration: 0.1, delay: 0 },
    ]

    useEffect(() => {
        

        const totalDuration =
            animationTiming.reduce((acc, curr) => acc + curr.duration, 0) * 1000

        const animationSequence = [
            {
                scale: 1.2,
                filter: "blur(0px)",
                opacity: 1,
                transition: {
                    duration: animationTiming[0].duration,
                    delay: animationTiming[0].delay,
                },
            },
            {
                scale: 1.3,
                rotateY: -360,
                rotate: 0,
                transition: {
                    duration: animationTiming[1].duration,
                    delay: animationTiming[1].delay,
                },
            },
            {
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 1200,
                    damping: 30,
                    duration: animationTiming[2].duration,
                    delay: animationTiming[2].delay,
                },
            },
        ]

        const runAnimation = async () => {
            for (const step of animationSequence) {
                await controls.start(step)
                setAnimateBeam(true)
                setTimeout(() => setHidden(true), totalDuration)
            }
        }

        runAnimation()
    }, [controls])

    return (
        <motion.div
            style={{ display: hidden ? "none" : "fixed" }}
            className="fixed z-10 grid h-screen w-screen place-items-center bg-zinc-200 perspective-500"
        >
            <motion.div
                initial={{
                    scale: 0.5,
                    filter: "blur(10px)",
                    opacity: 0,
                    rotate: 5,
                }}
                animate={controls}
            >
                <Block
                    size="1x1"
                    thumbnail="/images/prof-pic.png"
                    playBeamAnimation={animateBeam}
                    beamDuration={animationTiming[1].duration * 1000}
                />
            </motion.div>
        </motion.div>
    )
}
