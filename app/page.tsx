"use client"

import Header from "@/components/Header"
import Content from "@/components/Content"
import Footer from "@/components/Footer"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Home = () => {
    const router = useRouter()
    const [isNavigating, setIsNavigating] = useState(false)
    const handleNavigation = (href: string) => {
        setIsNavigating(true)
        // Wait for exit animation to complete before navigating
        setTimeout(() => {
            if (href.startsWith("http")) {
                window.open(href, "_blank", "noopener,noreferrer")
            } else {
                router.push(href)
            }
        }, 2000) // Match this with your exit animation duration
    }
    return (
        <main className="container mx-auto flex min-h-svh max-w-md flex-col items-center justify-between gap-10 py-10">
            <AnimatePresence>
                {!isNavigating && (
                    <>
                        <Header key="header" />
                        <Content
                            key="content"
                            handleNavigation={handleNavigation}
                        />
                        <Footer key="footer" />
                    </>
                )}
            </AnimatePresence>
        </main>
    )
}

export default Home
