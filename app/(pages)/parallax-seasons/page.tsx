import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import {
    CodepenLink,
    CSSLink,
    HTMLLink,
    JavaScriptLink,
} from "@/app/(components)/ReusedLinks"
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
        href: "https://codepen.io/gibsonmurray/pen/jOdwaKb",
        src: "/images/parallax-seasons/spring.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: Laptop",
        href: "https://codepen.io/gibsonmurray/pen/jOdwaKb",
        src: "/images/parallax-seasons/summer.png",
        className: "text-zinc-200 border-zinc-200",
    },
    {
        title: "Parallax Devices: TV",
        href: "https://codepen.io/gibsonmurray/pen/jOdwaKb",
        src: "/images/parallax-seasons/fall.png",
        className: "text-zinc-200 border-zinc-200",
    },
]

function ParallaxSeasons() {
    return (
        <ExpandedBubble
            color="#f4faff"
            darkBorder
            mainLink="https://codepen.io/gibsonmurray/pen/jOdwaKb"
            thumbnail="/images/thumbnails/parallax-seasons.webp"
            title="Parallax Seasons"
            links={links}
            subtitle={
                <Link
                    href="https://codepen.io/gibsonmurray/pen/jOdwaKb"
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
                        One of my most popular projects on <CodepenLink />, this
                        is a simple parallax effect that I created using just{" "}
                        <HTMLLink />, <CSSLink />, and <JavaScriptLink />. The
                        effect is triggered when the user moves their mouse
                        across the screen.
                    </span>
                    <span>
                        By default, the season on desplay is the current one in
                        the United States 🇺🇸 (as of right now that is{" "}
                        {getCurrentSeason()}
                        ). However, users can change the season by clicking on
                        the menu.
                    </span>
                    <span>
                        This was my entry to getting highly featured on the{" "}
                        <CodepenLink /> trending page and newsletter ❤️.
                    </span>
                </div>
            }
        />
    )
}

export default ParallaxSeasons

function getCurrentSeason() {
    const currentMonth = new Date().getMonth()
    if (currentMonth >= 2 && currentMonth <= 4) {
        return "Spring 🌸"
    } else if (currentMonth >= 5 && currentMonth <= 7) {
        return "Summer 🏝️"
    } else if (currentMonth >= 8 && currentMonth <= 10) {
        return "Fall 🍂"
    } else {
        return "Winter ❄️"
    }
}
