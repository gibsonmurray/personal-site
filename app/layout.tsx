import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils"
import { FC } from "react"

const figtree = Figtree({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: {
        template: "%s | Gibson Murray",
        default: "Gibson Murray",
    },
    description:
        "hey everyone, welcome to my website! i'm gibson, a front end web developer and interaction designer.",
}

type RootLayoutProps = {
    children: React.ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={cn("antialiased bg-zinc-50", figtree.className)}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
