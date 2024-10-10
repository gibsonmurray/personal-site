import Nav from "@/components/Nav"
import Logo from "@/components/Logo"

const Home = () => {
    return (
        <main className="flex min-h-svh flex-col items-center justify-between container max-w-sm mx-auto py-10">
            <Logo className="w-14 stroke-black stroke-[14px] opacity-0" />
            <Nav />
        </main>
    )
}

export default Home