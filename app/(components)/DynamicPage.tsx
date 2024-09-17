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
        title,
        subtitle,
        caption,
        skills,
        color,
        component,
        penLink,
        style,
        className,
    } = bubble

    return (
        <ExpandedBubble
            color={color}
            title={title}
            skills={skills}
            subtitle={subtitle}
            caption={caption}
            penLink={penLink}
            component={component}
            style={style}
            className={className}
        />
    )
}

export default DynamicPage
