import Image from "next/image"
import { capitalize } from "@/utils"
import Nav from "@/components/Nav"

const images = [
    "sticky-notes.webp",
    "landing-page-hero.webp",
    "parallax-seasons.webp",
    "pressure-grid.webp",
    "olympic-medals.webp",
]

const titles = images.map((image) => {
    const title = image.split(/-|[.]/)
    return `${capitalize(title[0])} ${capitalize(title[1])}`
})

export default function Home() {
    return (
        <main className="flex h-svh flex-col items-center justify-between container max-w-sm mx-auto py-10">
            <Image
                src="/prof-pic.webp"
                alt="Gibson Murray"
                width={100}
                height={100}
                className="rounded-full"
            />
            <div className="flex items-center justify-center flex-col gap-8">
                <div className="w-full h-28 relative flex items-center justify-center">
                    {images.map((image, index) => (
                        <div
                            className="h-full aspect-[5/3] absolute border-4 border-white rounded-lg overflow-hidden shadow-md"
                            key={index}
                        >
                            <Image
                                src={`/thumbnails/${image}`}
                                alt={`${titles[index]} Thumbnail`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="text-3xl font-extrabold text-center">
                        The only web developer you&apos;ll ever need
                    </h1>
                    <p className="text-center leading-snug">
                        Custom components tailored just for you, elevating your
                        digital presence with pixel-perfect designs and seamless
                        functionality.
                    </p>
                    <button className="bg-black text-white px-4 py-2 gap-1 font-semibold rounded-full">
                        Let&apos;s create for $250
                    </button>
                    <div className="flex flex-col items-center justify-center text-sm gap-1 text-zinc-500 text-center">
                        <p>5+ years experience</p>
                        <p>Design + Development</p>
                        <p>*3-5 day delivery</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-xs text-zinc-600 text-center">
                <span>
                    *Business hours are 9am-5pm EST Monday-Friday. Depending on
                    demand, delivery can take longer.
                </span>
                <span>Gibson Murray © 2024</span>
            </div>
            <Nav />
        </main>
    )
}
