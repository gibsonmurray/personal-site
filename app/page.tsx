import Header from "@/components/Header"
import Content from "@/components/Content"
import Footer from "@/components/Footer"

const Home = () => {
    return (
        <main className="flex min-h-svh flex-col items-center justify-between gap-10 container max-w-md mx-auto py-10">
            <Header />
            <Content />
            <Footer />
        </main>
    )
}

export default Home