import { motion } from "framer-motion"
import Waveform from "./Waveform"
import RotatingText from "./RotatingText"
import { FC, useEffect, useRef, useState } from "react"
import { Song } from "./songs"
import Image from "next/image"

type SongWidgetProps = {
    song: Song
}

const SongWidget: FC<SongWidgetProps> = ({ song }) => {
    const rotatingTextRef = useRef<HTMLDivElement>(null)
    const [parentWidth, setParentWidth] = useState(0)

    useEffect(() => {
        setParentWidth(rotatingTextRef.current?.clientWidth || 0)
    }, [rotatingTextRef])

    return (
        <motion.div className="relative flex aspect-square h-48 items-center justify-center overflow-hidden rounded-[42px]">
            <Image
                src={song.image}
                alt={`${song.title} by ${song.artist}`}
                className="h-full w-full object-cover"
                width={300}
                height={300}
            />
            <div
                className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-b from-black/50 via-transparent to-black/50 backdrop-blur-sm"
                style={{
                    maskImage:
                        "linear-gradient(to top, black 30%, transparent 100%)",
                }}
            ></div>
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-start gap-2 p-4">
                <Waveform />
                <div
                    ref={rotatingTextRef}
                    className="relative flex w-full flex-col items-start justify-center pr-5 -translate-x-2"
                >
                    <RotatingText text={song.title} parentWidth={parentWidth} />
                    <RotatingText
                        text={song.artist}
                        className="w-full truncate text-xs font-normal text-zinc-300"
                        parentWidth={parentWidth}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default SongWidget
