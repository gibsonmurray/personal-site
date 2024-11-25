import Waveform from "./Waveform"
import RotatingText from "./RotatingText"
import { FC, useEffect, useRef, useState } from "react"
import { Song } from "./songs"
import Image from "next/image"
import { motion, animate } from "framer-motion"
import { PanInfo } from "framer-motion"
import { useMotionValue, useTransform } from "framer-motion"
import { Lean } from "./index"
import { cn } from "@/lib/utils"

type SongWidgetProps = {
    song: Song
    orderedSongs: string[]
    previousOrderedSongs: string[]
    emitSwipe: (direction: Exclude<Lean, null>) => void
    leaning: Lean
    setLeaning: (leaning: Lean) => void
}

const SongWidget: FC<SongWidgetProps> = ({
    song,
    orderedSongs,
    previousOrderedSongs,
    emitSwipe,
    leaning,
    setLeaning,
}) => {
    const rank = orderedSongs.indexOf(song.id)
    const previousRank = previousOrderedSongs.indexOf(song.id)

    const ref = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)
    const [isLast, setIsLast] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [isDragging, setIsDragging] = useState(false)

    const dragOffset = useMotionValue(0)
    const dragRotation = useTransform(dragOffset, [-200, 200], [-5, 5])
    const affectedRotation = useMotionValue(0)

    const handleDrag = (_: unknown, info: PanInfo) => {
        setIsDragging(true)
        dragOffset.set(info.offset.x)
        if (info.offset.x > 100) {
            setLeaning("right")
        } else if (info.offset.x < -100) {
            setLeaning("left")
        }
    }

    const handleDragEnd = (_: unknown, info: PanInfo) => {
        setTimeout(() => {
            setIsDragging(false)
        }, 500)
        animate(dragOffset, 0, { type: "spring", stiffness: 300, damping: 30 })
        if (info.offset.x > 100) {
            emitSwipe("right")
        } else if (info.offset.x < -100) {
            emitSwipe("left")
        }
        setLeaning(null)
    }

    useEffect(() => {
        if (isLast && leaning === "right") {
            animate(affectedRotation, -5)
            animate(ref.current!, { x: -50 })
        }
        if (isNext && leaning === "left") {
            animate(affectedRotation, 5)
            animate(ref.current!, { x: 50 })
        }
        if (
            previousRank <= orderedSongs.length - 2 &&
            isActive &&
            !isDragging
        ) {
            animate(affectedRotation, 0)
            animate(ref.current!, { x: 0 })
        }
    }, [rank, previousRank, leaning, isLast, isActive, isDragging, isNext])

    useEffect(() => {
        setIsActive(rank === orderedSongs.length - 1)
        setIsNext(rank === orderedSongs.length - 2)
        setIsLast(rank === 0)
    }, [rank, orderedSongs.length])

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
                rotate: isDragging ? dragRotation : affectedRotation,
                zIndex: rank,
            }}
        >
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-zinc-300"></div>
            <Image
                src={song.image}
                alt={`${song.title} by ${song.artist}`}
                className={cn(
                    "pointer-events-none h-full w-full object-cover transition-opacity duration-150",
                    !isActive && "opacity-50",
                )}
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
