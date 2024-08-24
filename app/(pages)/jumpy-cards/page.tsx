import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Jumpy Cards",
}

function JumpyCards() {
    return <DynamicPage />
}

export default JumpyCards
