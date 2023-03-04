export function applyDefaultLayout() {
    return function (tree, file) {
        file.data.astro.frontmatter.layout = "@layouts/Post.astro";
    };
}
