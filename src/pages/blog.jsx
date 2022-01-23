import { getAllPosts } from "@/lib/blog";
import BlogLayout from "@/components/Blog";
import { NextSeo } from "next-seo";

export default function Blog({ posts }) {
    return (
        <>
            <NextSeo title="Blog" />
            <BlogLayout posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts,
        },
    };
}
