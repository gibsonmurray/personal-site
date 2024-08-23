import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import {
    GSAPLink,
    JavaScriptLink,
    ReactLink,
} from "@/app/(components)/ReusedLinks"
import Subtitle from "@/app/(components)/Subtitle"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Trashy Photos",
}

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
        title: "Parallax Devices: Phone",
        href: "https://codepen.io/gibsonmurray/pen/gONaLwy",
        src: "/images/trashy-photos/animation.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/gONaLwy",
        src: "/images/trashy-photos/grid.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: TV",
        href: "https://codepen.io/gibsonmurray/pen/gONaLwy",
        src: "/images/trashy-photos/trash.png",
        className: "text-zinc-200 border-zinc-200",
    },
]

function ParallaxSeasons() {
    return (
        <ExpandedBubble
            color="#F1F4F6"
            darkBorder
            mainLink="https://codepen.io/gibsonmurray/pen/gONaLwy"
            thumbnail="/images/thumbnails/trashy-photos.webp"
            title="Trashy Photos"
            links={links}
            subtitle={
                <Subtitle href="https://codepen.io/gibsonmurray/pen/gONaLwy">
                    Codepen Demo
                </Subtitle>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        I wanted to challenge myself by recreating Emil
                        Kowalski&apos;s{" "}
                        <InlineLink
                            href="https://x.com/emilkowalski_/status/1777316868434411750"
                            text="Demo"
                            className="text-red-500"
                            newTab
                        />{" "}
                        of deleting photos in a stylish way.
                    </span>
                    <span>
                        I only used <GSAPLink /> 🪄 to create the animations.
                        This is all done with vanilla <JavaScriptLink /> . I did
                        not like doing it in vanilla JS, but I wanted to see how
                        far I could get without tools like <ReactLink /> ⚛️.
                    </span>
                </div>
            }
        />
    )
}

export default ParallaxSeasons
