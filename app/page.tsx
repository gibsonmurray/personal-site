"use client"

import Row from "./(components)/Row"
import { bubbles } from "./bubbles"
import Bubble from "./(components)/Bubble"
import { useState } from "react"
import gsap from "gsap"
import { motion, useAnimate } from "framer-motion"

function Home() {
    const [scope, animate] = useAnimate()

    const [screenWidth, setScreenWidth] = useState(() => {
        if (typeof window !== "undefined") {
            return window.innerWidth
        }
        return 0
    })

    return (
        <section
            ref={scope}
            className="center h-svh w-screen flex-col justify-start"
        >
            <main className="center container flex-col justify-start">
                {Array.from({ length: Math.ceil(bubbles.length / 3.5) }).map(
                    (_, rowIndex) => {
                        const startIndex = Math.floor(rowIndex * 3.5)
                        const bubbleCount = rowIndex % 2 === 0 ? 3 : 4
                        const remainingBubbles = bubbles.length - startIndex
                        const isLastRow = remainingBubbles <= bubbleCount
                        const placeholdersNeeded = isLastRow
                            ? bubbleCount - remainingBubbles
                            : 0

                        return (
                            <Row key={rowIndex}>
                                {bubbles
                                    .slice(startIndex, startIndex + bubbleCount)
                                    .map((bubble, colIndex) => (
                                        <Bubble
                                            key={`${rowIndex}-${colIndex}`}
                                            title={bubble.title}
                                            path={bubble.path}
                                            thumbnail={bubble.thumbnail}
                                            color={bubble.color}
                                            initAnimationDone={true}
                                            className={bubble.className || ""}
                                        />
                                    ))}
                                {[...Array(placeholdersNeeded)].map(
                                    (_, index) => (
                                        <Bubble
                                            key={`placeholder-${index}`}
                                            title=""
                                            path=""
                                            thumbnail=""
                                            color="transparent"
                                            initAnimationDone={true}
                                            hidden
                                        />
                                    ),
                                )}
                            </Row>
                        )
                    },
                )}
            </main>
        </section>
    )
}

export default Home