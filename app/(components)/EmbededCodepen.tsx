"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

function EmbededCodepen(props: { penHash: string; penTitle: string }) {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js"
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <motion.div
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl opacity-0 *:w-full md:rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <p
                data-height="350"
                data-theme-id="44795"
                data-zoom="0.5"
                data-default-tab="result"
                data-slug-hash={props.penHash}
                data-pen-title={props.penTitle}
                data-user="gibsonmurray"
                className="codepen box-border flex resize items-center justify-center"
            ></p>
            <div
                className={`pointer-events-none absolute left-0 top-0 h-full w-full rounded-2xl border-[6px] border-white/50 transition-all duration-300 md:rounded-3xl`}
            />
        </motion.div>
    )
}

export default EmbededCodepen
