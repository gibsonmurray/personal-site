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
import { getRandomInt } from "./utils"

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
            offsetX: getRandomInt(-470, -440),
            offsetY: getRandomInt(-190, -160),
            rotate: getRandomInt(-8, -4),
        },
        {
            src: interstellar2,
            offsetX: getRandomInt(-10, 10),
            offsetY: getRandomInt(-300, -270),
            rotate: getRandomInt(2, 4),
        },
        {
            src: interstellar3,
            offsetX: getRandomInt(390, 430),
            offsetY: getRandomInt(-100, -50),
            rotate: getRandomInt(-4, -2),
        },
    ],
    prestige: [
        {
            src: prestige1,
            offsetX: getRandomInt(-500, -440),
            offsetY: getRandomInt(-150, -100),
            rotate: getRandomInt(-5, -3),
        },
        {
            src: prestige2,
            offsetX: getRandomInt(-10, 10),
            offsetY: getRandomInt(-270, -220),
            rotate: getRandomInt(4, 6),
        },
        {
            src: prestige3,
            offsetX: getRandomInt(370, 420),
            offsetY: getRandomInt(-50, -30),
            rotate: getRandomInt(-1, 1),
        },
    ],
    oppenheimer: [
        {
            src: oppenheimer1,
            offsetX: getRandomInt(-500, -440),
            offsetY: getRandomInt(-10, 20),
            rotate: getRandomInt(-5, -3),
        },
        {
            src: oppenheimer2,
            offsetX: getRandomInt(-10, 10),
            offsetY: getRandomInt(-200, -170),
            rotate: getRandomInt(4, 6),
        },
        {
            src: oppenheimer3,
            offsetX: getRandomInt(370, 420),
            offsetY: getRandomInt(20, 60),
            rotate: getRandomInt(-1, 1),
        },
    ],
    darkKnight: [
        {
            src: darkKnight1,
            offsetX: getRandomInt(-500, -440),
            offsetY: getRandomInt(-10, 20),
            rotate: getRandomInt(-5, -3),
        },
        {
            src: darkKnight2,
            offsetX: getRandomInt(-10, 10),
            offsetY: getRandomInt(-200, -170),
            rotate: getRandomInt(4, 6),
        },
        {
            src: darkKnight3,
            offsetX: getRandomInt(370, 420),
            offsetY: getRandomInt(20, 60),
            rotate: getRandomInt(-1, 1),
        },
    ],
    inception: [
        {
            src: inception1,
            offsetX: getRandomInt(-500, -440),
            offsetY: getRandomInt(-10, 20),
            rotate: getRandomInt(-5, -3),
        },
        {
            src: inception2,
            offsetX: getRandomInt(-10, 10),
            offsetY: getRandomInt(-200, -170),
            rotate: getRandomInt(4, 6),
        },
        {
            src: inception3,
            offsetX: getRandomInt(370, 420),
            offsetY: getRandomInt(20, 60),
            rotate: getRandomInt(-1, 1),
        },
    ],
}
