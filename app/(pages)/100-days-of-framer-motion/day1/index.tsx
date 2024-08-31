import React from "react"
import { themeState } from "@/app/(components)/ThemeToggle"
import { useAtom } from "jotai"

function Day1() {
    const [theme] = useAtom(themeState)
    return (
        <div
            className={`transition-colors duration-500 ${theme === "light" ? "text-zinc-950" : "text-zinc-100"}`}
        >
            Coming soon...
        </div>
    )
}

export default Day1
