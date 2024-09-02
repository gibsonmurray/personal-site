import type { Metadata } from "next"
import "./globals.css"
import Body from "./Body"

export const metadata: Metadata = {
    title: {
        template: "%s | Gibson Murray",
        default: "Gibson Murray",
    },
    description:
        `Welcome to my personal website - A portfolio of my best web development projects.\nI specialize in making React-based websites and apps with a sleek design and a custom feel.`,
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
