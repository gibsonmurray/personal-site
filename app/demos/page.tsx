import { MedalIcon, ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

const DemosPage = () => {
    return (
        <main className="container flex min-h-svh max-w-md flex-col items-center justify-start gap-3 py-10">
            <div className="relative flex items-center justify-center gap-2">
                <Link href="/" className="absolute -left-24 p-2">
                    <ChevronLeftIcon className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl font-bold">demos</h1>
            </div>
            <ul className="list-none p-0 *:p-0">
                <li>
                    <a
                        href="/demos/olympic-medals"
                        className="flex items-center gap-2 underline"
                    >
                        <MedalIcon className="h-5 w-5" />
                        olympic medals
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default DemosPage
