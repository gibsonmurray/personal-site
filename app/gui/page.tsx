import { Metadata } from "next"
import Content from "./Content"

const guiOgImage = "/gui-og.jpg"
const title = "gui - redefining interfaces with style"
const description =
    "gui is a drag-and-drop component library for building beautiful, functional interfaces. custom built with react, tailwind, and framer motion."

export const metadata: Metadata = {
    title: "gui",
    openGraph: {
        title,
        description,
        images: [guiOgImage],
    },
    twitter: {
        title,
        description,
        images: [guiOgImage],
    },
    icons: {
        icon: "/gui-logo.svg",
    },
}

const GuiPage = () => {
    return (
        <main className="container mx-auto flex min-h-svh max-w-md flex-col items-center justify-start gap-10 py-10">
            <Content />
        </main>
    )
}

export default GuiPage
