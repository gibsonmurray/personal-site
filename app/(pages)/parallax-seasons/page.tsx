import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Parallax Seasons",
}

function ParallaxSeasons() {
    return <DynamicPage />
}

export default ParallaxSeasons
