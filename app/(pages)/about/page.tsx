import ExpandedBubble from "@/app/(components)/ExpandedBubble/main"

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
        />
    )
}

export default About
