import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pressure Grid",
}

function PressureGrid() {
    return <DynamicPage />
}

export default PressureGrid
