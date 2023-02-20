import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import BaseLayout from "../../components/BaseLayout";
import markdownStyles from '../../styles/markdown.module.css';
import blogStyles from '../../styles/blog.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import NextLink from 'next/link';
import { IoIosArrowRoundBack } from 'react-icons/io';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'

const BlogPage = ({ frontmatter: { title, date, description, genre, tags }, content, slug }) => {
    const splitTags = tags ? tags.split(" ") : [];

    return (
        <BaseLayout content={
            <Box className={markdownStyles["markdown-body"]} pt="2.5em">
                <NextLink href={'/'} passHref>
                    <Button variant='outline' border="solid 2px" color="black" leftIcon={<IoIosArrowRoundBack />} mb="0.5em">
                        Back
                    </Button>
                </NextLink>
                <Box className={blogStyles.blog__date}>{date}</Box>
                <Flex gap="0.3em" mb="1em">
                    <Box className={blogStyles.blog__genre}>{genre}</Box>
                    {splitTags.length ? 
                        splitTags.map((tag, index) => 
                        <Box className={blogStyles.blog__tag} key={index}>{tag}</Box>    
                        )
                        : ""
                    }
                </Flex>
                <Text color="teal" fontSize="3.3rem" fontWeight="bold" textAlign="center">{title}</Text>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>            
            </Box>
        } />
    )
}

export default BlogPage;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts/published'));

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
    const markdownWithMeta = fs.readFileSync(path.join('posts/published', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        props: {
            frontmatter: frontmatter,
            content: content,
            slug: slug,
        }
    }
}