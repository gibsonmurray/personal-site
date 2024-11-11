import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import "./globals.css"
import { cn } from "@/utils"
import { FC } from "react"

const figtree = Figtree({
    subsets: ["latin"],
})

const description =
    "hey everyone, welcome to my website! i'm gibson, a design engineer."

export const metadata: Metadata = {
    title: {
        template: "%s | gibson murray",
        default: "gibson murray",
    },
    description,
    openGraph: {
        type: "website",
        title: "gibson murray",
        siteName: "gibson murray",
        url: "https://gibsonmurray.com",
        description,
        images: [
            {
                url: "/og.jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "gibson murray",
        description,
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
            <body className={cn("bg-zinc-50 antialiased", figtree.className)}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
