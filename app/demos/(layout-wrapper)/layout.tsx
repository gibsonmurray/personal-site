"use client"

import Logo from "@/components/Logo"
import SplitText from "@/components/SplitText"
import useNavigate from "@/hooks/useNavigate"
import { AnimatePresence, motion } from "framer-motion"
import { Code2Icon } from "lucide-react"
import { ReactNode, FC, useState } from "react"

type DemoLayoutWrapperProps = {
    children: ReactNode
}

const DemoLayoutWrapper: FC<DemoLayoutWrapperProps> = ({ children }) => {
    const { isNavigating, navigateTo } = useNavigate()
    const [hoveringBack, setHoveringBack] = useState(false)
    const [hoveringSourceCode, setHoveringSourceCode] = useState(false)

    return (
        <div className="relative flex min-h-svh w-screen flex-col items-center justify-center">
            <motion.div
                className="group absolute top-10 flex cursor-pointer items-center justify-center gap-2"
                onMouseEnter={() => setHoveringBack(true)}
                onMouseLeave={() => setHoveringBack(false)}
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
                    {!isNavigating && hoveringBack && (
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
            <motion.a
                className="group absolute bottom-10 flex cursor-pointer items-center justify-center gap-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 1.5 } }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.8 }}
                onMouseEnter={() => setHoveringSourceCode(true)}
                onMouseLeave={() => setHoveringSourceCode(false)}
                href="https://github.com/gibsonmurray/personal-site"
                target="_blank"
                referrerPolicy="no-referrer"
            >
                <motion.div key="source-code-icon" layout="position">
                    <Code2Icon className="h-6 w-6 stroke-black/30 transition-colors duration-300 group-hover:stroke-black/100" />
                </motion.div>
                {!isNavigating && hoveringSourceCode && (
                    <SplitText
                        key="source-code-text"
                        className="font-medium text-black/30 underline transition-colors duration-300 group-hover:text-black/100"
                        delay={0}
                    >
                        code
                    </SplitText>
                )}
            </motion.a>
            <AnimatePresence>{!isNavigating && children}</AnimatePresence>
        </div>
    )
}

export default DemoLayoutWrapper
