"use client"

import { usePathname } from "next/navigation"
import { bubbles } from "@/app/bubbles"
import ExpandedBubble from "./ExpandedBubble"

const DynamicPage = () => {
    const path = usePathname()

    const bubble = bubbles.flat().find((bubble) => bubble.path === `${path}`)

    if (!bubble) {
        return <div>Page not found</div>
    }

    const {
        colors,
        darkColors,
        darkBorder,
        thumbnail,
        title,
        mainLink,
        skills,
        subtitle,
        imgs,
        content,
    } = bubble

    return (
        <ExpandedBubble
            color={colors[1]}
            darkColor={darkColors[1]}
            darkBorder={darkBorder}
            thumbnail={thumbnail}
            title={title}
            mainLink={mainLink}
            skills={skills}
            subtitle={subtitle}
            imgs={imgs}
            content={content}
        />
    )
}

export default DynamicPage
