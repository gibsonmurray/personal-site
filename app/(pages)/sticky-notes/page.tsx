import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sticky Notes",
}

function StickyNotes() {
    return <DynamicPage />
}

export default StickyNotes
