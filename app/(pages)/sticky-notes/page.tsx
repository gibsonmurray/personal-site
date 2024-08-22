import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"

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
        title: "Sticky Notes: TODO Image",
        href: "https://codepen.io/gibsonmurray/full/gOqMmvE",
        src: "/images/sticky-notes/stickies-1.png",
    },
    {
        title: "Sticky Notes: Trash Image",
        href: "https://codepen.io/gibsonmurray/full/gOqMmvE",
        src: "/images/sticky-notes/stickies-3.png",
    },
    {
        title: "Sticky Notes: Stacked Notes Image",
        href: "https://codepen.io/gibsonmurray/full/gOqMmvE",
        src: "/images/sticky-notes/stickies-2.png",
    },
]

function StickyNotes() {
    return (
        <ExpandedBubble
            color="#f2e4cb"
            thumbnail="/images/thumbnails/sticky-notes.webp"
            title="Sticky Notes"
            links={links}
            subtitle={
                <span className="text-base font-medium text-zinc-600">
                    Codepen Demo
                </span>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        Hello world! I&apos;m Gibson, a front-end developer with
                        a passion for creating beautiful and functional web
                        applications. I am currently working on exploring new
                        front-end technologies and frameworks.
                    </span>
                    <span>
                        I also do a lot of side projects and demos, so check out
                        my{" "}
                        <InlineLink
                            text="Codepen"
                            href="https://codepen.io/gibsonmurray"
                            className="text-zinc-950"
                            newTab
                        />{" "}
                        for more.
                    </span>
                    <span>Thanks for stopping by! 👋</span>
                    <span className="w-full text-right font-semibold">
                        - Gibson
                    </span>
                </div>
            }
        />
    )
}

export default StickyNotes
