import Image from "next/image"
import Cylinder from "./Cylinder"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function CountryCard(props: {
    country: any
    activeCountryIdx: number
}) {
    const { country, activeCountryIdx} = props

    const [fromX, setFromX] = useState(270)
    const [toX, setToX] = useState(-270)

    return (
        <motion.div
            drag="x"
            onDrag={() => {}}
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ x: fromX }}
            animate={{ x: 0 }}
            exit={{ x: toX }}
            transition={{ type: "spring", bounce: 0.35 }}
            className="center absolute flex-col translate-y-5"
        >
            <Image
                src={country.img}
                alt="USA Flag"
                className="absolute -top-4 w-14 rounded-lg border-4 border-zinc-100 bg-zinc-100 object-contain saturate-150 filter"
            />
            <div className="center h-36 w-56 flex-col justify-end overflow-hidden rounded-2xl bg-zinc-100 shadow-xl shadow-zinc-950/20">
                <div className="center items-end gap-1">
                    <Cylinder
                        medal="silver"
                        countryIdx={country.id}
                        height={country.silver * 1.1}
                    />
                    <Cylinder
                        medal="gold"
                        countryIdx={country.id}
                        height={country.gold * 1.1}
                    />
                    <Cylinder
                        medal="bronze"
                        countryIdx={country.id}
                        height={country.bronze * 1.1}
                    />
                </div>
                <div className="center h-8 w-full border-t-[0.5px] border-zinc-300 bg-zinc-200">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-extrabold text-zinc-400"
                    >
                        TOTAL: {country.gold + country.silver + country.bronze}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )
}

export default CountryCard
