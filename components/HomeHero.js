import { useState, useEffect } from 'react';
import { Box, Flex, Text, ScaleFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const HomeHero = ({ onDoneAnimating }) => {
    const [animating, setAnimating] = useState(false);
    const [inThe, setThe] = useState(false);
    const [inChi, setChi] = useState(false);
    const [inBlog, setBlog] = useState(false);
    const [inText, setText] = useState(false);
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    useEffect(() => {
        const animate = async () => {
            setAnimating(true);
            await sleep(100);
            setThe(true);
            await sleep(100);
            setChi(true);
            await sleep(100);
            setBlog(true);
            await sleep(500);
            setText(true);
            onDoneAnimating();
        }
        if (!animating) animate();
    }, [animating]);
    return (
        <Box
            position="relative"
            width="38em"
            height="20em"
            mr="1em"
        >
            <ScaleFade in={inThe}>
                <Text position="absolute" left="0.2em" top="0.2em" fontSize="5rem">The</Text>
            </ScaleFade>
            <ScaleFade in={inChi}>
                <Text position="absolute" left="0.8em" top={0} fontSize="12rem">Chi</Text>
                <Flex position="absolute" top="5em" left="23.1em" width="4em" height="9em" justify="center" align="flex-end" backgroundColor="white">
                    <Box className="home__hero__stick__body" position="relative" width="1em" height="5em" backgroundColor="black">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            drag={true}
                            dragSnapToOrigin={true}
                        >
                            <Box className="home__hero__stick_head" position="absolute" top="-3.8em" left="-0.95em" width="3em" height="3em" borderRadius="100%" transform="scale(1.2)" border="solid black 2px" backgroundColor="#FFE5B4" cursor="pointer">
                                <Box className="home__hero__stick__face" ml="0.38em" mt="0.6em">
                                    <Flex className="home__hero__stick__eyes" gap="1.5em">
                                        <Box className="home__hero__stick__eye" width="0.25em" height="0.25em" borderRadius="100%" backgroundColor="black"></Box>
                                        <Box className="home__hero__stick__eye" width="0.25em" height="0.25em" borderRadius="100%" backgroundColor="black"></Box>
                                    </Flex>
                                    <Box className="home__hero__stick__expressionless" width="2em" height="0.2em" backgroundColor="black" mt="0.5em"></Box>
                                    {/* <Box className="home__hero__stick__sad" width="2em" height="0.2em" backgroundColor="black" mt="0.5em"></Box> */}
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                </Flex>
            </ScaleFade>
            <ScaleFade in={inBlog}>
                <Text position="absolute" right="0.1em" top="2em" fontSize="5rem">Blog</Text>
            </ScaleFade>
            <ScaleFade in={inText}>
                <Text position="absolute" left="3.5em" top="8.8em" fontSize="2rem" fontStyle="italic">brought to you by David Chi</Text>
            </ScaleFade>
        </Box>
    );
};

export default HomeHero;