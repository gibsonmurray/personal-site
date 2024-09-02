import { useEffect, useState } from "react"
import Image from "next/image"
import olympicsSVG from "./assets/olympics.svg"
import { Progress } from "@/components/ui/progress"
import aus from "./assets/aus.png"
import chn from "./assets/chn.png"
import jpn from "./assets/jpn.png"
import usa from "./assets/usa.png"
import { AnimatePresence, motion } from "framer-motion"
import CountryCard from "./components/CountryCard"
import { atom, useAtom } from "jotai"

export const data = [
    {
        country: "USA",
        id: 0,
        gold: 40,
        silver: 44,
        bronze: 42,
        img: usa,
    },
    {
        country: "China",
        id: 1,
        gold: 40,
        silver: 27,
        bronze: 24,
        img: chn,
    },
    {
        country: "Japan",
        id: 2,
        gold: 20,
        silver: 12,
        bronze: 13,
        img: jpn,
    },
    {
        country: "Austrailia",
        id: 3,
        gold: 18,
        silver: 19,
        bronze: 16,
        img: aus,
    },
]

export const activeCntryIdxAtom = atom(0)
export const progressAtom = atom(0)

function Day1() {
    const [activeCountryIdx, setActiveCountryIdx] = useAtom(activeCntryIdxAtom)
    const [progress, setProgress] = useAtom(progressAtom)

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
