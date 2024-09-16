import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Olympic Medals",
}

function OlympicMedals() {
    return <DynamicPage />
}

export default OlympicMedals
