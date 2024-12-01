import interstellar1 from "@/public/assets/demos/fun-text/interstellar-1.gif"
import interstellar2 from "@/public/assets/demos/fun-text/interstellar-2.gif"
import interstellar3 from "@/public/assets/demos/fun-text/interstellar-3.gif"
import prestige1 from "@/public/assets/demos/fun-text/the-prestige-1.gif"
import prestige2 from "@/public/assets/demos/fun-text/the-prestige-2.gif"
import prestige3 from "@/public/assets/demos/fun-text/the-prestige-3.gif"
import oppenheimer1 from "@/public/assets/demos/fun-text/oppenheimer-1.gif"
import oppenheimer2 from "@/public/assets/demos/fun-text/oppenheimer-2.gif"
import oppenheimer3 from "@/public/assets/demos/fun-text/oppenheimer-3.gif"
import darkKnight1 from "@/public/assets/demos/fun-text/dark-knight-1.gif"
import darkKnight2 from "@/public/assets/demos/fun-text/dark-knight-2.gif"
import darkKnight3 from "@/public/assets/demos/fun-text/dark-knight-3.gif"
import inception1 from "@/public/assets/demos/fun-text/inception-1.gif"
import inception2 from "@/public/assets/demos/fun-text/inception-2.gif"
import inception3 from "@/public/assets/demos/fun-text/inception-3.gif"
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
            offsetX: -460,
            offsetY: -190,
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
            offsetX: 430,
            offsetY: -100,
            rotate: -4,
        },
    ],
    prestige: [
        {
            src: prestige1,
            offsetX: -500,
            offsetY: -100,
            rotate: 3,
        },
        {
            src: prestige2,
            offsetX: -10,
            offsetY: -270,
            rotate: -4,
        },
        {
            src: prestige3,
            offsetX: 400,
            offsetY: -70,
            rotate: -2,
        },
    ],
    oppenheimer: [
        {
            src: oppenheimer1,
            offsetX: -420,
            offsetY: -110,
            rotate: -5,
        },
        {
            src: oppenheimer2,
            offsetX: 50,
            offsetY: -200,
            rotate: 4,
        },
        {
            src: oppenheimer3,
            offsetX: 450,
            offsetY: 20,
            rotate: 10,
        },
    ],
    darkKnight: [
        {
            src: darkKnight1,
            offsetX: -500,
            offsetY: -10,
            rotate: -5,
        },
        {
            src: darkKnight2,
            offsetX: -10,
            offsetY: -100,
            rotate: 3,
        },
        {
            src: darkKnight3,
            offsetX: 370,
            offsetY: 200,
            rotate: -7,
        },
    ],
    inception: [
        {
            src: inception1,
            offsetX: -450,
            offsetY: 100,
            rotate: -2,
        },
        {
            src: inception2,
            offsetX: -100,
            offsetY: -20,
            rotate: -3,
        },
        {
            src: inception3,
            offsetX: 350,
            offsetY: 250,
            rotate: 2,
        },
    ],
}
