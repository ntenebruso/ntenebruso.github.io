const withTm = require("next-transpile-modules")(["gsap"]);
const isProd = process.env.NODE_ENV == "production";

module.exports = withTm({
    images: {
        domains: ["cdn.statically.io"],
        assetPrefix: isProd
            ? "https://cdn.statically.io/gh/ntenebruso/ntenebruso.github.io/gh-pages/"
            : "",
        loader: "imgix",
        path: isProd
            ? "https://cdn.statically.io/gh/ntenebruso/ntenebruso.github.io/gh-pages/"
            : "http://localhost:3000/",
    },
});
