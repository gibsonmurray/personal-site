"use client"

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Logo from '../Logo'
import SplitText from '../SplitText'
const Header = () => {
    const scope = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.to('.split-text > *', {
            opacity: 1,
            delay: 0.8,
            stagger: 0.1,
        })
    }, { scope })

    return (
        <div ref={scope} className="flex items-center justify-center gap-3">
            <Logo className="w-8 stroke-black stroke-[14px] opacity-0" />
            <SplitText className="font-semibold text-3xl split-text *:opacity-0">
                gibson
            </SplitText>
        </div>
    )
}

export default Header