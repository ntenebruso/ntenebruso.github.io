import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Layout from "@/components/ui/Layout";
import { Global } from "@emotion/react";
import typography from "@/styles/typography";
import theme from "@/lib/theme";
import "@/styles/prism.css";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";

import "@fontsource/work-sans/100.css";
import "@fontsource/work-sans/200.css";
import "@fontsource/work-sans/300.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/work-sans/800.css";
import "@fontsource/work-sans/900.css";

gsap.registerPlugin(ScrollToPlugin);

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Global styles={typography} />
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
