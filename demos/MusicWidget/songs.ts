export type Song = {
    id: string
    title: string
    artist: string
    image: string
}

export const songs: Song[] = [
    {
        id: "self-love",
        title: "Self Love (Spider-Man: Across the Spider-Verse)",
        artist: "Metro Boomin, Coi Leray",
        image: "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
    },
    {
        id: "baby-im-back",
        title: "BABY I'M BACK",
        artist: "The Kid LAROI",
        image: "https://i.scdn.co/image/ab67616d0000b273127bb9583e9861edbcde38f6",
    },
    {
        id: "wine-into-water",
        title: "Wine Into Water",
        artist: "Morgan Wallen",
        image: "https://i.scdn.co/image/ab67616d0000b273705079df9a25a28b452c1fc9",
    },
].reverse()
