import { useEffect, useState } from "react"
import Image from "next/image"
import olympicsSVG from "./assets/olympics.svg"
import { Progress } from "@/components/ui/progress"
import { AnimatePresence, motion } from "framer-motion"
import CountryCard from "./components/CountryCard"
import { atom, useAtom } from "jotai"
import { data } from "./data"

export const activeCntryIdxAtom = atom(0)
export const progressAtom = atom(0)

/**
 * Renders a component that displays Olympic medal data for different countries, with a progress bar and animated country cards.
 *
 * The component uses the `useAtom` hook from the `jotai` library to manage the state of the active country index and the progress value. The `useEffect` hook is used to update the progress value and the active country index at regular intervals.
 *
 * The component renders the Olympic rings image, the country cards, and the progress bars for each country. The country cards are rendered using the `AnimatePresence` component from the `framer-motion` library, which allows for smooth transitions when the active country changes.
 *
 * The component is exported as the default export of the file.
 */
function Day1() {
    const [activeCountryIdx, setActiveCountryIdx] = useAtom(activeCntryIdxAtom)
    const [progress, setProgress] = useAtom(progressAtom)

    // Update progress value at regular intervals
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev === 100 ? 0 : prev + 1))
        }, 50)

        if (progress === 100) {
            setActiveCountryIdx((prev) =>
                prev === data.length - 1 ? 0 : prev + 1,
            )
            setProgress(0)
        }

        return () => clearInterval(interval)
    }, [progress])

    return (
        <main className="center relative aspect-square h-[280px] flex-col gap-52 overflow-hidden rounded-[40px] border border-zinc-300 bg-zinc-200 font-bold tracking-widest">
            <Image
                src={olympicsSVG}
                alt="Olympic Rings"
                className="w-20 object-contain"
            />

            <AnimatePresence>
                {data.map(
                    (country) =>
                        activeCountryIdx === country.id && (
                            <CountryCard
                                key={country.id}
                                country={data[country.id]}
                            />
                        ),
                )}
            </AnimatePresence>

            <div className="center gap-2">
                {data.map((_, i) => {
                    return (
                        <motion.div
                            key={i}
                            animate={{ width: i === activeCountryIdx ? 30 : 8 }}
                            className="h-2 w-2"
                        >
                            <Progress
                                value={i === activeCountryIdx ? progress : 0}
                                className="bg-zinc-400/50"
                            />
                        </motion.div>
                    )
                })}
            </div>
        </main>
    )
}

export default Day1
