import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trashy Photos",
}

function ParallaxSeasons() {
    return <DynamicPage />
}

export default ParallaxSeasons
