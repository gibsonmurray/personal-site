"use client"

import { useTheme } from "@/hooks/Theme"
import { DarkModeSwitch } from "react-toggle-dark-mode"

const ThemeToggle = (props: { className?: string }) => {
    const { toggleTheme, btnVisible, isToggled, setToggle } = useTheme()

    const handleToggle = () => {
        setToggle(!isToggled)
        toggleTheme()
    }

    return (
        <DarkModeSwitch
            checked={isToggled}
            onChange={handleToggle}
            className={`transition ${btnVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} ${props.className}`}
            moonColor="rgb(212 212 216)" // text-zinc-300
            sunColor="rgb(82 82 91)" // text-zinc-600
        />
    )
}

export default ThemeToggle
