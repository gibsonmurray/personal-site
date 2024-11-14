import { ReactNode, FC } from "react"

type DemoLayoutProps = {
    children: ReactNode
}

const DemoLayout: FC<DemoLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-svh w-screen flex-col items-center justify-center bg-zinc-50">
            {children}
        </div>
    )
}

export default DemoLayout
