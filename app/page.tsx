"use client"

import React from "react"
import Block from "./components/Block"
import InfiniteViewport from "./components/InfiniteViewport"

export default function Home() {
    return (
        <InfiniteViewport>
            <Block />
        </InfiniteViewport>
    )
}
