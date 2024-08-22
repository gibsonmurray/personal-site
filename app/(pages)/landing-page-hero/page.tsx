import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { GSAPLink } from "@/app/(components)/ReusedLinks"
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
        title: "Landing Page Hero: Mid-Animation",
        href: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
        src: "/images/landing-page-hero/2.jpeg",
    },
    {
        title: "Landing Page Hero: Blur Follows",
        href: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
        src: "/images/landing-page-hero/3.jpeg",
    },
    {
        title: "Landing Page Hero: Button Animation",
        href: "https://codepen.io/gibsonmurray/pen/OJdzxyK",
        src: "/images/landing-page-hero/1.jpeg",
    },
]

function LandingPageHero() {
    return (
        <ExpandedBubble
            color="#ebe1ed"
            mainLink="https://codepen.io/gibsonmurray/pen/OJdzxyK"
            thumbnail="/images/thumbnails/landing-page-hero.webp"
            title="Landing Page Hero"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/OJdzxyK"
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
                        An exploration in text splitting effects, cursor
                        following animations, and 3D transforms 🎲. All made
                        with <GSAPLink />.
                    </span>
                    <span>Users can replay the animation at will 👑.</span>
                    <span>
                        This is a landing page hero section based on{" "}
                        <InlineLink
                            text="Poppr's Main Page"
                            href="https://poppr.be"
                            className="text-purple-500"
                            newTab
                        />
                    </span>
                </div>
            }
        />
    )
}

export default LandingPageHero
