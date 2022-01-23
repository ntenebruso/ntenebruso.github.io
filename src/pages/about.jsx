import About from "@/components/About";
import { NextSeo } from "next-seo";

export default function AboutPage() {
    return (
        <>
            <NextSeo
                title="About Me"
                description="I am a student that has an interest in full-stack web development with attention to detail."
            />
            <About />
        </>
    );
}
