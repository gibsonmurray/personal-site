import type { Metadata } from "next"
import "./globals.css"
import Body from "./Body"

export const metadata: Metadata = {
    title: {
        template: "%s | Gibson Murray",
        default: "Gibson Murray",
    },
    description:
        "My personal website - A portfolio of my best web development projects.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Body>{children}</Body>
        </html>
    )
}
