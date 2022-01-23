import { Tag } from "@chakra-ui/react";

export default function BlogTag(props) {
    const { children } = props;

    return (
        <Tag
            colorScheme={
                [
                    `gray`,
                    `brand`,
                    `teal`,
                    `blue`,
                    `green`,
                    `pink`,
                    `orange`,
                    `red`,
                    `purple`,
                    `yellow`,
                ][(children.charCodeAt(0) + children.charCodeAt(1)) % 10]
            }
            {...props}
        >
            {children}
        </Tag>
    );
}
