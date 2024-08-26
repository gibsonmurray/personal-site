import InlineLink from "./InlineLink"
import { useAtom } from "jotai"

import { themeState } from "./ThemeToggle"

export function GSAPLink() {
    return (
        <InlineLink
            href="https://gsap.com/"
            text="GSAP"
            className="text-[#0AE447]"
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
    const [theme] = useAtom(themeState)
    return (
        <InlineLink
            href="https://codepen.io/gibsonmurray"
            text="Codepen"
            className={theme === "dark" ? "text-zinc-200" : "text-zinc-800"}
            newTab
        />
    )
}

export function ReactLink() {
    return (
        <InlineLink
            href="https://react.dev/"
            text="React"
            className="text-[#57C4DC]"
            newTab
        />
    )
}
