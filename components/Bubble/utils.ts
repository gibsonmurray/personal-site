export function getMaxScale(
    column: number,
    totalColumns: number,
    options: {
        minScale?: number
        scaleDecrement?: number
        centerBoost?: number
    } = {},
): number {
    const { minScale = 0.7, scaleDecrement = 0.1, centerBoost = 0 } = options

    const isEven = totalColumns % 2 === 0
    const middleColumn = Math.floor(totalColumns / 2)
    let distanceFromMiddle

    if (isEven && (column === middleColumn || column === middleColumn - 1)) {
        distanceFromMiddle = 0
    } else {
        distanceFromMiddle = Math.abs(
            column - (isEven ? middleColumn - 0.5 : middleColumn),
        )
    }

    const maxScale = 1 + centerBoost - distanceFromMiddle * scaleDecrement
    return Math.max(minScale, maxScale)
}

export function getEasePrefix(maxScale: number, threshold: number) {
    return maxScale > threshold && window.innerWidth > 768 ? "power4" : "power1"
}
