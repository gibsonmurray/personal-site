"use client"

import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Link from "next/link"
import { container, children } from "./animations"
import useNavigate from "@/hooks/useNavigate"
import SplitText from "@/components/SplitText"
import Logo from "@/components/Logo"
import { ChevronLeftIcon } from "lucide-react"
import { backArrow } from "../demos/animations"
import { Separator } from "@/components/ui/separator"

const Content = () => {
    const { isNavigating, navigateTo } = useNavigate()

    return (
        <AnimatePresence>
            {!isNavigating && (
                <>
                    <div className="relative flex items-center justify-center gap-2">
                        <motion.button
                            initial={backArrow.initial}
                            animate={backArrow.animate}
                            exit={backArrow.exit}
                            className="absolute -left-24"
                            onClick={() => navigateTo("/")}
                        >
                            <ChevronLeftIcon className="h-5 w-5" />
                        </motion.button>
                        <div className="flex items-center justify-center gap-1">
                            <Logo className="w-8 stroke-black stroke-[14px]" />
                            <SplitText className="split-text text-3xl font-medium *:opacity-0">
                                ui
                            </SplitText>
                        </div>
                    </div>
                    <motion.div
                        variants={container}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="container flex flex-col items-center justify-center gap-4 px-12 text-xl font-semibold *:opacity-0 *:translate-y-3 sm:px-4"
                    >
                        <motion.h2
                            variants={children}
                            className="w-full font-bold"
                        >
                            about:
                        </motion.h2>

                        <motion.span
                            variants={children}
                            className="w-full text-lg"
                        >
                            these are some hand-built components that i&apos;ve
                            built over the years. feel free to use them as you
                            please!
                        </motion.span>

                        <motion.div variants={children} className="w-full">
                            <Separator />
                        </motion.div>

                        <motion.h2
                            variants={children}
                            className="w-full font-bold"
                        >
                            components:
                        </motion.h2>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Content
