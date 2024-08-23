import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

function Subtitle(props: { children?: ReactNode, href?: string }) {
    return (
        <Link
            href={props.href || ""}
            target={props.href ? "_blank" : "_self"}
            className="flex items-center justify-center md:justify-start gap-1 text-zinc-600 underline-offset-2 hover:underline"
        >
            <span className="text-base font-medium">{props.children}</span>
            <ExternalLinkIcon className="h-4 w-4 stroke-[2.5px]" />
        </Link>
    )
}

export default Subtitle
