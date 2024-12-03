export type FunTextDataEntry = {
    src: string
    offsetX: number
    offsetY: number
    rotate: number
}

export const IMAGE_PATH =
    "https://ywczzzgqahgnnxdtodap.supabase.co/storage/v1/object/public/assets/demos/hover-preview-text"

export const data: Record<string, FunTextDataEntry[]> = {
    interstellar: [
        {
            src: "interstellar-1.gif",
            offsetX: -460,
            offsetY: -190,
            rotate: -8,
        },
        {
            src: "interstellar-2.gif",
            offsetX: -10,
            offsetY: -300,
            rotate: 2,
        },
        {
            src: "interstellar-3.gif",
            offsetX: 430,
            offsetY: -100,
            rotate: -4,
        },
    ],
    prestige: [
        {
            src: "the-prestige-1.gif",
            offsetX: -500,
            offsetY: -100,
            rotate: 3,
        },
        {
            src: "the-prestige-2.gif",
            offsetX: -10,
            offsetY: -270,
            rotate: -4,
        },
        {
            src: "the-prestige-3.gif",
            offsetX: 400,
            offsetY: -70,
            rotate: -2,
        },
    ],
    oppenheimer: [
        {
            src: "oppenheimer-1.gif",
            offsetX: -420,
            offsetY: -110,
            rotate: -5,
        },
        {
            src: "oppenheimer-2.gif",
            offsetX: 50,
            offsetY: -200,
            rotate: 4,
        },
        {
            src: "oppenheimer-3.gif",
            offsetX: 450,
            offsetY: 20,
            rotate: 10,
        },
    ],
    darkKnight: [
        {
            src: "dark-knight-1.gif",
            offsetX: -500,
            offsetY: -10,
            rotate: -5,
        },
        {
            src: "dark-knight-2.gif",
            offsetX: -10,
            offsetY: -100,
            rotate: 3,
        },
        {
            src: "dark-knight-3.gif",
            offsetX: 370,
            offsetY: 200,
            rotate: -7,
        },
    ],
    inception: [
        {
            src: "inception-1.gif",
            offsetX: -450,
            offsetY: 100,
            rotate: -2,
        },
        {
            src: "inception-2.gif",
            offsetX: -100,
            offsetY: -20,
            rotate: -3,
        },
        {
            src: "inception-3.gif",
            offsetX: 350,
            offsetY: 250,
            rotate: 2,
        },
    ],
}
