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
                my speciality is interaction design with react and tailwind.
            </span>
            <span className="w-full">here&apos;s some more info:</span>

            <div className="flex flex-col items-start justify-start gap-3 py-4">
                <a
                    href="https://codepen.io/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <CodepenIcon /> codepen
                </a>

                <a
                    href="https://x.com/gibsonsmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <TwitterIcon /> twitter/x
                </a>

                <a
                    href="https://github.com/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <GithubIcon /> github
                </a>
                <a
                    href="https://read.cv/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <FileTextIcon /> resume/cv
                </a>
                <a
                    href="https://www.linkedin.com/in/gibsonmurray/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <LinkedinIcon /> linkedin
                </a>
            </div>

            <span className="w-full">on the side i build libraries for react:</span>

            <div className="flex flex-col items-start justify-start gap-3 py-4">
                <a
                    href="https://github.com/gibsonmurray/react-hooks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <LightbulbIcon /> react-hooks - useful react hooks
                </a>
                <a
                    href="https://github.com/gibsonmurray/ghooks-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <SquareTerminalIcon /> ghooks cli - install said^ react
                    hooks
                </a>
                <a
                    href="https://github.com/gibsonmurray/gmake"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 underline"
                >
                    <BlocksIcon /> gmake - quickstart a react project
                </a>
            </div>

            <span className="w-full">thanks for checking me out, cheers!</span>
        </div>
    )
}

export default Content
