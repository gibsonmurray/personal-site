import ExpandedBubble from "@/app/(components)/ExpandedBubble"
import InlineLink from "@/app/(components)/InlineLink"
import { CodepenLink } from "@/app/(components)/ReusedLinks"
import Subtitle from "@/app/(components)/Subtitle"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sticky Notes",
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
            color="#fff6e8"
            mainLink="https://codepen.io/gibsonmurray/full/gOqMmvE"
            thumbnail="/images/thumbnails/sticky-notes.webp"
            title="Sticky Notes"
            links={links}
            subtitle={
                <Subtitle href="https://codepen.io/gibsonmurray/full/gOqMmvE">
                    Codepen Demo
                </Subtitle>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        This was a fun little project I made to practice my
                        JavaScript skills. It&apos;s a simple sticky note app
                        where you can create, edit, and delete sticky notes. It
                        also has a trash can that you can use to delete each
                        note or all of them at once.
                    </span>
                    <span>
                        The original plan for this project was to make it a{" "}
                        <InlineLink
                            text="Bento"
                            href="https://bento.me/"
                            newTab
                            className="text-[#768BFF]"
                        />{" "}
                        clone, but I decided to keep it simple and just focus on
                        dragging interactions and animations.
                    </span>
                    <span>
                        It ended up gaining some traction on <CodepenLink /> and
                        I&apos;ve gotten a few messages from people who wanted
                        to use it for their own projects. I&apos;m glad that
                        it&apos;s been helpful to others!
                    </span>
                </div>
            }
        />
    )
}

export default StickyNotes
