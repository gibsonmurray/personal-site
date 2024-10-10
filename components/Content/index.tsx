"use client"

import { CodepenIcon, FileTextIcon, GithubIcon, LinkedinIcon, BookOpenIcon, TwitterIcon } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Content = () => {

    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to('.content > *', {
            opacity: 1,
            duration: 1,
            y: 0,
            delay: 2,
            stagger: 0.05,
            ease: 'back.out',
        })
    }, { scope })

    return (
        <div ref={scope} className="content flex items-center justify-center gap-4 flex-col font-semibold text-xl px-4 *:opacity-0 *:translate-y-3">
            <span>
                i am a front end web developer which means i build cool stuff a lot of the time.
            </span>
            <span>
                my specialty is in interaction design using tools like react and tailwind.
            </span>
            <span>
                if you want to see my work you can click on these things:
            </span>

            <div className="flex items-start justify-center flex-col gap-3 py-4">
                <a href="https://codepen.io/gibsonmurray" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
                    <CodepenIcon /> codepen
                </a>

                <a href="https://x.com/gibsonsmurray" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
                    <TwitterIcon /> twitter/x
                </a>

                <a href="https://github.com/gibsonmurray" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
                    <GithubIcon /> github
                </a>
                <a href="https://read.cv/gibsonmurray" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
                    <FileTextIcon /> resume/cv
                </a>
                <a href="https://www.linkedin.com/in/gibsonmurray/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 underline">
                    <LinkedinIcon /> linkedin
                </a>
            </div>

            <span>
                on the side i write stories and blog about design and development.
            </span>

            <div className="flex items-start justify-center flex-col gap-3 py-4">
                <span className="flex items-center gap-2 cursor-not-allowed text-zinc-500">
                    <BookOpenIcon /> writings coming soon
                </span>
            </div>

            <span>
                thanks for stopping by!
            </span>

        </div>
    )
}

export default Content
