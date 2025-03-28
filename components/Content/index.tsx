import {
    CodepenIcon,
    FileTextIcon,
    GithubIcon,
    LinkedinIcon,
    BlocksIcon,
} from "lucide-react"
import { container, children } from "./animations"
import { motion } from "motion/react"
import Link from "next/link"
import { FC } from "react"
import TextRipple from "@/components/TextRipple"

type ContentProps = { navigateTo: (href: string) => void }

const Content: FC<ContentProps> = ({ navigateTo }) => {
    return (
        <motion.div
            variants={container}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container flex flex-col items-center justify-center gap-4 px-12 text-xl font-semibold *:translate-y-3 *:opacity-0 sm:px-4"
        >
            <motion.span variants={children} className="w-full">
                i am a design engineer which means i cody nice and css good
            </motion.span>
            <motion.span variants={children} className="w-full">
                my speciality is interaction design with react, tailwind, and
                motion.
            </motion.span>
            <motion.span variants={children} className="w-full">
                believe it or not, i also have cs degree.
            </motion.span>
            <motion.span variants={children} className="w-full">
                here&apos;s some more info:
            </motion.span>

            <motion.div
                variants={children}
                className="flex flex-col items-start justify-start gap-3 py-2 text-lg text-zinc-700 *:flex *:items-center *:gap-3 *:underline"
            >
                <Link
                    href="https://codepen.io/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CodepenIcon /> codepen
                </Link>

                <Link
                    href="https://x.com/gibsonsmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!no-underline"
                >
                    <span className="ml-1 text-2xl">𝕏</span>
                    <span className="underline">x/twitter</span>
                </Link>

                <Link
                    href="https://github.com/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon /> github
                </Link>
                <Link
                    href="https://read.cv/gibsonmurray"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileTextIcon /> resume/cv
                </Link>
                <Link
                    href="https://www.linkedin.com/in/gibsonmurray/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon /> linkedin
                </Link>
            </motion.div>

            <motion.span variants={children} className="w-full">
                you're probably here for the demos:
            </motion.span>

            <motion.div
                variants={children}
                className="flex flex-col items-start justify-start gap-3 py-2 text-lg text-zinc-700 *:flex *:items-center *:gap-3"
            >
                <a
                    className="relative cursor-pointer"
                    onClick={() => navigateTo("/demos")}
                >
                    <TextRipple className="absolute -left-11 text-sm font-bold text-blue-500">
                        NEW
                    </TextRipple>
                    <BlocksIcon />
                    <span className="underline">demos</span>
                    <span className="text-zinc-500">micro web projects</span>
                </a>
            </motion.div>

            <motion.span variants={children} className="w-full">
                thanks for checking me out, cheers!
            </motion.span>
        </motion.div>
    )
}

export default Content
