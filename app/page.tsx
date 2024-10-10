import Nav from "@/components/Nav"
import Header from "@/components/Header"

const Home = () => {
    return (
        <main className="flex min-h-svh flex-col items-center justify-between container max-w-sm mx-auto py-10">
            <Header />
            <Nav />
        </main>
    )
}

export default Home