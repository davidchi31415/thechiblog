import { Box, Text, Flex } from "@chakra-ui/react";
import NextLink from 'next/link';

export default function Card({ post }) {
    const tags = post.frontmatter.tags ?
                 post.frontmatter.tags.split(" ") : [];

    return (
        <NextLink href={`/blog/${post.slug}`}>
            <Box rounded='md' border='solid 1px rgb(0, 0, 0, 0.1)'
                borderLeft='solid 4px' borderLeftColor='teal.300'
                width={['18em', '25em', '35em', '45em', '50em']} minHeight='10em' p='1em'
                _hover={{opacity: 0.5}}
                cursor="pointer"
                transition="opacity 0.1s ease"
                position="relative"
                boxShadow='xl'
            >
                <Text fontSize="2rem" fontWeight="bold">{post.frontmatter.title}</Text>
                <Text fontSize="1.2rem" fontStyle="italic">{post.frontmatter.date}</Text>
                <Text fontSize="1rem" mt="0.2em">{post.frontmatter.description}</Text>
                <Flex gap="0.24em" position="absolute" left="0.15em" bottom="-2.4em">
                    <Box borderBottomRadius="0.5em" bg="teal.200" h="2em" p="0.25em"
                        fontSize="1.2rem" fontWeight="bold"
                    >
                        {post.frontmatter.genre}
                    </Box>
                    {
                        tags.length ? 
                        tags.map((tag, index) =>                             
                        <Box borderBottomRadius="0.5em" bg="gray.300" h="2em" p="0.25em 0.5em"
                            fontSize="1.2rem" fontWeight="bold" key={index}
                        >
                            {tag}
                        </Box>)
                        : ""
                    }
                </Flex>
            </Box>
        </NextLink>
    )
}