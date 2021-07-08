import Layout from "../components/ui/Layout";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Projects />
            </Layout>
        </>
    )
}