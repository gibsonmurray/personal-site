"use client"

import Logo from "@/components/Logo"
import SplitText from "@/components/SplitText"
import useNavigate from "@/hooks/useNavigate"
import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, FC, useState } from "react"

type DemoLayoutWrapperProps = {
    children: ReactNode
}

const DemoLayoutWrapper: FC<DemoLayoutWrapperProps> = ({ children }) => {
    const { isNavigating, navigateTo } = useNavigate()
    const [hovering, setHovering] = useState(false)

    return (
        <div className="relative flex min-h-svh w-screen flex-col items-center justify-center">
            <motion.div
                className="group absolute top-10 flex cursor-pointer items-center justify-center gap-2"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => navigateTo("/demos")}
                layout="position"
            >
                <AnimatePresence>
                    {!isNavigating && (
                        <Logo
                            key="logo"
                            className="stroke-black/30 transition-colors duration-300 group-hover:stroke-black/100"
                        />
                    )}
                    {!isNavigating && hovering && (
                        <SplitText
                            key="back-text"
                            className="text-2xl font-semibold"
                            delay={0}
                        >
                            back
                        </SplitText>
                    )}
                </AnimatePresence>
            </motion.div>
            <AnimatePresence>{!isNavigating && children}</AnimatePresence>
        </div>
    )
}

export default DemoLayoutWrapper
