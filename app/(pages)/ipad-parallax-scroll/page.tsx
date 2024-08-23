import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { CodepenLink, GSAPLink } from "@/app/(components)/ReusedLinks"
import Subtitle from "@/app/(components)/Subtitle"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "iPad Parallax Scroll",
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
        title: "iPad Parallax Scroll: Right Corner",
        href: "https://codepen.io/gibsonmurray/pen/BaMjoaP",
        src: "/images/ipad-parallax-scroll/r.png",
    },
    {
        title: "iPad Parallax Scroll: Center",
        href: "https://codepen.io/gibsonmurray/pen/BaMjoaP",
        src: "/images/ipad-parallax-scroll/m.jpeg",
    },
    {
        title: "iPad Parallax Scroll: Left Corner",
        href: "https://codepen.io/gibsonmurray/pen/BaMjoaP",
        src: "/images/ipad-parallax-scroll/l.jpeg",
    },
]

function iPadParallaxScroll() {
    return (
        <ExpandedBubble
            color="#e0e0e0"
            mainLink="https://codepen.io/gibsonmurray/pen/BaMjoaP"
            thumbnail="/images/thumbnails/ipad-parallax-scroll.webp"
            title="iPad Parallax Scroll"
            links={links}
            subtitle={
                <Subtitle href="https://codepen.io/gibsonmurray/pen/BaMjoaP">
                    Codepen Demo
                </Subtitle>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        This was my first ever featured <CodepenLink />. It is a
                        very small project designed to gain more experience with{" "}
                        <GSAPLink /> and to learn how to create a scrolling
                        effect.
                    </span>
                    <span>
                        Inspired by the{" "}
                        <InlineLink
                            text="10x Designers Landing Page"
                            href="https://10xdesigners.co/"
                            className="text-indigo-900"
                            newTab
                        />
                        .
                    </span>
                </div>
            }
        />
    )
}

export default iPadParallaxScroll
