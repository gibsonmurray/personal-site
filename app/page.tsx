"use client"

import Block from "./components/Block"
import InfiniteViewport from "./components/InfiniteViewport"

export default function Home() {
    return (
        <InfiniteViewport>
            <div className="grid grid-cols-1 place-items-center gap-5">
                <Block size="2x1" />
                <div className="flex items-center justify-center gap-5">
                    <Block size="1x1" />
                    <Block size="2x2" />
                </div>
            </div>
        </InfiniteViewport>
    )
}
