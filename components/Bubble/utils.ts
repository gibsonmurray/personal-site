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
    let newScale = Math.max(1 - Math.pow(dist / 500, 4), 0)
    return parseFloat(newScale.toFixed(3)) // Round to the nearest thousandth
}

export const getBubbleY = (bubble: HTMLElement | null) => {
    if (!bubble) return 0
    const dist = distanceFromCenter(bubble)
    const maxDist = 470
    const maxTranslation = 80

    const rect = bubble.getBoundingClientRect()
    const center = getCenterPoint()
    const y = rect.top + rect.height / 2

    const margin = 1 // Margin of 1px

    if (Math.abs(y - center.y) <= margin) return 0 // No translation if within the margin

    const direction = y < center.y ? 1 : -1 // Determine if the bubble is above or below the center

    // Use an exponential function for translation
    const exponentialFactor = 3 // Adjust this factor to control the exponential growth
    const translation = direction * maxTranslation * Math.pow(dist / maxDist, exponentialFactor)

    return translation
}
