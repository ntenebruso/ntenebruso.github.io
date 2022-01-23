import {
    Box,
    Text,
    Progress,
    Flex,
    Tag,
    Avatar,
    Heading,
    chakra,
} from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { format, parseISO } from "date-fns";
import BlogTag from "@/components/BlogTag";
import { useEffect, useState } from "react";

export default function PostLayout({ source, data }) {
    const date = format(new Date(parseISO(data.publishedAt)), "MMMM do, y");
    const [scrollVal, setScrollVal] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    function handleScroll() {
        setScrollVal(document.documentElement.scrollTop);
    }

    useEffect(() => {
        // prettier-ignore
        setWindowHeight(document.documentElement.scrollHeight - document.documentElement.clientHeight);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box>
            <Progress
                position="fixed"
                top={0}
                left={0}
                right={0}
                size="xs"
                colorScheme="green"
                background="transparent"
                value={scrollVal}
                max={windowHeight}
            />
            <chakra.article className="article" mx="auto" maxWidth="2xl">
                <Box mb={14}>
                    <Flex gap={2} mb={4}>
                        {data.tags.map((tag, index) => (
                            <BlogTag fontSize="md" px={2} py={1} key={index}>
                                {tag}
                            </BlogTag>
                        ))}
                    </Flex>
                    <Heading as="h1" fontSize="6xl" lineHeight={1} mb={4}>
                        {data.title}
                    </Heading>
                    <Tag colorScheme="green" size="lg" borderRadius="full">
                        <Avatar
                            src={data.author.avatar}
                            size="xs"
                            ml={-1}
                            mr={2}
                        />
                        {data.author.name}
                    </Tag>
                    <Text fontSize="lg" display="inline" verticalAlign="bottom">
                        {" "}
                        &bull; {date}
                    </Text>
                </Box>
                <MDXRemote {...source} />
            </chakra.article>
        </Box>
    );
}
