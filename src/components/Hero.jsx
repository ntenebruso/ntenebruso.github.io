import {
    chakra,
    Text,
    VStack,
    Stack,
    Button,
    Box,
    AspectRatio,
    useColorMode,
    Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
    const { colorMode } = useColorMode();

    return (
        <Box height="calc(100vh - 74px)">
            <VStack
                justifyContent="center"
                textAlign="center"
                spacing={2}
                height="100%"
                width={{ base: "initial", md: "50%" }}
            >
                <Heading
                    fontSize="5xl"
                    backgroundClip="text"
                    bgGradient={
                        colorMode == "dark"
                            ? "linear-gradient(to left, #00944d, #00bf64)"
                            : "linear-gradient(to left, #00944d, #00944d)"
                    }
                    lineHeight={1}
                >
                    Hi, I&apos;m Nick Tenebruso
                </Heading>
                <Heading as="h2" fontSize="2xl" fontWeight="semibold" mb={4}>
                    I&apos;m a developer who likes designing and programming
                    open source projects
                </Heading>
                <Stack direction={{ base: "column", md: "row" }} pt={4}>
                    <Button
                        onClick={() =>
                            gsap.to(window, { scrollTo: "#projects" })
                        }
                    >
                        My projects
                    </Button>
                    <Button as="a" href="mailto:nickten2006@gmail.com">
                        Contact me
                    </Button>
                </Stack>
            </VStack>
            <Box
                position="absolute"
                width="45vw"
                height="calc(100vh - 74px)"
                right={0}
                top="74px"
                clipPath="polygon(0 21%, 100% 0, 100% 100%, 0 87%)"
                background={
                    colorMode == "dark"
                        ? "linear-gradient(to right, #00944d, #00361c)"
                        : "#00944d"
                }
                alignItems="center"
                justifyContent="center"
                display={{ base: "none", md: "flex" }}
            >
                <AspectRatio position="relative" ratio={1 / 1} width="80%">
                    <Image layout="fill" src="/images/hero.png" priority />
                </AspectRatio>
            </Box>
        </Box>
    );
}
