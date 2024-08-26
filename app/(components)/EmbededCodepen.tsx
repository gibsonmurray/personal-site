"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LoaderCircleIcon } from "lucide-react"
import { useAtom } from "jotai"

import { themeState } from "./ThemeToggle"

function EmbededCodepen(props: { penHash: string; penTitle: string }) {
    const [loaded, setLoaded] = useState(false)
    const [theme] = useAtom(themeState)

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js"
        script.async = true
        document.body.appendChild(script)

        setTimeout(() => setLoaded(true), 2000)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <>
            {!loaded && (
                <div className="flex h-full w-full items-center justify-center">
                    <motion.div
                        animate={{
                            rotate: [0, 360],
                            transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        <LoaderCircleIcon
                            className={`h-10 w-10 ${theme === "light" ? "text-black/30" : "text-white/30"}`}
                        />
                    </motion.div>
                </div>
            )}
            <motion.div
                className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl opacity-0 *:w-full md:rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
            >
                <p
                    data-height="350"
                    data-theme-id="44795"
                    data-zoom="0.5"
                    data-default-tab="result"
                    data-slug-hash={props.penHash}
                    data-pen-title={props.penTitle}
                    data-user="gibsonmurray"
                    className="codepen box-border flex items-center justify-center"
                ></p>
                <div
                    className={`pointer-events-none absolute left-0 top-0 h-full w-full rounded-2xl border-[6px] border-white/50 transition-all duration-300 md:rounded-3xl`}
                />
            </motion.div>
        </>
    )
}

export default EmbededCodepen
