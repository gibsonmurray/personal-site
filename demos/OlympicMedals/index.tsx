"use client"

import { useEffect, useState } from "react"
import olympicsSVG from "./assets/olympics.svg"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import CountryCard from "./CountryCard"
import { data } from "./data"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"

function OlympicMedals() {
    const [activeCountryIdx, setActiveCountryIdx] = useState(0)
    const [progress, setProgress] = useState(0)
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }

        const interval = setInterval(() => {
            setProgress((prev) => (prev === 100 ? 0 : prev + 1))
        }, 50)

        if (progress === 100) {
            setActiveCountryIdx((prev) =>
                prev === data.length - 1 ? 0 : prev + 1,
            )
            setProgress(0)
            api.scrollNext()
        }

        api.on("select", () => {
            setActiveCountryIdx(api.selectedScrollSnap())
            setProgress(0)
        })

        return () => clearInterval(interval)
    }, [progress, api])

    return (
        <motion.main className="relative flex aspect-square h-[280px] select-none flex-col items-center justify-center gap-52 overflow-hidden rounded-[40px] border border-zinc-300 bg-zinc-200 font-bold tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
        >
            <Image
                src={olympicsSVG}
                alt="Olympic Rings"
                className="w-20 object-contain"
            />

            <Carousel
                setApi={setApi}
                className="absolute *:overflow-visible"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {data.map((country, i) => (
                        <CarouselItem key={i} className="w-20">
                            <CountryCard
                                country={country}
                                activeCountryIdx={activeCountryIdx}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex items-center justify-center gap-2">
                {data.map((_, i) => {
                    return (
                        <motion.div
                            key={i}
                            animate={{
                                width: i === activeCountryIdx ? 30 : 8,
                            }}
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
        </motion.main>
    )
}

export default OlympicMedals