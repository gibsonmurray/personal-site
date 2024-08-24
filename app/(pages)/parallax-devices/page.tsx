import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Apple Watch Gestures",
}

function ParallaxDevices() {
    return <DynamicPage />
}

export default ParallaxDevices
