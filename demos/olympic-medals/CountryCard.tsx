"use client"

import Cylinder from "./Cylinder"
import { motion } from "motion/react"
import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CountryCard(props: { country: any; activeCountryIdx: number }) {
    return (
        <div className="relative flex translate-y-5 cursor-grab flex-col items-center justify-center active:cursor-grabbing">
            <Image
                src={props.country.img}
                alt="Country Flag"
                className="absolute -top-4 w-14 rounded-lg border-4 border-zinc-100 bg-zinc-100 object-contain saturate-150 filter"
            />
            <div className="flex h-36 w-56 flex-col items-center justify-end overflow-hidden rounded-2xl bg-zinc-100 shadow-xl shadow-zinc-950/20">
                <div className="flex items-end justify-center gap-1">
                    <Cylinder
                        medal="silver"
                        countryIdx={props.country.id}
                        height={props.country.silver * 1.4}
                        active={props.activeCountryIdx === props.country.id}
                    />
                    <Cylinder
                        medal="gold"
                        countryIdx={props.country.id}
                        height={props.country.gold * 1.4}
                        active={props.activeCountryIdx === props.country.id}
                    />
                    <Cylinder
                        medal="bronze"
                        countryIdx={props.country.id}
                        height={props.country.bronze * 1.4}
                        active={props.activeCountryIdx === props.country.id}
                    />
                </div>
                <div className="flex h-8 w-full items-center justify-center border-t-[0.5px] border-zinc-300 bg-zinc-200">
                    <motion.span
                        animate={{
                            opacity:
                                props.activeCountryIdx === props.country.id
                                    ? 1
                                    : 0,
                        }}
                        transition={{ delay: 0.2 }}
                        className="text-sm font-extrabold text-zinc-400"
                    >
                        TOTAL:{" "}
                        {props.country.gold +
                            props.country.silver +
                            props.country.bronze}
                    </motion.span>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
