"use client"

import { FC, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type LogoProps = {
    className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
    const logoRef = useRef<SVGSVGElement>(null)

    useGSAP(() => {
        if (logoRef.current) {
            const paths = logoRef.current.querySelectorAll('path')

            gsap.set(paths, { strokeDasharray: (index, target) => target.getTotalLength() })
            gsap.set(paths, { strokeDashoffset: (index, target) => target.getTotalLength() })

            gsap.to(logoRef.current, {
                opacity: 1,
                duration: 0.5,
            })

            gsap.to(paths, {
                strokeDashoffset: 0,
                duration: 2,
                ease: "power2.inOut",
                stagger: 0.1,
            })
        }
    })

    return (
        <svg className={className} ref={logoRef} width="100%" height="100%" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.6521 150.895C-28.6999 89.5427 32.6518 7.74029 94.0039 7.74021C155.356 7.74012 109.342 156.007 68.4408 115.106C27.5395 74.2046 175.806 28.1912 175.806 89.5432C175.806 150.895 94.0041 212.247 32.6521 150.895Z" strokeLinecap="round" />
        </svg>
    )
}

export default Logo