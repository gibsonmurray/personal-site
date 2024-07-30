import { cn } from "@/lib/utils"

interface BorderBeamProps {
    className?: string
    size?: number
    duration?: number
    borderWidth?: number
    anchor?: number
    color?: string
    delay?: number
}

const rainbow = [
    "rgb(255, 0, 0, 0.5)",
    "rgb(255, 127, 0, 0.5)",
    "rgb(255, 255, 0, 0.5)",
    "rgb(0, 255, 0, 0.5)",
    "rgb(0, 0, 255, 0.5)",
    "rgb(75, 0, 130, 0.5)",
    "rgb(148, 0, 211, 0.5)",
]

export const BorderBeam = ({
    className,
    size = 200,
    duration = 15,
    anchor = 90,
    borderWidth = 1.5,
    color = undefined,
    delay = 0,
}: BorderBeamProps) => {
    const gradientColors = color ? `${color}, transparent` : rainbow.join(",")

    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": anchor,
                    "--border-width": borderWidth,
                    "--gradient-colors": gradientColors,
                    "--delay": `-${delay}s`,
                } as React.CSSProperties
            }
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
                "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--gradient-colors))] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
                className,
            )}
        />
    )
}
