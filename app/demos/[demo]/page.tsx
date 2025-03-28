"use client"

import Logo from "@/components/Logo"
import SplitText from "@/components/SplitText"
import { Toaster } from "@/components/ui/sonner"
import useNavigate from "@/hooks/useNavigate"
import { capitalize } from "lodash"
import { AnimatePresence, motion } from "motion/react"
import { Code2Icon } from "lucide-react"
import { usePathname, useParams } from "next/navigation"
import { useState } from "react"
import { demos } from "../list"

const DemoPage = () => {
    const { demo: demoId } = useParams<{ demo: string }>()
    const demo = demos.find((demo) => demo.href.includes(demoId))

    const { isNavigating, navigateTo } = useNavigate()
    const [hoveringBack, setHoveringBack] = useState(false)
    const [hoveringSourceCode, setHoveringSourceCode] = useState(false)

    const pathname = usePathname()
    const capitalizedPathname = pathname
        .split("/")
        .pop()
        ?.split("-")
        .map((word) => capitalize(word))
        .join("")

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
            <AnimatePresence>
                {!isNavigating && (
                    <motion.a
                        className="group absolute bottom-10 flex cursor-pointer items-center justify-center gap-2"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { delay: 1.5 },
                        }}
                        exit={{ y: 10, opacity: 0, transition: { delay: 0 } }}
                        transition={{ duration: 0.8 }}
                        onMouseEnter={() => setHoveringSourceCode(true)}
                        onMouseLeave={() => setHoveringSourceCode(false)}
                        href={`https://github.com/gibsonmurray/personal-site/tree/main/demos/${capitalizedPathname}`}
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
                )}
            </AnimatePresence>
            <AnimatePresence>
                {!isNavigating && (
                    <motion.div
                        key={demoId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1 } }}
                        exit={{ opacity: 0, transition: { delay: 0 } }}
                    >
                        {demo?.component}
                    </motion.div>
                )}
            </AnimatePresence>
            <Toaster richColors position="top-center" />
        </div>
    )
}

export default DemoPage
