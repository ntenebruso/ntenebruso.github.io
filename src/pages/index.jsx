import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { NextSeo } from "next-seo";

export default function Home() {
    return (
        <>
            <NextSeo description="Hi, I'm Nick Tenebruso. I'm a developer who likes designing and programming open source projects." />
            <Hero />
            <Projects />
        </>
    );
}
