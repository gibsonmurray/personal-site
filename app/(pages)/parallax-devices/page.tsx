import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { GSAPLink } from "@/app/(components)/ReusedLinks"
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
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
        src: "/images/parallax-devices/parallax-devices-2.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: Phone",
        href: "https://codepen.io/gibsonmurray/pen/JjzmrWR",
        src: "/images/parallax-devices/parallax-devices-1.jpeg",
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
            mainLink="https://codepen.io/gibsonmurray/pen/JjzmrWR"
            thumbnail="/images/thumbnails/parallax-devices.webp"
            title="Parallax Devices"
            links={links}
            subtitle={
                <Subtitle href="https://codepen.io/gibsonmurray/pen/JjzmrWR">
                    Codepen Demo
                </Subtitle>
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
                        />
                        . My goal was to create a parallax effect, transitioning
                        one device 📱 to another 💻.
                    </span>
                    <span>
                        I used <GSAPLink /> timelines to animate the entire
                        demo. This showed me that animation code is quite messy
                        but also very powerful. For those who have done After
                        Effects, it&apos;s like keyframing with text.
                    </span>
                    <span>
                        Parallax effects are very clean for the user but very
                        tedious for the developer.
                    </span>
                </div>
            }
        />
    )
}

export default ParallaxDevices
