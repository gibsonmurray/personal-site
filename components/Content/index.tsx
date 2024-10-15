"use client"

import {
    CodepenIcon,
    FileTextIcon,
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    SquareTerminalIcon,
    BlocksIcon,
    LightbulbIcon,
} from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Content = () => {
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            gsap.to(".content > *", {
                opacity: 1,
                duration: 1,
                y: 0,
                delay: 2,
                stagger: 0.05,
                ease: "back.out",
            })
        },
        { scope },
    )

    return (
        <div
            ref={scope}
            className="content flex flex-col items-center justify-center gap-4 px-4 text-xl font-semibold *:translate-y-3 *:opacity-0"
        >
            <span>
                i am a design engineer which means i css good and build cool
                stuff
            </span>
            <span>
                my speciality is interaction design with react, tailwind, gsap,
                and framer motion.
            </span>
            <span className="w-full">
                believe it or not, i also have cs degree.
            </span>
            <span className="w-full">here&apos;s some more info:</span>

            <div className="flex flex-col items-start justify-start gap-3 py-2 text-lg text-zinc-700 *:flex *:items-center *:gap-3 *:underline">
                <a
                    href="https://codepen.io/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CodepenIcon /> codepen
                </a>

                <a
                    href="https://x.com/gibsonsmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon /> twitter/x
                </a>

                <a
                    href="https://github.com/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon /> github
                </a>
                <a
                    href="https://read.cv/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileTextIcon /> resume/cv
                </a>
                <a
                    href="https://www.linkedin.com/in/gibsonmurray/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon /> linkedin
                </a>
            </div>

            <span className="w-full">
                on the side i build libraries for react:
            </span>

            <div className="flex flex-col items-start justify-start gap-3 py-2 text-lg text-zinc-700 *:flex *:items-center *:gap-3">
                <a
                    href="https://github.com/gibsonmurray/react-hooks"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LightbulbIcon />
                    <span className="underline">react-hooks</span>
                    <span className="text-zinc-500">handy react hooks</span>
                </a>
                <a
                    href="https://github.com/gibsonmurray/ghooks-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SquareTerminalIcon />
                    <span className="underline">ghooks-cli</span>
                    <span className="text-zinc-500">
                        install those react hooks
                    </span>
                </a>
                <a
                    href="https://github.com/gibsonmurray/gmake"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BlocksIcon />
                    <span className="underline">gmake</span>
                    <span className="text-zinc-500">
                        quickstart a react project
                    </span>
                </a>
            </div>

            <span className="w-full">thanks for checking me out, cheers!</span>
        </div>
    )
}

export default Content
