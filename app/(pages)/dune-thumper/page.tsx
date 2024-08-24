import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dune Thumper",
}

function DuneThumper() {
    return <DynamicPage />
}

export default DuneThumper
