import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        heading: "Work Sans, sans-serif",
        body: "DM Sans, sans-serif",
    },
});

export default theme;
