import $ from "jquery"

export function formatChips() {
    const $chips = $(".skill-chip")
    $chips.each((_, chip) => {
        const $chip = $(chip)
        const text = $chip.text().toLowerCase()
        if (text.includes("javascript")) {
            formatJsChip($chip)
        } else if (text.includes("typescript")) {
            formatTsChip($chip)
        } else if (text.includes("html")) {
            formatHtmlChip($chip)
        } else if (text.includes("css")) {
            formatCssChip($chip)
        } else if (text.includes("react")) {
            formatReactChip($chip)
        } else if (text.includes("framer")) {
            formatFramerChip($chip)
        } else if (text.includes("vue")) {
            formatVueChip($chip)
        } else if (text.includes("sass")) {
            formatSassChip($chip)
        } else if (text.includes("jquery")) {
            formatJqueryChip($chip)
        } else if (text.includes("gsap")) {
            formatGsapChip($chip)
        }
    })
}

function formatJsChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#fde047",
        color: "#000",
        border: "1px solid #facc15",
    })
}

function formatTsChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#1d4ed8",
        color: "#fff",
        border: "1px solid #1e40af",
    })
}

function formatJqueryChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#2563eb",
        color: "#fff",
        border: "1px solid #1d4ed8",
    })
}

function formatHtmlChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#ea580c",
        color: "#fff",
        border: "1px solid #c2410c",
    })
}

function formatCssChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#60a5fa",
        color: "#fff    ",
        border: "1px solid #3b82f6",
    })
}

function formatReactChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#38bdf8",
        color: "#fff",
        border: "1px solid #0ea5e9",
    })
}

function formatFramerChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#8b5cf6",
        color: "#fff",
        border: "1px solid #7c3aed",
    })
}

function formatVueChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#10b981",
        color: "#fff",
        border: "1px solid #059669",
    })
}

function formatSassChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#ec4899",
        color: "#fff",
        border: "1px solid #c026d3",
    })
}

function formatGsapChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#22c55e",
        color: "#fff",
        border: "1px solid #16a34a",
    })
}
