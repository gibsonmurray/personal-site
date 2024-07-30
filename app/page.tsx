"use client"

import Grid from "./components/Grid"
import InfiniteViewport from "./components/InfiniteViewport"
import LaunchScreen from "./components/LaunchScreen"

export default function Home() {
    return (
        <>
            <LaunchScreen />
            <InfiniteViewport>
                <Grid />
            </InfiniteViewport>
        </>
    )
}
