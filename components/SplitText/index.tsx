import { FC, ReactNode } from 'react'

type SplitTextProps = {
    children: ReactNode
    className?: string
}

const SplitText: FC<SplitTextProps> = ({ children, className }) => {
    const letters = children?.toString().split('')

    return (
        <span className={className}>
            {letters?.map((letter, index) => (
                <span key={index}>{letter}</span>
            ))}
        </span>
    )
}

export default SplitText