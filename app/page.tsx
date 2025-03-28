"use client"

import Header from "@/components/Header"
import Content from "@/components/Content"
import Footer from "@/components/Footer"
import { AnimatePresence } from "motion/react"
import useNavigate from "@/hooks/useNavigate"

const Home = () => {
    const { isNavigating, navigateTo } = useNavigate()

    return (
        <main className="container mx-auto flex min-h-svh max-w-md flex-col items-center justify-between gap-10 py-10">
            <AnimatePresence>
                {!isNavigating && (
                    <>
                        <Header key="header" />
                        <Content key="content" navigateTo={navigateTo} />
                        <Footer key="footer" />
                    </>
                )}
            </AnimatePresence>
        </main>
    )
}

export default Home
