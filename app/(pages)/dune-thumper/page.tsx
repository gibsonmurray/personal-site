import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { CSSLink, HTMLLink } from "@/app/(components)/ReusedLinks"
import Subtitle from "@/app/(components)/Subtitle"
import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"

const links = [
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
        title: "Dune Thumper: Worm",
        href: "https://codepen.io/gibsonmurray/pen/MWRJajj",
        src: "/images/dune-thumper/thumper-2.png",
    },
    {
        title: "Dune Thumper: Activated",
        href: "https://codepen.io/gibsonmurray/pen/MWRJajj",
        src: "/images/dune-thumper/thumper-1.png",
    },
    {
        title: "Dune Thumper: Scene",
        href: "https://codepen.io/gibsonmurray/pen/MWRJajj",
        src: "/images/dune-thumper/thumper-3.png",
    },
]

function DuneThumper() {
    return (
        <ExpandedBubble
            color="#ffe6cc"
            mainLink="https://codepen.io/gibsonmurray/pen/MWRJajj"
            thumbnail="/images/thumbnails/dune-thumper.webp"
            title="Dune Thumper"
            links={links}
            subtitle={
                <Subtitle href="https://codepen.io/gibsonmurray/pen/MWRJajj">
                    Codepen Demo
                </Subtitle>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        A short side project I made after I had seen{" "}
                        <InlineLink
                            text="Dune: Part 2 🏜️"
                            href="https://www.imdb.com/title/tt15239678/"
                            newTab
                            className="text-[#DF7506]"
                        />
                        . It is a 2D scene with a thumper hitting the ground,
                        and a worm 🪱 that emerges in the background. The
                        animations and the scene are all made with pure{" "}
                        <HTMLLink /> and <CSSLink /> 😱.
                    </span>
                </div>
            }
        />
    )
}

export default DuneThumper
