const withTm = require("next-transpile-modules")(["gsap"]);
const isProd = process.env.NODE_ENV === 'production'

module.exports = withTm({
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/ntenebruso/ntenebruso.github.io/gh-pages/' : '',
});