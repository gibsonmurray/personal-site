import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        template: "%s | Gibson Murray",
        default: "Gibson Murray",
    },
    description: "Welcome to my portfolio showcasing my front-end work!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${figtree.className} overflow-hidden bg-zinc-200`}
            >
                {children}
            </body>
        </html>
    )
}
