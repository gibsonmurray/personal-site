function Row(props: { children: React.ReactNode }) {
    const { children } = props
    return <div className="center gap-1 md:gap-4 min-h-[100px]">{children}</div>
}

export default Row
