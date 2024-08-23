import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import { CodepenLink, GSAPLink } from "@/app/(components)/ReusedLinks"
import Subtitle from "@/app/(components)/Subtitle"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "iPhone Widget Flood",
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
                <Subtitle href="https://codepen.io/gibsonmurray/pen/RwEQKrY">
                    Codepen Demo
                </Subtitle>
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
