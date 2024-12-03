export type Song = {
    id: string
    title: string
    artist: string
    image: string
    audio: string
}

export const songs: Song[] = [
    {
        id: "self-love",
        title: "Self Love (Spider-Man: Across the Spider-Verse)",
        artist: "Metro Boomin, Coi Leray",
        image: "https://i.scdn.co/image/ab67616d0000b2736ed9aef791159496b286179f",
        audio: "https://ywczzzgqahgnnxdtodap.supabase.co/storage/v1/object/public/assets/demos/music-widget/audio/self-love.mp3",
    },
    {
        id: "baby-im-back",
        title: "BABY I'M BACK",
        artist: "The Kid LAROI",
        image: "https://i.scdn.co/image/ab67616d0000b273127bb9583e9861edbcde38f6",
        audio: "https://ywczzzgqahgnnxdtodap.supabase.co/storage/v1/object/public/assets/demos/music-widget/audio/baby-im-back.mp3",
    },
    {
        id: "wine-into-water",
        title: "Wine Into Water",
        artist: "Morgan Wallen",
        image: "https://i.scdn.co/image/ab67616d0000b273705079df9a25a28b452c1fc9",
        audio: "https://ywczzzgqahgnnxdtodap.supabase.co/storage/v1/object/public/assets/demos/music-widget/audio/wine-into-water.mp3",
    },
    {
        id: "parachute",
        title: "Parachute",
        artist: "Arden Jones",
        image: "https://i.scdn.co/image/ab67616d0000b273aa8670465c4b07c410507e5d",
        audio: "https://ywczzzgqahgnnxdtodap.supabase.co/storage/v1/object/public/assets/demos/music-widget/audio/parachute.mp3",
    },
].reverse()
