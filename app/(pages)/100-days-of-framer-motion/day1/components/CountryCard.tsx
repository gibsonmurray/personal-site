import Image from "next/image"
import Cylinder from "./Cylinder"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { activeCntryIdxAtom, progressAtom } from "../index"
import { useAtom } from "jotai"

/**
 * Renders a country card component with a draggable interface to navigate between countries.
 * The card displays the medal counts for a given country, and updates the active country index and progress state accordingly.
 *
 * @param props - An object containing the `country` prop, which is the data for the current country being displayed.
 * @returns A React component that renders the country card.
 */
function CountryCard(props: { country: any }) {
    const [activeCountryIdxAtom, setActiveCountryIdx] =
        useAtom(activeCntryIdxAtom)
    const [_, setProgress] = useAtom(progressAtom)

    const [fromX, setFromX] = useState(270)
    const [toX, setToX] = useState(-270)

    // Update the card animation direction based on the active country index and swipe direction
    useEffect(() => {
        if (activeCountryIdxAtom <= props.country.id) {
            setFromX(-270)
            setToX(270)
        } else {
            setFromX(270)
            setToX(-270)
        }
    }, [activeCountryIdxAtom])

    return (
        <motion.div
            drag="x"
            onDragEnd={(_, info) => {
                // swipe to right -> prev country
                if (info.offset.x > 0) {
                    if (activeCountryIdxAtom > 0) {
                        setActiveCountryIdx((prev) => prev - 1)
                        setProgress(0)
                    }
                }
                // swipe to left -> next country
                if (info.offset.x < 0) {
                    if (activeCountryIdxAtom < 3) {
                        setActiveCountryIdx((prev) => prev + 1)
                        setProgress(0)
                    }
                }
            }}
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ x: fromX }}
            animate={{ x: 0 }}
            exit={{ x: toX }}
            transition={{ type: "spring", bounce: 0.35 }}
            className="center absolute flex-col translate-y-5"
        >
            <Image
                src={props.country.img}
                alt="USA Flag"
                className="absolute -top-4 w-14 rounded-lg border-4 border-zinc-100 bg-zinc-100 object-contain saturate-150 filter"
            />
            <div className="center h-36 w-56 flex-col justify-end overflow-hidden rounded-2xl bg-zinc-100 shadow-xl shadow-zinc-950/20">
                <div className="center items-end gap-1">
                    <Cylinder
                        medal="silver"
                        countryIdx={props.country.id}
                        height={props.country.silver * 1.1}
                    />
                    <Cylinder
                        medal="gold"
                        countryIdx={props.country.id}
                        height={props.country.gold * 1.1}
                    />
                    <Cylinder
                        medal="bronze"
                        countryIdx={props.country.id}
                        height={props.country.bronze * 1.1}
                    />
                </div>
                <div className="center h-8 w-full border-t-[0.5px] border-zinc-300 bg-zinc-200">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-extrabold text-zinc-400"
                    >
                        TOTAL:{" "}
                        {props.country.gold +
                            props.country.silver +
                            props.country.bronze}
                    </motion.span>
                </div>
            </div>
        </motion.div>
    )
}

export default CountryCard
