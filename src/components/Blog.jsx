import {
    Box,
    Flex,
    Text,
    useColorMode,
    chakra,
    Spacer,
    Heading,
} from "@chakra-ui/react";
import Link from "next/link";
import BlogTag from "@/components/BlogTag";
import { parseISO, formatDistance } from "date-fns";

export default function BlogLayout({ posts }) {
    const { colorMode } = useColorMode();

    return (
        <Box maxWidth="3xl" mx="auto">
            <Heading as="h1" fontSize="5xl" textAlign="center">
                Blog Posts
            </Heading>
            <Box mt={10}>
                {posts.length > 0
                    ? posts.map((post, index) => (
                          <Link href={`/blog/${post.slug}`} key={index}>
                              <a>
                                  <Box
                                      background={
                                          colorMode == "dark"
                                              ? "gray.800"
                                              : "gray.100"
                                      }
                                      padding={4}
                                      borderRadius="xl"
                                      borderWidth={1}
                                      borderColor={
                                          colorMode == "dark"
                                              ? "gray.700"
                                              : "gray.300"
                                      }
                                      mb={5}
                                      transition="transform .3s"
                                      _hover={{
                                          transform: "translateY(-3px);",
                                      }}
                                  >
                                      <Flex>
                                          <Box>
                                              {post.tags.map((tag, index) => (
                                                  <BlogTag
                                                      mr={2}
                                                      mb={2}
                                                      key={index}
                                                  >
                                                      {tag}
                                                  </BlogTag>
                                              ))}
                                          </Box>
                                          <Spacer />
                                          <Text>
                                              {formatDistance(
                                                  new Date(
                                                      parseISO(post.publishedAt)
                                                  ),
                                                  Date.now()
                                              )}{" "}
                                              ago
                                          </Text>
                                      </Flex>
                                      <Heading
                                          as="h2"
                                          fontSize="3xl"
                                          lineHeight={1}
                                          mb={3}
                                      >
                                          {post.title}
                                      </Heading>
                                      <Text>{post.summary}</Text>
                                  </Box>
                              </a>
                          </Link>
                      ))
                    : "No posts found"}
            </Box>
        </Box>
    );
}
