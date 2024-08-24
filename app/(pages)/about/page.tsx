import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Me",
}

function About() {
    return <DynamicPage />
}

export default About
