import Link from "next/link"

function InlineLink(props: {
    text: string
    href: string
    className?: string
    newTab?: boolean
}) {
    const { text, href, className, newTab } = props

    return (
        <Link
            href={href}
            target={newTab ? "_blank" : "_self"}
            className={`${className}`}
        >
            {text}
        </Link>
    )
}

export default InlineLink
