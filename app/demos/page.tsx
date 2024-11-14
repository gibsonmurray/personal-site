"use client"

import { AnimatePresence, motion } from "framer-motion"
import { MedalIcon, ChevronLeftIcon } from "lucide-react"
import { backArrow } from "./animations"
import useNavigate from "@/hooks/useNavigate"
import SplitText from "@/components/SplitText"
import { container, children } from "./animations"
import TextRipple from "@/components/TextRipple"

const DemosPage = () => {
    const { isNavigating, navigateTo } = useNavigate()

    return (
        <main className="container flex min-h-svh max-w-md flex-col items-center justify-start gap-3 py-10">
            <div className="relative flex items-center justify-center gap-2">
                <AnimatePresence>
                    {!isNavigating && (
                        <>
                            <motion.button
                                initial={backArrow.initial}
                                animate={backArrow.animate}
                                exit={backArrow.exit}
                                className="absolute -left-24"
                                onClick={() => navigateTo("/")}
                            >
                                <ChevronLeftIcon className="h-5 w-5" />
                            </motion.button>

                            <SplitText className="text-2xl font-bold">
                                demos
                            </SplitText>
                        </>
                    )}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {!isNavigating && (
                    <motion.ul
                        variants={container}
                        className="mt-10 list-none p-0 *:p-0"
                    >
                        <motion.li
                            variants={children}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <button
                                onClick={() =>
                                    navigateTo("/demos/olympic-medals")
                                }
                                className="relative flex items-center justify-center gap-2 underline"
                            >
                                <TextRipple className="absolute -left-11 text-sm font-bold text-blue-500">
                                    NEW
                                </TextRipple>
                                <MedalIcon className="h-5 w-5" />
                                olympic medals
                            </button>
                        </motion.li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </main>
    )
}

export default DemosPage
