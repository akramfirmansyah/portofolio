"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Image from "next/image";

import Akram from "@/public/akram.jpg";

export default function Home() {
  return (
    <Box as="main" width="full">
      <Flex
        id="jumbotron"
        as="section"
        bgColor="primary.blue"
        height="100vh"
        width="full"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        gap="6"
      >
        <Heading
          textAlign="center"
          width="80%"
          fontSize="2xl"
          fontWeight="bold"
        >
          Elevate Your Vision with Our Web Development Wizardry!
        </Heading>
        <Box
          as="button"
          color="primary.blue"
          backgroundColor="white"
          paddingX="3"
          paddingY="2"
          border="2px solid white"
          transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
          _hover={{
            transform: "scale(1.1)",
            textColor: "white",
            backgroundColor: "primary.blue",
          }}
        >
          See my work
        </Box>
      </Flex>
      <Flex
        as="section"
        id="about"
        width="full"
        flexDir="column"
        gap="4"
        marginBottom="8"
      >
        <Box as="figure" position="relative" boxSize="full" aspectRatio={1 / 1}>
          <Image
            src={Akram}
            alt="Akram Firmansyah"
            priority
            placeholder="blur"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <Flex flexDir="column" paddingX="4" gap="2">
          <Heading
            as="h2"
            color="primary.blue"
            fontSize="lg"
            fontWeight="semibold"
            textTransform="uppercase"
          >
            About
          </Heading>
          <Heading as="h4" fontSize="3xl">
            Web Developer
          </Heading>
          <Text color="primary.grey">
            I&apos;m{" "}
            <Text as="span" color="white" fontWeight="medium">
              Akram
            </Text>
            , a passionate freelancer{" "}
            <Text as="span" color="white" fontWeight="medium">
              elevate your vision with our web development wizardry.
            </Text>{" "}
            My expertise is developing next-level websites and web applications
            including web maintenance.
          </Text>
        </Flex>
      </Flex>
      <Flex
        as="section"
        id="contact"
        flexDir="column"
        paddingX="4"
        gap="2"
        marginBottom="8"
      >
        <Heading
          as="h2"
          id="about"
          color="primary.blue"
          fontSize="lg"
          fontWeight="semibold"
          textTransform="uppercase"
        >
          Contact
        </Heading>
        <Heading as="h4" fontSize="3xl">
          Got a problem to solve?
        </Heading>
        <Text color="primary.grey">
          Get your space suit ready and tell me your ideas to develop your dream
          website.
        </Text>
        <Flex as="form" flexDir="column" gap="3">
          <FormControl isRequired>
            <FormLabel marginBottom="2">Name</FormLabel>
            <Input
              type="text"
              backgroundColor="gray.800"
              borderWidth="1px"
              borderColor="gray.600"
              borderRadius="sm"
              paddingX="3"
              paddingY="2"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel marginBottom="2">Email</FormLabel>
            <Input
              type="email"
              backgroundColor="gray.800"
              borderWidth="1px"
              borderColor="gray.600"
              borderRadius="sm"
              paddingX="3"
              paddingY="2"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel marginBottom="2">Message</FormLabel>
            <Textarea
              resize="none"
              height="24"
              backgroundColor="gray.800"
              borderWidth="1px"
              borderColor="gray.600"
              borderRadius="sm"
              paddingX="3"
              paddingY="2"
            />
          </FormControl>
          <Button
            variant="solid"
            type="submit"
            colorScheme="red"
            paddingY="3"
            paddingX="6"
            fontWeight="medium"
            borderRadius="sm"
          >
            Hit me up
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
