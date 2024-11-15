"use client"

import { songs } from "./songs"
import SongWidget from "./SongWidget"

const MusicWidget = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <SongWidget song={songs[0]} />
        </div>
    )
}

export default MusicWidget
