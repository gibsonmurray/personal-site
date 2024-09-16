"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

function EmbededCodepen(props: { penHash: string; penTitle: string }) {
    const { penHash, penTitle } = props

    const [resizeTimeout, setResizeTimeout] = useState<NodeJS.Timeout | null>(
        null,
    )

    // Load the codepen script
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    // Resize the codepen
    useEffect(() => {
        const handleResize = () => {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout)
            }
            setResizeTimeout(setTimeout(() => window.location.reload(), 200))
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            if (resizeTimeout) {
                clearTimeout(resizeTimeout)
            }
        }
    }, [resizeTimeout])

    return (
        <motion.div
            className="center absolute left-0 top-0 h-svh w-screen overflow-hidden *:w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
        >
            <p
                data-height={window.innerHeight}
                data-theme-id="44795"
                data-zoom={window.innerWidth < 768 ? 0.5 : 1}
                data-default-tab="result"
                data-slug-hash={penHash}
                data-pen-title={penTitle}
                data-user="gibsonmurray"
                className="codepen center box-border w-full"
            ></p>
        </motion.div>
    )
}

export default EmbededCodepen
