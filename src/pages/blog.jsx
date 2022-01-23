import { getAllPosts } from "@/lib/blog";
import BlogLayout from "@/components/Blog";

export default function Blog({ posts }) {
    return <BlogLayout posts={posts} />;
}

export async function getStaticProps() {
    const posts = await getAllPosts();

    return {
        props: {
            posts,
        },
    };
}
