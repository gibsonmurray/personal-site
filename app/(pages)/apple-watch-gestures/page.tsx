import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import Subtitle from "@/app/(components)/Subtitle"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Apple Watch Gestures",
}

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
        title: "Apple Watch Gestures: Music",
        href: "https://codepen.io/gibsonmurray/pen/NWowKYg",
        src: "/images/apple-watch-gestures/1.jpeg",
    },
    {
        title: "Apple Watch Gestures: Reply to Messages",
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
                <Subtitle href="https://codepen.io/gibsonmurray/pen/NWowKYg">
                    Codepen Demo
                </Subtitle>
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
                        />{" "}
                        to achieve the desired effect.
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
