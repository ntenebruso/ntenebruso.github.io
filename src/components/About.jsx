import {
    Box,
    Text,
    chakra,
    Flex,
    UnorderedList,
    ListItem,
    ListIcon,
    useColorMode,
    Heading,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function About() {
    const { colorMode } = useColorMode();

    return (
        <Box maxWidth="2xl" mx="auto">
            <Flex alignItems="center">
                <Box
                    borderRadius="full"
                    width="100px"
                    height="100px"
                    position="relative"
                    mr={2}
                >
                    <Image src="/images/pfp.svg" layout="fill" />
                </Box>
                <Box>
                    <Heading
                        as="h1"
                        fontSize="4xl"
                        lineHeight={1}
                        bgClip="text"
                        bgGradient={
                            colorMode == "dark"
                                ? "linear-gradient(to left, #00944d, #00bf64)"
                                : "linear-gradient(to left, #00944d, #00944d)"
                        }
                    >
                        Nick Tenebruso
                    </Heading>
                    <Text fontSize="lg">About me</Text>
                </Box>
            </Flex>
            <Box>
                <Text mt={5} fontWeight="bold">
                    Student that has an interest in full-stack web development
                    with attention to detail.
                </Text>
                <Text mt={5}>
                    I am currently 15 years old and I have been doing web
                    development for three years. I mainly work on coding
                    projects as a hobby of mine and I have always had a strong
                    passion for programming.
                </Text>

                <Heading as="h2" fontSize="3xl" mt={7} display="inline-block">
                    Skills
                </Heading>
                <Text>
                    I am experienced with the following technologies and
                    programming languages:
                </Text>
                <Flex className="skills" justifyContent="space-around">
                    <Box>
                        <UnorderedList styleType="none" margin={0}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                HTML, CSS, and Javascript/Typescript
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                React
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Vue
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Svelte
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                PHP
                            </ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <UnorderedList styleType="none" margin={0}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                MySQL/Mongodb
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Wordpress
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                C#
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                C++
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                Python
                            </ListItem>
                        </UnorderedList>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}
