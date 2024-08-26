"use client"
import { DarkModeSwitch } from "react-toggle-dark-mode"
import { atom, useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

// global theme state using jotai atoms
export const themeState = atomWithStorage<"light" | "dark">("theme", "light")
export const btnVisibleState = atom(true)

const ThemeToggle = (props: { className?: string }) => {
    const [isToggled, setToggle] = useAtom(themeState)
    const [isBtnVisible, _] = useAtom(btnVisibleState)

    const handleToggle = () => {
        setToggle((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <DarkModeSwitch
            checked={isToggled === "dark"}
            onChange={handleToggle}
            className={`transition ${isBtnVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} ${props.className}`}
            moonColor="rgb(212 212 216)" // text-zinc-300
            sunColor="rgb(82 82 91)" // text-zinc-600
        />
    )
}

export default ThemeToggle
