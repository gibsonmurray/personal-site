"use client"

import { CodeXmlIcon } from "lucide-react"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Logo from "../Logo"

const Footer = () => {
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to('.footer > *', {
            opacity: 1,
            x: 0,
            delay: 4,
            stagger: 0.1,
            duration: 1,
            ease: 'back.out',
        })
    }, { scope })

    return (
        <div ref={scope} className="footer flex items-center justify-center gap-2 text-zinc-500 text-sm *:opacity-0 *:translate-x-3">
            <span>made</span>
            <span>in</span>
            <span>the</span>
            <span>usa</span>
        </div>
    )
}

export default Footer