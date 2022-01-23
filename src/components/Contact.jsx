import { Box, Stack, Icon, chakra } from "@chakra-ui/react";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function Contact() {
    return (
        <Box>
            <chakra.h2 textAlign="center" fontSize="5xl" fontWeight="bold">
                Contact Me
            </chakra.h2>
            <Stack>
                <Box>
                    <Icon as={BsFillEnvelopeFill} fontSize="8xl" />
                </Box>
            </Stack>
        </Box>
    );
}
