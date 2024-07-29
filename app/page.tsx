"use client"

import Block from "./components/Block"
import InfiniteViewport from "./components/InfiniteViewport"
import GridLayout from "react-grid-layout"
import { useState } from "react"
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

export default function Home() {
    const initialLayout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2 },
        { i: "b", x: 1, y: 0, w: 3, h: 2 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
        { i: "d", x: 5, y: 0, w: 3, h: 2 },
    ]

    const [layout, setLayout] = useState(initialLayout)

    const handleLayoutChange = (newLayout: any) => {
        setLayout(newLayout)
    }

    return (
        <InfiniteViewport>
            <GridLayout layout={layout} onLayoutChange={handleLayoutChange}>
                {layout.map((block) => (
                    <Block key={block.i} dataGrid={block} />
                ))}
            </GridLayout>
        </InfiniteViewport>
    )
}
