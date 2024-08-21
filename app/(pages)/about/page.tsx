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
        text: "TypeScript",
        href: "https://www.typescriptlang.org/",
        className: "text-blue-500",
        newTab: true,
    },
    {
        text: "React",
        href: "https://reactjs.org/",
        className: "text-blue-400",
        newTab: true,
    },
    {
        text: "Next.js",
        href: "https://nextjs.org/",
        className: "text-zinc-500",
        newTab: true,
    },
    {
        text: "Node.js",
        href: "https://nodejs.org/en",
        className: "text-green-500",
        newTab: true,
    },
]

const images = [
    {
        title: "Jumpy Cards Codepen",
        href: "https://codepen.io/gibsonmurray/pen/oNrXoaL",
        src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/qwesgTGQdqfwKZki-SCR-20240713-beie.png?w=1000&h=1000",
    },
    {
        title: "Magic Terminal Codepen",
        href: "https://codepen.io/gibsonmurray/full/dyBXxLG",
        src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/SMKHjHWv1mX2YYQA-dyBXxLG.custom.jpg?w=1000&h=1000",
    },
    {
        title: "Sticky Notes Codepen",
        href: "https://codepen.io/gibsonmurray/full/gOqMmvE",
        src: "https://creatorspace.imgix.net/users/cln54h71q00zbo901sy1cmbot/sJKfm3vMoZldxdCo-sticky%2520notes%2520thumbnail.png?w=1000&h=1000",
    },
]

function About() {
    return (
        <ExpandedBubble
            color="#FDFCF7"
            thumbnail="/images/prof-pic.webp"
            title="About Me"
            links={links}
            subtitle={
                <span className="text-xl font-semibold text-zinc-600">
                    Gibson Murray
                    <span className="text-base font-medium text-zinc-600">
                        {" "}
                        - Front-End Developer
                    </span>
                </span>
            }
            imgs={images}
            content={
                <div className="flex w-full flex-col items-start justify-center gap-3 px-6 leading-7 text-zinc-600">
                    <span>
                        Hello world! I&apos;m Gibson, a front-end developer with a
                        passion for creating beautiful and functional web
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

export default About
