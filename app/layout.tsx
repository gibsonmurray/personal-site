import type { Metadata } from "next"
import "./globals.css"
import { Figtree } from "next/font/google"

const figtree = Figtree({ subsets: ["latin"] })

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
            <body
                className={`${figtree.className} bg-black`}
            >
                {children}
            </body>
        </html>
    )
}
