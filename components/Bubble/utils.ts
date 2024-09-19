const getCenterPoint = () => {
    const vh = window.innerHeight
    const vw = window.innerWidth
    return { x: Math.round(vw / 2), y: Math.round(vh / 2) }
}

const distanceFromCenter = (bubble: HTMLElement | null) => {
    if (!bubble) return 0
    const rect = bubble.getBoundingClientRect()
    const center = getCenterPoint()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    return Math.sqrt(Math.pow(center.x - x, 2) + Math.pow(center.y - y, 2))
}

export const getBubbleScale = (bubble: HTMLElement | null) => {
    if (!bubble) return 0
    const dist = distanceFromCenter(bubble)
    let newScale = Math.max(1 - Math.pow(dist / 470, 3), 0)
    return parseFloat(newScale.toFixed(3)) // Round to the nearest thousandth
}
