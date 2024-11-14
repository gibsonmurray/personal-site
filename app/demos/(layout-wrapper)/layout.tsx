"use client"

import Logo from "@/components/Logo"
import SplitText from "@/components/SplitText"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ReactNode, FC, useState } from "react"

type DemoLayoutWrapperProps = {
    children: ReactNode
}

const DemoLayoutWrapper: FC<DemoLayoutWrapperProps> = ({ children }) => {
    const [hovering, setHovering] = useState(false)
    const router = useRouter()

    return (
        <div className="relative flex min-h-svh w-screen flex-col items-center justify-center">
            <motion.div
                className="group absolute top-10 flex cursor-pointer items-center justify-center gap-2"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => router.back()}
                layout="position"
            >
                <AnimatePresence>
                    <Logo
                        key="logo"
                        className="stroke-black/30 transition-colors duration-300 group-hover:stroke-black/100"
                    />
                    {hovering && (
                        <SplitText
                            key="back-text"
                            className="text-2xl font-semibold"
                        >
                            back
                        </SplitText>
                    )}
                </AnimatePresence>
            </motion.div>
            {children}
        </div>
    )
}

export default DemoLayoutWrapper
