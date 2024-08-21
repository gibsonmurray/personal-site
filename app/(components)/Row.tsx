function Row(props: { children: React.ReactNode; offset: number }) {
    const { children, offset } = props;
    return (
        <div
            className={`flex items-center justify-center gap-2 translate-y-[${offset}px]`}
        >
            {children}
        </div>
    );
}

export default Row;
