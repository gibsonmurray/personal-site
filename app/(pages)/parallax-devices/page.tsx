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
        href: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
        src: "/images/parallax-devices/parallax-devices-1.jpeg",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
        src: "/images/parallax-devices/parallax-devices-2.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: TV",
        href: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
        src: "/images/parallax-devices/parallax-devices-3.jpeg",
        className: "text-zinc-200 border-zinc-200",
    },
]

function ParallaxDevices() {
    return (
        <ExpandedBubble
            color="#edefff"
            darkBorder
            thumbnail="/images/thumbnails/parallax-devices.webp"
            title="Parallax Devices"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/JjzmrWR"
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
                        This project was insired by Nate Smith&apos;s{" "}
                        <InlineLink
                            href="https://natesmith.design/"
                            text="portfolio website"
                            className="text-[#50747A]"
                            newTab
                        />. My goal was to create a parallax effect, transitioning one device to the other.
                    </span>
                    <span>
                        I used{" "}
                        <InlineLink
                            href="https://gsap.com/"
                            text="GSAP"
                            className="text-[#0AE447]"
                            newTab
                        />
                    </span>
                </div>
            }
        />
    )
}

export default ParallaxDevices

// https://natesmith.design/
