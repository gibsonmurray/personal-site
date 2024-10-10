"use client"

import { ScrollText, CodeXml } from "lucide-react"
import { animations } from "./animations"
import { FC, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"

const Nav: FC = () => {
    const scope = useRef<HTMLDivElement>(null)
    const homeBtn = useRef<HTMLButtonElement>(null)

    const { contextSafe } = useGSAP(
        () => {
            animations.enter()
        },
        { scope },
    )

    const [homeClicked, setHomeClicked] = useState(false)

    const handleHomeDown = contextSafe(() => {
        setHomeClicked(true)
        animations.homeDown(setHomeClicked)
    })

    const handleHomeEnter = contextSafe(() => {
        animations.homeHover(homeClicked)
    })

    const handleHomeLeave = contextSafe(() => {
        animations.homeRestore(homeClicked)
    })

    const handleHomeClick = contextSafe(() => {
        console.log("home")
    })

    const handleBlog = contextSafe(() => {
        console.log("blog")
    })

    const handleProjects = contextSafe(() => {
        console.log("projects")
    })

    return (
        <nav
            ref={scope}
            className="flex items-center justify-center fixed bottom-10 z-10"
        >
            <div
                id="nav"
                className="flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100/20 px-2 py-1 shadow-sm backdrop-blur-md opacity-0 *:transition-colors *:duration-300"
            >
                <button
                    title="Blog"
                    onClick={handleBlog}
                    className="flex aspect-square h-full items-center justify-center rounded-full hover:bg-zinc-400/30"
                >
                    <ScrollText color="#000" />
                </button>
                <button
                    id="home-btn"
                    title="Home"
                    ref={homeBtn}
                    onMouseDown={handleHomeDown}
                    onClick={handleHomeClick}
                    onMouseEnter={handleHomeEnter}
                    onMouseLeave={handleHomeLeave}
                    className="grid aspect-square h-full rotate-45 grid-cols-2 grid-rows-2 place-items-center rounded-full p-[9px] hover:bg-zinc-400/30"
                >
                    <div className="home-square aspect-square w-2 rounded-sm border-2 border-black"></div>
                    <div className="home-square aspect-square w-2 rounded-sm border-2 border-black"></div>
                    <div className="home-square aspect-square w-2 rounded-sm border-2 border-black"></div>
                    <div className="home-square aspect-square w-2 rounded-sm border-2 border-black"></div>
                </button>
                <button
                    title="Projects"
                    className="flex aspect-square h-full items-center justify-center rounded-full hover:bg-zinc-400/30"
                    onClick={handleProjects}
                >
                    <CodeXml color="#000" />
                </button>
            </div>
        </nav>
    )
}

export default Nav