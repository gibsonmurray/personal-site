import { useEffect, useRef, useState } from "react"
import Marquee from "react-fast-marquee"
import { cn } from "@/lib/utils"

type RotatingTextProps = { text: string; className?: string }

const RotatingText = ({ text, className }: RotatingTextProps) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const textRef = useRef<HTMLSpanElement>(null)

    const pause = () => {
        setIsPlaying(false)
        setTimeout(() => {
            setIsPlaying(true)
        }, 3000)
    }

    useEffect(() => {
        if (textRef.current && textRef.current.textContent!.length > 16) {
            pause()
        } else {
            setIsPlaying(false)
        }
    }, [textRef])

    return (
        <>
            <Marquee
                className={cn(
                    "relative flex h-full w-full items-center justify-start overflow-hidden font-semibold text-zinc-50",
                    className,
                )}
                style={{
                    maskImage: `linear-gradient(to right, transparent, black 5%, black 95%, transparent)`,
                }}
                speed={20}
                onCycleComplete={pause}
                play={isPlaying}
            >
                <span ref={textRef} className="px-2">
                    {text}
                </span>
                <div className="h-full w-10"></div>
            </Marquee>
            <span ref={textRef} className="absolute opacity-0">
                {text}
            </span>
        </>
    )
}

export default RotatingText
