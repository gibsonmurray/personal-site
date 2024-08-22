function Row(props: { children: React.ReactNode; offsetY: number, offsetX: number }) {
    const { children, offsetY, offsetX } = props;
    return (
        <div
            className="flex items-center justify-center gap-2"
            style={{
                translate: `${offsetX}px ${offsetY}px`,
            }}
        >
            {children}
        </div>
    );
}

export default Row;
