"use client"

import Logo from "../Logo"
import SplitText from "../SplitText"
const Header = () => {
    return (
        <div className="flex items-center justify-center gap-3">
            <Logo className="w-8 stroke-black stroke-[14px] opacity-0" />
            <SplitText className="split-text text-3xl font-semibold *:opacity-0">
                gibson
            </SplitText>
        </div>
    )
}

export default Header
