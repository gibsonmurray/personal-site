import interstellar1 from "@/public/assets/demos/fun-text/interstellar-1.gif"
import interstellar2 from "@/public/assets/demos/fun-text/interstellar-2.gif"
import interstellar3 from "@/public/assets/demos/fun-text/interstellar-3.gif"
import { StaticImageData } from "next/image"

export type FunTextDataEntry = {
    src: StaticImageData
    offsetX: number
    offsetY: number
    rotate: number
}

export const data: Record<string, FunTextDataEntry[]> = {
    interstellar: [
        {
            src: interstellar1,
            offsetX: -430,
            offsetY: -170,
            rotate: -8,
        },
        {
            src: interstellar2,
            offsetX: -10,
            offsetY: -300,
            rotate: 2,
        },
        {
            src: interstellar3,
            offsetX: 400,
            offsetY: -100,
            rotate: -4,
        },
    ],
}
