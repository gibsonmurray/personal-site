import MusicWidget from "@/demos/MusicWidget"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "music widget",
}

const MusicWidgetPage = () => {
    return <MusicWidget />
}

export default MusicWidgetPage
