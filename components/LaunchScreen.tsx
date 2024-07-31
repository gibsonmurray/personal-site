import { useEffect, useState } from "react"
import Block from "./Block"
import { motion, useAnimation } from "framer-motion"

export default function LaunchScreen(props: {
    setLaunching: (value: boolean) => void
    setDoneLaunch: (value: boolean) => void
}) {
    const controls = useAnimation()
    const [animateBeam, setAnimateBeam] = useState(false)

    const animationTiming = [
        { duration: 0.3, delay: 0.3 },
        { duration: 0.5, delay: 0 },
        { duration: 0.7, delay: 0 },
        { duration: 0.1, delay: 0 },
    ]

    useEffect(() => {
        const totalDuration =
            animationTiming.reduce(
                (acc, curr) => acc + curr.duration + curr.delay,
                0,
            ) * 1000

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
                scale: 1.35,
                rotateY: -360,
                rotate: 0,
                transition: {
                    duration: animationTiming[1].duration,
                    delay: animationTiming[1].delay,
                },
            },
            {
                scale: 1.4,
                transition: {
                    duration: animationTiming[2].duration,
                    delay: animationTiming[2].delay,
                },
            },
            {
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 1000,
                    damping: 20,
                    duration: animationTiming[3].duration,
                    delay: animationTiming[3].delay,
                },
            },
        ]

        const runAnimation = async () => {
            for (const step of animationSequence) {
                await controls.start(step)
                setTimeout(() => setAnimateBeam(true), 600)
                setTimeout(() => props.setLaunching(false), totalDuration - 400)
                setTimeout(() => props.setDoneLaunch(true), totalDuration + 200)
            }
        }

        runAnimation()
    }, [controls])

    return (
        <motion.div className="fixed grid h-screen w-screen place-items-center perspective-500">
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
                    thumbnail="/images/prof-pic.svg"
                    playBeamAnimation={animateBeam}
                    beamDuration={animationTiming[1].duration * 1000}
                    className="pointer-events-none z-10"
                    whileHover={undefined}
                />
            </motion.div>
        </motion.div>
    )
}
