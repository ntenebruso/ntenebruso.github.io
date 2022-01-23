import {
    Box,
    Button,
    VStack,
    Heading,
    Flex,
    Tag,
    Text,
    AspectRatio,
    useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import data from "@/content/projects.json";

export default function Projects() {
    const { colorMode } = useColorMode();

    function getColorScheme(name) {
        switch (name.toLowerCase()) {
            case "vue":
                return "green";
            case "svelte":
            case "sapper":
                return "orange";
            case "firebase":
                return "yellow";
            default:
                return "blue";
        }
    }

    return (
        <Box>
            <Heading
                as="h2"
                textAlign="center"
                fontSize="5xl"
                mb={4}
                id="projects"
            >
                Projects
            </Heading>
            <VStack>
                {data.map((project, index) => (
                    <Flex
                        key={index}
                        background={
                            colorMode == "dark" ? "gray.800" : "gray.50"
                        }
                        padding={4}
                        rounded="md"
                        alignItems="center"
                        gap={2}
                        width="90%"
                        maxWidth="4xl"
                        direction={{ base: "column", md: "row" }}
                    >
                        <AspectRatio
                            width="100%"
                            ratio={16 / 9}
                            position="relative"
                            rounded="md"
                            overflow="hidden"
                        >
                            <Image
                                src={project.img}
                                layout="fill"
                                objectFit="cover"
                            />
                        </AspectRatio>
                        <VStack spacing={1} display="block" width="100%">
                            <Box>
                                {project.tags.map((tag) => (
                                    <Tag
                                        key={tag}
                                        colorScheme={getColorScheme(tag)}
                                        mr={2}
                                        mb={2}
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </Box>
                            <Heading as="h3" fontSize="2xl">
                                {project.name}
                            </Heading>
                            <Text>{project.description}</Text>
                        </VStack>
                        <Box>
                            <Button
                                as="a"
                                href={project.projecturl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </Button>
                        </Box>
                    </Flex>
                ))}
            </VStack>
        </Box>
    );
}
