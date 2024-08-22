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
        title: "Parallax Devices: Phone",
        href: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
        src: "/images/jumpy-cards/1.png",
    },
    {
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
        src: "/images/jumpy-cards/2.jpeg",
    },
    {
        title: "Parallax Devices: TV",
        href: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
        src: "/images/jumpy-cards/3.jpeg",
    },
]

function JumpyCards() {
    return (
        <ExpandedBubble
            color="#e0e0e0"
            mainLink="https://codepen.io/gibsonmurray/pen/oNrXoaL"
            thumbnail="/images/thumbnails/jumpy-cards.webp"
            title="Jumpy Cards"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/oNrXoaL"
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
                        A very simple project with a few cards that jump on
                        launch. Mimics{" "}
                        <InlineLink
                            text="Airbnb's"
                            href="https://www.airbnb.com/"
                            className="text-[#FF385C]"
                            newTab
                        />{" "}
                        micro-interactions as seen on their app.
                    </span>
                    <span>
                        It uses a simple <GSAPLink /> tween used to stagger the
                        scales of the cards.
                    </span>
                    <span>
                        This is the only project I have done with a tutorial.
                        You can check it out{" "}
                        <InlineLink
                            text="here"
                            href="https://x.com/GibsonSMurray/status/1811980098502787267/video/1"
                            className="text-blue-500"
                            newTab
                        />
                        !
                    </span>
                </div>
            }
        />
    )
}

export default JumpyCards