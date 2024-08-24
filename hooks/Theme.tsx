"use client"

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react"

type Theme = "light" | "dark"

interface ThemeContextProps {
    theme: Theme
    toggleTheme: () => void
    btnVisible: boolean
    setBtnVisible: (visible: boolean) => void
    isToggled: boolean
    setToggle: (toggled: boolean) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light")
    const [btnVisible, setBtnVisible] = useState(true)
    const [isToggled, setToggle] = useState(theme === "dark")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme
        document.querySelector("body")!.style.backgroundColor = storedTheme === "dark" ? "rgb(24 24 27)" : "rgb(228 228 231)"
        if (storedTheme) {
            setTheme(storedTheme)
            setToggle(storedTheme === "dark")
            document.documentElement.setAttribute("data-theme", storedTheme)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        document.documentElement.setAttribute("data-theme", newTheme)
        localStorage.setItem("theme", newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, btnVisible, setBtnVisible, isToggled, setToggle }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
