"use client"

import { useState } from "react"
import Grid from "./components/Grid"
import InfiniteViewport from "./components/InfiniteViewport"
import LaunchScreen from "./components/LaunchScreen"

export default function Home() {
    const [launching, setLaunching] = useState(true)

    return (
        <InfiniteViewport>
            {launching ? <LaunchScreen setLaunching={setLaunching} /> : <Grid />}
        </InfiniteViewport>
    )
}
