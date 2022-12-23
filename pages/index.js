import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeHero from '../components/HomeHero';
import BaseLayout from '../components/BaseLayout';
import { Flex, Box } from '@chakra-ui/react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Card from '../components/Card';

export default function Home({ posts }) {
  const [showPosts, setShowPosts] = useState(false);

  return (
    <>
      <Head>
        <title>The Chi Blog</title>
        <meta name="description" content="A blog about research, projects, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout content={
        <Flex direction="column" align="center" gap="5em">
          <HomeHero onDoneAnimating={() => {}} />
          <Flex direction="column" align="center" gap="5em">
            {posts.map((post, index) => (
              <Card post={post} key={index} />
            ))}
          </Flex>
        </Flex>
      } />
    </>
  )
}

export async function getStaticProps() {
  // Get files from the post directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
      slug,
      frontmatter
    }
  })

  return {
      props: {
          posts
      }
  }
}