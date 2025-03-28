"use client"

import Waveform from "./Waveform"
import RotatingText from "./RotatingText"
import { FC, RefObject, useEffect, useRef, useState } from "react"
import { Song } from "./songs"
import Image from "next/image"
import { motion, animate } from "motion/react"
import { PanInfo } from "motion/react"
import { useMotionValue, useTransform } from "motion/react"
import { Lean } from "./index"
import { cn } from "@/lib/utils"

type SongWidgetProps = {
    song: Song
    orderedSongs: string[]
    previousOrderedSongs: string[]
    emitSwipe: (direction: Exclude<Lean, null>) => void
    leaning: Lean
    setLeaning: (leaning: Lean) => void
    volume: number
    muted: boolean
}

const SongWidget: FC<SongWidgetProps> = ({
    song,
    orderedSongs,
    previousOrderedSongs,
    emitSwipe,
    leaning,
    setLeaning,
    volume,
    muted,
}) => {
    const rank = orderedSongs.indexOf(song.id)
    const previousRank = previousOrderedSongs.indexOf(song.id)

    const ref = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)
    const [isLast, setIsLast] = useState(false)
    const [isNext, setIsNext] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const [paused, setPaused] = useState(false)

    const dragOffset = useMotionValue(0)
    const dragRotation = useTransform(dragOffset, [-200, 200], [-5, 5])
    const affectedRotation = useMotionValue(0)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handleDrag = (_: unknown, info: PanInfo) => {
        setIsDragging(true)
        dragOffset.set(info.offset.x)
        if (info.offset.x > 100) {
            setLeaning("right")
        } else if (info.offset.x < -100) {
            setLeaning("left")
        } else {
            setLeaning(null)
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
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.muted = muted
    }, [muted])

    useEffect(() => {
        if (!audioRef.current) return

        if (isActive) {
            audioRef.current.play().catch((error) => {
                if (error.name === "NotAllowedError") {
                    setPaused(true)
                    console.log(
                        "Audio autoplay blocked - waiting for user interaction",
                    )
                } else {
                    console.error("Audio playback error:", error)
                }
            })
        } else {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
            }
        }
    }, [isActive, song])

    useEffect(() => {
        if (isLast && leaning === "right") {
            animate(affectedRotation, -5)
            animate(ref.current!, { x: -50 })
        }
        if (isNext && leaning === "left") {
            animate(affectedRotation, 5)
            animate(ref.current!, { x: 50 })
        }
        if (!isDragging && leaning === null) {
            animate(affectedRotation, 0)
            animate(ref.current!, { x: 0 })
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
            className="absolute flex size-48 cursor-grab items-center justify-center overflow-hidden rounded-[42px] active:cursor-grabbing"
            drag="x"
            dragMomentum
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            style={{
                rotate: isDragging ? dragRotation : affectedRotation,
                zIndex: rank,
            }}
        >
            <div className="absolute top-0 left-0 -z-10 h-full w-full bg-zinc-300"></div>
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
                <Waveform
                    active={isActive}
                    audioRef={audioRef as RefObject<HTMLAudioElement>}
                    paused={paused}
                    setPaused={setPaused}
                />
                <div className="relative flex w-full -translate-x-2 flex-col items-start justify-center pr-5">
                    <RotatingText text={song.title} />
                    <RotatingText
                        text={song.artist}
                        className="w-full truncate text-xs font-normal text-zinc-300"
                    />
                </div>
            </div>
            <audio
                ref={audioRef}
                className="hidden"
                src={`/api/audio?id=${song.id}`}
                muted={muted}
                loop
            />
        </motion.div>
    )
}

export default SongWidget
