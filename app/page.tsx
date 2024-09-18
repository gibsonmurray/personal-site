"use client"

import Row from "./(components)/Row"
import { bubbles } from "./bubbles"
import Bubble from "./(components)/Bubble"
import { useEffect, useRef, useState } from "react"
import { useAnimate } from "framer-motion"

bubbles.push(...bubbles)

function Home() {
    const [scope, animate] = useAnimate() //todo intro animation

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener("resize", handleResize)
        handleResize()
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <section
            ref={scope}
            className="center h-svh w-screen flex-col justify-start"
        >
            <main
                ref={container}
                className="center relative flex-col justify-start"
            >
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
