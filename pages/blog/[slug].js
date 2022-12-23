import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import Markdown from "markdown-to-jsx";
import markdownStyles from '../../styles/markdown.module.css';
import blogStyles from '../../styles/blog.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NextLink from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';

const BlogPage = ({ frontmatter: { title, date, description, genre, tags }, content, slug }) => {
    const splitTags = tags ? tags.split(" ") : [];

    return (
        <BaseLayout content={
            <Box className={markdownStyles["markdown-body"]} pt="5em">
                <NextLink href={'/'} passHref>
                    <Button variant='outline' border="solid 2px" color="black" leftIcon={<IoIosArrowRoundBack />} mb="1.5em">
                        Back
                    </Button>
                </NextLink>
                <Box className={blogStyles.blog__date}>{date}</Box>
                <Flex gap="0.3em" mb="1em">
                    <Box className={blogStyles.blog__genre}>{genre}</Box>
                    {splitTags.length ? 
                        splitTags.map(tag => 
                        <Box className={blogStyles.blog__tag}>{tag}</Box>    
                        )
                        : ""
                    }
                </Flex>
                <Text color="teal" fontSize="3.3rem" fontWeight="bold">{title}</Text>
                <hr className={blogStyles.line} style={{"marginTop": "-0.8em"}} />
                <Markdown>
                    {content}
                </Markdown>
            </Box>
        } />
    )
}

export default BlogPage;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter: frontmatter,
            content: content,
            slug: slug,
        }
    }
}