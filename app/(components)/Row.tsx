function Row(props: {
    children: React.ReactNode
}) {
    const { children } = props
    return (
        <div className="flex items-center justify-center gap-2">{children}</div>
    )
}

export default Row
