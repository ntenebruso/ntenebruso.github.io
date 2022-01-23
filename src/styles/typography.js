import { theme } from "@chakra-ui/react";
import { css } from "@emotion/react";

const typography = css`
    .article h2,
    .article h3,
    .article h4,
    .article h5,
    .article h6 {
        font-size: ${theme.fontSizes["xl"]};
        font-weight: ${theme.fontWeights.bold};
        line-height: 1;
        margin-bottom: ${theme.space[4]};
    }

    .article h2 {
        font-size: ${theme.fontSizes["3xl"]};
    }

    .article h3 {
        font-size: ${theme.fontSizes["2xl"]};
    }

    .article p {
        margin-bottom: ${theme.space[6]};
    }

    .article a {
        color: ${theme.colors.green[200]};
        position: relative;
    }

    .article a:hover {
        text-decoration: underline;
    }

    .article .remark-code-title {
        color: ${theme.colors.white};
        position: relative;
        top: 7px;
        margin-top: -7px;
        background: ${theme.colors.gray[700]};
        padding: ${theme.space[2]};
        border-top-left-radius: ${theme.radii.md};
        border-top-right-radius: ${theme.radii.md};
    }

    .article .icon-link::after {
        content: "#";
        position: absolute;
        left: -30px;
        width: calc(100% + 30px);
        display: none;
    }

    .article *:hover .icon-link::after {
        display: inline;
    }
`;

export default typography;
