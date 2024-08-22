import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { CodepenLink, GSAPLink } from "@/app/(components)/ReusedLinks"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const links = [
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
        title: "iPhone Widget Flood: Left",
        href: "https://codepen.io/gibsonmurray/pen/RwEQKrY",
        src: "/images/iphone-widget-flood/l.png",
    },
    {
        title: "iPhone Widget Flood: Center",
        href: "https://codepen.io/gibsonmurray/pen/RwEQKrY",
        src: "/images/iphone-widget-flood/c.png",
    },
    {
        title: "iPhone Widget Flood: Right",
        href: "https://codepen.io/gibsonmurray/pen/RwEQKrY",
        src: "/images/iphone-widget-flood/r.png",
    },
]

function iPhoneWidgetFlood() {
    return (
        <ExpandedBubble
            color="#f9edff"
            mainLink="https://codepen.io/gibsonmurray/pen/RwEQKrY"
            thumbnail="/images/thumbnails/iphone-widget-flood.webp"
            title="iPhone Widget Flood"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/RwEQKrY"
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
                        A very simple scroll animation that scales cards from
                        behind an iPhone 14 Pro.
                    </span>
                    <span>
                        Uses <GSAPLink /> to animate the cards.
                    </span>
                    <span>
                        This is one of my first projects on <CodepenLink />.
                        Could use some performance tweaks but it works well
                        enough once the browser caches the images.
                    </span>
                </div>
            }
        />
    )
}

export default iPhoneWidgetFlood
