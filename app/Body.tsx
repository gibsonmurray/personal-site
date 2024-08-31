"use client"

import { useAtom } from "jotai"
import { themeState } from "./(components)/ThemeToggle"
import { Figtree } from "next/font/google"
import { ReactNode } from "react"

const figtree = Figtree({ subsets: ["latin"] })

function Body(props: { children: ReactNode }) {
    const [theme] = useAtom(themeState)

    return (
        <body
            className={`${figtree.className} ${theme === "light" ? "bg-zinc-200" : "bg-zinc-900"} overflow-hidden transition-[background-color] duration-500`}
        >
            {props.children}
        </body>
    )
}

export default Body
