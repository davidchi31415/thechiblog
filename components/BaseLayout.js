import React, { useState, useEffect } from "react";
import NextLink from 'next/link';
import {
  Box,
  Flex,
  Spacer,
  HStack,
  Image,
  Text,
  IconButton,
  Link,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { HiMenuAlt4 } from "react-icons/hi";
import styles from '../styles/base.module.css';

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        variant="unstyled"
        icon={<HiMenuAlt4 size={45} />}
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between">
              <Text textAlign="center" textStyle="body1Semi">
                Menu
              </Text>
              <IconButton
                my="auto"
                variant="unstyled"
                icon={<IoClose size={36} />}
                onClick={onClose}
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <List
              fontSize="1.4rem"
              listStylePos="inside"
              pl={0}
              pb={2}
              spacing={2}
              borderBottom="1px solid"
              borderColor="gray"
            >
              <ListItem mx={0}>
                <NextLink href={'/'} passHref>
                  <Link _hover={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem mx={0}>
                <NextLink href={'/subscribe'} passHref>
                  <Link _hover={{ textDecoration: "none" }}>
                    Subscribe
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem mx={0}>
                <NextLink href={'/about'} passHref>
                  <Link _hover={{ textDecoration: "none" }}>
                    About
                  </Link>
                </NextLink>
              </ListItem>
              <ListItem mx={0}>
                <NextLink href={'/contact'} passHref>
                  <Link _hover={{ textDecoration: "none" }}>
                    Contact
                  </Link>
                </NextLink>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Logo = () => {
  return (
    <NextLink href={'/'} passHref>
      <Text
        fontSize="1.6rem"
        fontWeight="bold"
        cursor="pointer"
      >
        theChi.<Text as="span" color="teal">blog</Text>()
      </Text>
    </NextLink>
  )
}

const MobileBaseNavbar = () => {
  return (
    <Flex justify="flex-end" align="center" mt={1} mx={0} className={styles.base__mobile__navbar}>
      <HamburgerMenu />
    </Flex>
  );
};

const BaseNavbar = () => {
  return (
    <Flex
      width="100%"
      mt="1"
      justify="space-between"
      align="center"
      pt={2}
      className={styles.base__desktop__navbar}
    >
      <Logo />
      <Flex
        gap="1.5em"
        justifySelf="flex-end"
        fontWeight="600"
        fontSize="1.5rem"
      >
        <NextLink href={'/subscribe'} passHref>
          <Link _hover={{ textDecoration: "none" }}>
            Subscribe
          </Link>
        </NextLink>
        <NextLink href={'/about'} passHref>
          <Link _hover={{ textDecoration: "none" }}>
            About
          </Link>
        </NextLink>
        <NextLink href={'/contact'} passHref>
          <Link _hover={{ textDecoration: "none" }}>
            Contact
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

const BaseContainer = ({ content }) => {
  return <Box mt={2} minHeight="1000px">{content}</Box>;
};

const BaseFooter = () => {
  return (
    <Flex width="100%" justify="center" pt={5} pb={1}>
      <Text fontSize={["sm", "md"]} mb={4} align="center" mx="auto">
        2022{" "}
        <Text
          as="span"
          fontWeight="bold"
        >
          TheChiBlog
        </Text> by David Chi
      </Text>
    </Flex>
  );
};

const BaseLayout = ({ content }) => {
  return (
    <Flex justifyContent="center" overflowX="hidden" overflowY="hidden">
      <Box className={styles.base__layout} m={0} p={0}>
        <BaseContainer content={content} />
        <BaseFooter />
      </Box>
    </Flex>
  );
};

export default BaseLayout;
export { BaseNavbar, BaseContainer, BaseFooter };
