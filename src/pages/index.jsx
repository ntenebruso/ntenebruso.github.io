import Layout from "../components/ui/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Nick Tenebruso&apos;s Portfolio</title>
            </Head>
            <Layout>
                <Hero />
                <About />
                <Projects />
            </Layout>
        </>
    )
}