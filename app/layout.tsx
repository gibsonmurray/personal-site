import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        template: "%s | Gibson Murray",
        default: "Gibson Murray",
    },
    description:
        "Gibson Murray's personal website. A portfolio of web development projects.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${figtree.className} overflow-hidden`}>
                {children}
            </body>
        </html>
    )
}
