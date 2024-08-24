import DynamicPage from "@/app/(components)/DynamicPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "iPhone Widget Flood",
}

function iPhoneWidgetFlood() {
    return <DynamicPage />
}

export default iPhoneWidgetFlood
