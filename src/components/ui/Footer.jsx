import {
    Box,
    HStack,
    Flex,
    Text,
    Link,
    IconButton,
    Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <Flex
            py={10}
            justifyContent="space-between"
            alignItems="center"
            maxWidth="4xl"
            mx="auto"
        >
            <Link
                href="https://github.com/ntenebruso/ntenebruso.github.io"
                isExternal
            >
                Source code on GitHub
            </Link>
            <Box width="50px" height="50px" position="relative">
                <Image src="/images/logo.png" layout="fill" objectFit="cover" />
            </Box>
            <HStack>
                <Tooltip label="Github" placement="top">
                    <IconButton
                        icon={<FaGithub />}
                        borderRadius="full"
                        as={Link}
                        href="https://github.com/ntenebruso/"
                        isExternal
                    />
                </Tooltip>
                <Tooltip label="Instagram" placement="top">
                    <IconButton
                        icon={<FaInstagram />}
                        borderRadius="full"
                        as={Link}
                        href="https://www.instagram.com/nick_tenebruso/"
                        isExternal
                    />
                </Tooltip>
                <Tooltip label="YouTube" placement="top">
                    <IconButton
                        icon={<FaYoutube />}
                        borderRadius="full"
                        as={Link}
                        href="https://www.youtube.com/channel/UCZwwwGXyAJJXESSVDV_ttwQ/"
                        isExternal
                    />
                </Tooltip>
            </HStack>
        </Flex>
    );
}
