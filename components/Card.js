import { Box } from "@chakra-ui/react";
import Link from 'next/link';

export default function Card({ post }) {
    return (
        <Box>
            <h3>{post.frontmatter.title}</h3>
            <h5>{post.frontmatter.date}</h5>
            <h6>{post.frontmatter.excerpt}</h6>
        </Box>
    )
}