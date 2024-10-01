import $ from "jquery"

export function formatChips() {
    const $chips = $(".skill-chip")
    console.log($chips)
    $chips.each((_, chip) => {
        const $chip = $(chip)
        const text = $chip.text().toLowerCase()
        if (text.includes("javascript")) {
            formatJSChip($chip)
        } else if (text.includes("typescript")) {
            formatTSChip($chip)
        } else if (text.includes("html")) {
            formatHTMLChip($chip)
        } else if (text.includes("css")) {
            formatCSSChip($chip)
        } else if (text.includes("react")) {
            formatReactChip($chip)
        } else if (text.includes("framer")) {
            formatFramerChip($chip)
        } else if (text.includes("vue")) {
            formatVueChip($chip)
        }
    })
}

function formatJSChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#fde047",
        color: "#000",
        border: "1px solid #facc15",
    })
}

function formatTSChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#1d4ed8",
        color: "#000",
        border: "1px solid #1e40af",
    })
}

function formatHTMLChip($chip: JQuery<HTMLElement>) {
    $chip.css({
        "background-color": "#ea580c",
        color: "#fff",
        border: "1px solid #c2410c",
    })
}

function formatCSSChip($chip: JQuery<HTMLElement>) {
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
