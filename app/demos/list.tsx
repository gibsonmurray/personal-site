import { ReactNode } from "react"
import OlympicMedals from "@/demos/OlympicMedals"
import MusicWidget from "@/demos/MusicWidget"
import { CaseSensitiveIcon, MedalIcon, MusicIcon } from "lucide-react"
import FunText from "@/demos/FunText"

type Demo = {
    title: string
    href: string
    component: ReactNode
    icon: ReactNode
    new?: boolean
}

const DEMOS_PATH = "/demos"
const ICON_CLASS = "h-5 w-5"

export const demos: Demo[] = [
    {
        title: "olympic medals",
        href: `${DEMOS_PATH}/olympic-medals`,
        component: <OlympicMedals />,
        icon: <MedalIcon className={ICON_CLASS} />,
    },
    {
        title: "music widget",
        href: `${DEMOS_PATH}/music-widget`,
        component: <MusicWidget />,
        icon: <MusicIcon className={ICON_CLASS} />,
    },
    {
        title: "fun text",
        href: `${DEMOS_PATH}/fun-text`,
        component: <FunText />,
        icon: <CaseSensitiveIcon className={ICON_CLASS} />,
        new: true,
    },
].reverse()
