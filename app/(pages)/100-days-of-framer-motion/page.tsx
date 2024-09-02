"use client"

import { motion } from "framer-motion"
import ThemeToggle from "@/app/(components)/ThemeToggle"
import { btnVisibleState } from "@/app/(components)/ThemeToggle"
import { useAtom } from "jotai"
import { MouseEvent, useEffect, useState } from "react"
import { days } from "./days"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { themeState } from "@/app/(components)/ThemeToggle"
import { Caveat } from "next/font/google"
import { Undo2Icon } from "lucide-react"
import { useRouter } from "next/navigation"

const caveat = Caveat({ subsets: ["latin"] })

function FramerMotion100() {
    const [_, setBtnVisible] = useAtom(btnVisibleState)
    const [selectedDay, setSelectedDay] = useState(days.length)
    const [theme] = useAtom(themeState)
    const router = useRouter()
    const [backClicked, setBackClicked] = useState(false)

    const reorderedDays = days.toReversed()

    useEffect(() => {
        setBtnVisible(true)
    }, [])

    const handleBackClicked = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setBackClicked(true)
        setBtnVisible(false)
        setTimeout(() => router.push("/"), 700)
    }

    return (
        <motion.div
            animate={{ opacity: backClicked ? 0 : 1 }}
            className="center relative h-screen w-screen bg-zinc-100"
        >
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: backClicked ? 0 : 1 }}
                transition={{ duration: 0.5, delay: backClicked ? 0 : 0.5 }}
                onClick={handleBackClicked}
                className="center absolute left-4 top-4 z-10 cursor-pointer gap-2 text-zinc-400 transition-colors duration-200 hover:text-zinc-700"
            >
                <motion.div
                    initial={{ rotate: 90 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Undo2Icon className="h-4 w-4 stroke-[3px]" />
                </motion.div>
                <span className="font-semibold">Back</span>
            </motion.a>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: backClicked ? 0 : 1,
                    y: backClicked ? -20 : 0,
                }}
                transition={{ duration: 0.5, delay: backClicked ? 0 : 0.5 }}
                className="absolute top-4 z-10"
            >
                <Select
                    onValueChange={(value) => setSelectedDay(parseInt(value))}
                    defaultValue={selectedDay.toString()}
                >
                    <SelectTrigger
                        className={`transition-[background-color, border-color, width] w-max rounded-full border duration-500 ${theme === "light" ? "border-zinc-300 bg-zinc-50" : "border-zinc-500 bg-zinc-700 text-zinc-100"}`}
                    >
                        <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent
                        className={`rounded-2xl ${theme === "dark" && "border-zinc-500 bg-zinc-700"}`}
                    >
                        {reorderedDays.map((day) => (
                            <SelectItem
                                key={day.id}
                                value={day.id.toString()}
                                className={`cursor-pointer rounded-full ${theme === "dark" && "text-zinc-100 focus:bg-zinc-500 focus:text-zinc-100"}`}
                            >
                                Day {day.id} - {day.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </motion.div>
            <motion.div
                className="absolute right-4 top-4 z-10 w-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: backClicked ? 0 : 1 }}
                transition={{ duration: 0.5, delay: backClicked ? 0 : 0.5 }}
            >
                <ThemeToggle />
            </motion.div>
            {
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: backClicked ? 0 : 1,
                        y: backClicked ? 20 : 0,
                    }}
                    transition={{ duration: 0.5, delay: backClicked ? 0 : 0.8 }}
                    className="center h-screen w-screen"
                >
                    {
                        reorderedDays.find((day) => day.id === selectedDay)
                            ?.component
                    }
                </motion.div>
            }
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: backClicked ? 0 : 1 }}
                transition={{ duration: 0.5, delay: backClicked ? 0 : 0.8 }}
                className={`absolute bottom-4 right-4 ${theme === "light" ? "text-zinc-700/40" : "text-zinc-400/40"} ${caveat.className}`}
            >
                {reorderedDays.find((day) => day.id === selectedDay)?.date}
            </motion.span>
        </motion.div>
    )
}

export default FramerMotion100
