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
        template: "%s | gibson murray",
        default: "gibson murray",
    },
    description:
        "hey everyone, welcome to my website! i'm gibson, a front end web developer and interaction designer.",
    openGraph: {
        type: "website",
        title: "gibson murray",
        siteName: "gibson murray",
        url: "https://gibsonmurray.com",
        description:
            "hey everyone, welcome to my website! i'm gibson, a front end web developer and interaction designer.",
        images: [
            {
                url: "/og.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "gibson murray",
        description:
            "hey everyone, welcome to my website! i'm gibson, a front end web developer and interaction designer.",
        images: [
            {
                url: "/og.jpg",
            },
        ],
    },
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
