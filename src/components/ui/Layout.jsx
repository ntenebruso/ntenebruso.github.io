import { Container, Box, useColorMode } from "@chakra-ui/react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function Layout({ children }) {
    const { colorMode } = useColorMode();

    return (
        <Box
            background={colorMode == "dark" ? "gray.900" : "white"}
            minHeight="100vh"
        >
            <Container mx="auto" maxW="container.xl">
                <Header />
                {children}
                <Footer />
            </Container>
        </Box>
    );
}
