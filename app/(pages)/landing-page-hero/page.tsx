import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Landing Page Hero",
}

function LandingPageHero() {
    return <DynamicPage />
}

export default LandingPageHero
