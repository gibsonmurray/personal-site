"use client"

import { useState } from "react"
import Grid from "../components/Grid"
import InfiniteViewport from "../components/InfiniteViewport"
import LaunchScreen from "../components/LaunchScreen"

export default function Home() {
    const [launching, setLaunching] = useState(true)
    const [doneLaunch, setDoneLaunch] = useState(false)

    return (
        <InfiniteViewport>
            {!doneLaunch && <LaunchScreen setLaunching={setLaunching} setDoneLaunch={setDoneLaunch} />}
            {!launching && <Grid doneLaunch={doneLaunch} />}
        </InfiniteViewport>
    )
}
