import { getPostSlugs, getPostBySlug } from "@/lib/blog";
import PostLayout from "@/components/Post";

export default function Post({ source, data }) {
    return <PostLayout source={source} data={data} />;
}

export async function getStaticProps({ params }) {
    const { source, data } = await getPostBySlug(params.slug);

    return {
        props: {
            source,
            data,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPostSlugs();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.replace(".mdx", ""),
                },
            };
        }),
        fallback: false,
    };
}
