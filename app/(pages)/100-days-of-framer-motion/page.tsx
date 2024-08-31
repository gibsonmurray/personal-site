"use client"

import { motion } from "framer-motion"
import ThemeToggle from "@/app/(components)/ThemeToggle"
import { btnVisibleState } from "@/app/(components)/ThemeToggle"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { days } from "./days"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { themeState } from "@/app/(components)/ThemeToggle"

function FramerMotion100() {
    const [_, setBtnVisible] = useAtom(btnVisibleState)
    const [selectedDay, setSelectedDay] = useState(1)
    const [theme] = useAtom(themeState)

    const reorderedDays = days.toReversed()

    useEffect(() => {
        setBtnVisible(true)
    }, [])

    return (
        <div className="center h-screen w-screen">
            <motion.div
                className="absolute right-4 top-4 z-10 w-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <ThemeToggle />
            </motion.div>
            <motion.div
                className="absolute top-4 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
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
            {reorderedDays.map((day) => {
                if (day.id === selectedDay) {
                    return (
                        <motion.div
                            key={day.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex h-full w-full items-center justify-center"
                        >
                            {day.component}
                        </motion.div>
                    )
                }
            })}
        </div>
    )
}

export default FramerMotion100
