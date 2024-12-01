"use client"

import { useState } from "react"
import { songs } from "./songs"
import SongWidget from "./SongWidget"
import VolumeBar from "./VolumeBar"

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
        <div className="relative flex items-center justify-center -translate-x-8">
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
        </div>
    )
}

export default MusicWidget
