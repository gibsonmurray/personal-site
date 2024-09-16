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
        title,
        penLink,
        skills,
        subtitle,
        content,
    } = bubble

    return (
        <ExpandedBubble
            color={colors[1]}
            title={title}
            skills={skills}
            subtitle={subtitle}
            content={content}
            penLink={penLink}
        />
    )
}

export default DynamicPage
