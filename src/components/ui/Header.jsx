import {
    HStack,
    Spacer,
    chakra,
    IconButton,
    Box,
    Link as CLink,
    useColorMode,
    Button,
    Portal,
    Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaSun, FaMoon, FaTimes, FaBars } from "react-icons/fa";
import React, { useState } from "react";

function _Link({ href, colorMode, children }) {
    return (
        <Link href={href} passHref>
            <CLink
                px={6}
                py={2}
                _hover={{
                    background: colorMode == "dark" ? "gray.800" : "gray.200",
                }}
                rounded="md"
                fontWeight="semibold"
            >
                {children}
            </CLink>
        </Link>
    );
}

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { y: 0 },
        closed: { y: "-100%" },
    };

    const menuItems = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "About",
            url: "/about",
        },
        {
            title: "Blog",
            url: "/blog",
        },
    ];

    return (
        <>
            <HStack py={6}>
                <Link href="/">
                    <a>
                        <Box position="relative" width="50px" height="50px">
                            <Image
                                src="/images/logo.png"
                                layout="fill"
                                objectFit="cover"
                            />
                        </Box>
                    </a>
                </Link>
                <Spacer />

                {/* Desktop menu */}
                <HStack spacing={4} display={{ base: "none", md: "block" }}>
                    {menuItems.map((item, index) => (
                        <_Link
                            key={index}
                            href={item.url}
                            colorMode={colorMode}
                        >
                            {item.title}
                        </_Link>
                    ))}
                    <IconButton
                        onClick={toggleColorMode}
                        icon={colorMode == "dark" ? <FaMoon /> : <FaSun />}
                        background="transparent"
                    />
                </HStack>

                {/* Mobile menu */}
                <IconButton
                    icon={<FaBars />}
                    onClick={() => setIsOpen(true)}
                    display={{ base: "flex", md: "none" }}
                />
            </HStack>
            <Portal>
                <motion.div
                    // style={{ display: "contents" }}
                    variants={variants}
                    animate={isOpen ? "open" : "closed"}
                    style={{ position: "fixed", top: 0, left: 0, right: 0 }}
                    transition={{ ease: "easeInOut" }}
                    initial="closed"
                >
                    <Box
                        padding={4}
                        background={
                            colorMode == "dark" ? "gray.700" : "gray.300"
                        }
                        display={{ base: "block", md: "none" }}
                    >
                        <Flex>
                            <Box width="50px" height="50px" position="relative">
                                <Image src="/images/logo.png" layout="fill" />
                            </Box>
                            <Spacer />
                            <IconButton
                                onClick={() => setIsOpen(false)}
                                icon={<FaTimes />}
                                mr="auto"
                                float="right"
                            />
                        </Flex>
                        <Box mt={5}>
                            {menuItems.map((item, index) => (
                                <Link href={item.url} key={index}>
                                    <Button
                                        display="block"
                                        width="100%"
                                        background="transparent"
                                        mt={2}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Button>
                                </Link>
                            ))}
                            <Button
                                display="block"
                                width="100%"
                                background="transparent"
                                mt={2}
                                onClick={toggleColorMode}
                            >
                                Theme: {colorMode}
                            </Button>
                        </Box>
                    </Box>
                </motion.div>
            </Portal>
        </>
    );
}
