"use client"

import { useState } from "react"
import { songs } from "./songs"
import SongWidget from "./SongWidget"

export type Lean = "left" | "right" | null

const MusicWidget = () => {
    const [orderedSongs, setOrderedSongs] = useState<string[]>(
        Array.from({ length: songs.length }, (_, index) => songs[index].id),
    )
    const [previousOrderedSongs, setPreviousOrderedSongs] =
        useState<string[]>(orderedSongs)

    const [leaning, setLeaning] = useState<Lean>(null)

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
        <div className="relative flex items-center justify-center">
            {songs.map((song) => (
                <SongWidget
                    key={song.id}
                    song={song}
                    previousOrderedSongs={previousOrderedSongs}
                    orderedSongs={orderedSongs}
                    emitSwipe={emitSwipe}
                    leaning={leaning}
                    setLeaning={setLeaning}
                />
            ))}
        </div>
    )
}

export default MusicWidget
