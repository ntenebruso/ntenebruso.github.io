import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import codeTitle from "remark-code-titles";

const postsPath = path.join(process.cwd(), "content", "posts");

export async function getPostSlugs() {
    const posts = fs
        .readdirSync(postsPath)
        .filter((file) => path.extname(file) == ".mdx");
    return posts;
}

export async function getAllPosts() {
    const files = fs
        .readdirSync(postsPath)
        .filter((file) => path.extname(file) == ".mdx");

    return Promise.all(
        files.map(async (slug) => {
            const post = fs.readFileSync(path.join(postsPath, slug), "utf-8");
            const { data } = matter(post);
            return { ...data, slug: slug.replace(".mdx", "") };
        })
    );
}

export async function getPostBySlug(slug) {
    const post = fs.readFileSync(path.join(postsPath, slug + ".mdx"), "utf-8");
    const { data, content } = matter(post);
    const source = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [codeTitle],
            rehypePlugins: [rehypePrism, rehypeSlug, rehypeAutolinkHeadings],
        },
    });

    return { data, source };
}
