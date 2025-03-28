import { TargetAndTransition } from "motion/react"

// Utility functions
const randomBetween = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

const generateUniqueArray = (length: number, min: number, max: number) => {
    const array = []
    let lastValue = null

    for (let i = 0; i < length; i++) {
        let newValue
        do {
            newValue = randomBetween(min, max)
        } while (newValue === lastValue)
        array.push(newValue)
        lastValue = newValue
    }

    return array
}

// Constants
const DURATION_UPPER = 2.3
const DURATION_LOWER = 1.8
const MAX_HEIGHT = 12
const MIN_HEIGHT = 3

const transition: TargetAndTransition["transition"] = {
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
}

// Main function to generate animations
export const generateWaveformAnimations = (
    count: number,
): TargetAndTransition[] => {
    const durations = generateUniqueArray(count, DURATION_LOWER, DURATION_UPPER)

    return Array.from({ length: count }, (_, index) => ({
        height: generateUniqueArray(6, MIN_HEIGHT, MAX_HEIGHT),
        transition: { ...transition, duration: durations[index] },
    }))
}
