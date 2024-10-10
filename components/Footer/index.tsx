import { CopyrightIcon } from "lucide-react"

const Footer = () => {
    return (
        <div className="flex items-center justify-center gap-2 text-zinc-500 text-sm">
            <span>gibson murray</span>
            <CopyrightIcon className="h-3 w-3" />
            <span>2024</span>
        </div>
    )
}

export default Footer