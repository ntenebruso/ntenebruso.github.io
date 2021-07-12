import Layout from "../components/ui/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <About />
                <Projects />
            </Layout>
        </>
    )
}