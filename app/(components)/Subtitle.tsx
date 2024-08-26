import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"
import { useAtom } from "jotai"

import { themeState } from "./ThemeToggle"

function Subtitle(props: { children?: ReactNode; href?: string }) {
    const [theme] = useAtom(themeState)

    return (
        <Link
            href={props.href || ""}
            target={props.href ? "_blank" : "_self"}
            className={`flex items-center justify-center gap-1 transition-[color] duration-500 ${theme === "dark" ? "text-zinc-300" : "text-zinc-600"} underline-offset-2 ${props.href && "cursor-pointer hover:underline"} cursor-default md:justify-start`}
        >
            <span className="text-base font-medium">{props.children}</span>
            {props.href && (
                <ExternalLinkIcon className="h-4 w-4 stroke-[2.5px]" />
            )}
        </Link>
    )
}

export default Subtitle
