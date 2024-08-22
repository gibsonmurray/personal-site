import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const links = [
    {
        text: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        className: "text-amber-500",
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
        title: "Parallax Devices: Phone",
        href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
        src: "/images/apple-watch-gestures/1.jpeg",
    },
    {
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
        src: "/images/apple-watch-gestures/2.jpeg",
    },
    {
        title: "Parallax Devices: TV",
        href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
        src: "/images/apple-watch-gestures/3.jpeg",
    },
]

function AppleWatchGestures() {
    return (
        <ExpandedBubble
            color="#e5e5e5"
            mainLink="https://codepen.io/gibsonmurray/pen/NWowKYg"
            thumbnail="/images/thumbnails/apple-watch-gestures.webp"
            title="Apple Watch Gestures"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/NWowKYg"
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
                        A very simple demo of Apple&apos;s watch gestures
                        section of the{" "}
                        <InlineLink
                            text="Apple Watch website ⌚️"
                            href="https://www.apple.com/apple-watch-series-9/"
                            className="text-zinc-900"
                            newTab
                        />
                        . The demo uses the{" "}
                        <InlineLink
                            text="GSAP ScrollTrigger"
                            href="https://greensock.com/scrolltrigger/"
                            className="text-[#0AE447]"
                            newTab
                        /> {" "} to achieve the desired effect.
                    </span>
                    <span>
                        This is another one of my tests with scroll animations.
                    </span>
                </div>
            }
        />
    )
}

export default AppleWatchGestures
