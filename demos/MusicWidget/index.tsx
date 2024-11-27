"use client"

import { useState } from "react"
import { songs } from "./songs"
import SongWidget from "./SongWidget"
import VolumeBar from "./VolumeBar"
import { motion } from "framer-motion"

export type Lean = "left" | "right" | null

const MusicWidget = () => {
    const [orderedSongs, setOrderedSongs] = useState<string[]>(
        Array.from({ length: songs.length }, (_, index) => songs[index].id),
    )
    const [previousOrderedSongs, setPreviousOrderedSongs] =
        useState<string[]>(orderedSongs)

    const [leaning, setLeaning] = useState<Lean>(null)
    const [volume, setVolume] = useState(0.5)
    const [muted, setMuted] = useState(true)

    const emitSwipe = (direction: Exclude<Lean, null>) => {
        setPreviousOrderedSongs(orderedSongs)
        if (direction === "right") {
            setOrderedSongs((prev) => [...prev.slice(1), prev[0]])
        } else {
            setOrderedSongs((prev) => [
                prev[prev.length - 1],
                ...prev.slice(0, -1),
            ])
        }
    }

    return (
        <motion.div
            className="relative flex items-center justify-center -translate-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
        >
            {songs.map((song) => (
                <SongWidget
                    key={song.id}
                    song={song}
                    previousOrderedSongs={previousOrderedSongs}
                    orderedSongs={orderedSongs}
                    emitSwipe={emitSwipe}
                    leaning={leaning}
                    setLeaning={setLeaning}
                    volume={volume}
                    muted={muted}
                />
            ))}
            <VolumeBar
                volume={volume}
                setVolume={setVolume}
                muted={muted}
                setMuted={setMuted}
            />
        </motion.div>
    )
}

export default MusicWidget
