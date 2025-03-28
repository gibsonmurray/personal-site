import { Metadata } from "next/types"
import { FC, ReactNode } from "react"
import { demos } from "../list"

type Props = { children: ReactNode; params: Promise<{ demo: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const demoId = (await params).demo
    const demo = demos.find(
        (demo) => demo.title === demoId.split("-").join(" "),
    )
    const title = demo?.title || "Home"
    return { title: `${title} | gibson murray` }
}

const DemoLayout: FC<Props> = async ({ children }) => children

export default DemoLayout
