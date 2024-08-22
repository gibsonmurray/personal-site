import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { CodepenLink } from "@/app/(components)/ReusedLinks"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const links = [
    {
        text: "AI",
        href: "https://openai.com/api/",
        className: "text-purple-500",
        newTab: true,
    },
    {
        text: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        className: "text-amber-400",
        newTab: true,
    },
    {
        text: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        className: "text-orange-600",
        newTab: true,
    },
    {
        text: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        className: "text-sky-600",
        newTab: true,
    },
]

const images = [
    {
        title: "Magic Terminal: Jumbled",
        href: "https://codepen.io/gibsonmurray/pen/dyBXxLG",
        src: "/images/magic-terminal/jumbled.png",
    },
    {
        title: "Magic Terminal: Math",
        href: "https://codepen.io/gibsonmurray/pen/dyBXxLG",
        src: "/images/magic-terminal/math.png",
    },
    {
        title: "Magic Terminal: Known",
        href: "https://codepen.io/gibsonmurray/pen/dyBXxLG",
        src: "/images/magic-terminal/known.png",
    },
]

function MagicTerminal() {
    return (
        <ExpandedBubble
            color="#e8e9ea"
            mainLink="https://codepen.io/gibsonmurray/pen/dyBXxLG"
            thumbnail="/images/thumbnails/magic-terminal.webp"
            title="Magic Terminal"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/dyBXxLG"
                    target="_blank"
                    className="flex items-center justify-center gap-1 text-zinc-600 underline-offset-2 hover:underline"
                >
                    <span className="text-base font-medium">Codepen Demo</span>
                    <ExternalLinkIcon className="h-4 w-4 stroke-[2.5px]" />
                </Link>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        Imagine a{" "}
                        <InlineLink
                            text="Bash shell"
                            href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
                            className="text-green-600"
                            newTab
                        />{" "}
                        with knowledge of the universe and the future of what is
                        to come... ✨
                    </span>
                    <span>
                        The Magic Terminal is an interactive <CodepenLink />{" "}
                        built with hidden lore. It will answer your questions
                        but sometimes it reveals a bit more than you asked for.
                    </span>
                    <span>
                        This started off as a tiny project to practice a
                        &quot;hacker text&quot; style animation. However, as I
                        went along, I decided to make it a bit more fun.
                    </span>
                </div>
            }
        />
    )
}

export default MagicTerminal
