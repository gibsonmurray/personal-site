import { Metadata } from "next/types"

export async function generateMetadata(): Promise<Metadata> {
    return { title: "demos" }
}

const DemoLayout = async ({ children }) => children

export default DemoLayout
