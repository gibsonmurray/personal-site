import InlineLink from "./InlineLink"

export function GSAPLink() {
    return (
        <InlineLink
            href="https://gsap.com/"
            text="GSAP"
            className="text-green-500"
            newTab
        />
    )
}

export function JavaScriptLink() {
    return (
        <InlineLink
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            text="JavaScript"
            className="text-amber-400"
            newTab
        />
    )
}

export function HTMLLink() {
    return (
        <InlineLink
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            text="HTML"
            className="text-orange-600"
            newTab
        />
    )
}

export function CSSLink() {
    return (
        <InlineLink
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            text="CSS"
            className="text-sky-600"
            newTab
        />
    )
}

export function CodepenLink() {
    return (
        <InlineLink
            href="https://codepen.io/gibsonmurray"
            text="Codepen"
            className="text-zinc-800"
            newTab
        />
    )
}

export function ReactLink() {
    return (
        <InlineLink
            href="https://react.dev/"
            text="React"
            className="text-blue-400"
            newTab
        />
    )
}

export function NextLink() {
    return (
        <InlineLink
            href="https://nextjs.org/"
            text="Next.js"
            className="text-[#000]"
            newTab
        />
    )
}

export function TailwindLink() {
    return (
        <InlineLink
            href="https://tailwindcss.com/"
            text="Tailwind"
            className="text-cyan-500"
            newTab
        />
    )
}

export function FramerMotionLink() {
    return (
        <InlineLink
            href="https://www.framer.com/motion/"
            text="Framer Motion"
            className="text-purple-700"
            newTab
        />
    )
}

export function JQueryLink() {
    return (
        <InlineLink
            href="https://jquery.com/"
            text="jQuery"
            className="text-blue-700"
            newTab
        />
    )
}
