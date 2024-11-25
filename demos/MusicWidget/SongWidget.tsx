import Waveform from "./Waveform"
import RotatingText from "./RotatingText"
import { FC, useEffect, useRef, useState } from "react"
import { Song } from "./songs"
import Image from "next/image"
import { motion, animate } from "framer-motion"
import { PanInfo } from "framer-motion"
import { useMotionValue, useTransform } from "framer-motion"
import { Lean } from "./index"

type SongWidgetProps = {
    song: Song
    rank: number
    emitSwipe: (direction: Exclude<Lean, null>) => void
    leaning: Lean
    setLeaning: (leaning: Lean) => void
}

const SongWidget: FC<SongWidgetProps> = ({
    song,
    rank,
    emitSwipe,
    leaning,
    setLeaning,
}) => {
    const isActive = rank === 0
    const isNext = rank === 1
    const isLast = rank === 2

    console.log(isLast, isNext, isActive)

    const ref = useRef<HTMLDivElement>(null)

    const [previousRank, setPreviousRank] = useState(rank)

    const dragOffset = useMotionValue(0)
    const dragRotation = useTransform(dragOffset, [-200, 200], [-5, 5])

    const rotation = useMotionValue(0)
    const x = useMotionValue(0)

    const handleDrag = (_: unknown, info: PanInfo) => {
        dragOffset.set(info.offset.x)
        if (info.offset.x > 100) {
            setLeaning("left")
        } else if (info.offset.x < -100) {
            setLeaning("right")
        }
    }

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        animate(dragOffset, 0, { type: "spring", stiffness: 300, damping: 30 })
        if (info.offset.x > 100) {
            emitSwipe("left")
        } else if (info.offset.x < -100) {
            emitSwipe("right")
        }
        setLeaning(null)
    }

    useEffect(() => {
        if (previousRank !== rank) {
            setPreviousRank(rank)
        }
        if (previousRank === 0 && rank > 1 && ref.current) {
            animate(ref.current, { rotate: [0, -10, 0], x: [0, -30, 0] })
        }
    }, [rank, previousRank])

    useEffect(() => {
        if (leaning === "left" && isNext && ref.current) {
            rotation.set(10)
            x.set(-30)
        } else if (leaning === "right" && isLast && ref.current) {
            rotation.set(-10)
            x.set(30)
        } else {
            rotation.set(0)
            x.set(0)
        }
    }, [leaning, isActive, isNext, isLast])

    return (
        <motion.div
            ref={ref}
            className="absolute flex aspect-square h-48 cursor-grab items-center justify-center overflow-hidden rounded-[42px] active:cursor-grabbing"
            drag="x"
            dragMomentum
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            style={{
                rotate: isActive ? dragRotation : 0,
                zIndex: rank,
            }}
            animate={{
                rotate: rotation.get(),
                x: x.get(),
            }}
        >
            <Image
                src={song.image}
                alt={`${song.title} by ${song.artist}`}
                className="pointer-events-none h-full w-full object-cover"
                width={300}
                height={300}
            />
            <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-start gap-2 p-4">
                <Waveform />
                <div className="relative flex w-full flex-col items-start justify-center pr-5 -translate-x-2">
                    <RotatingText text={song.title} />
                    <RotatingText
                        text={song.artist}
                        className="w-full truncate text-xs font-normal text-zinc-300"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default SongWidget
