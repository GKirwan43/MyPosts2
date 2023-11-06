"use client";

import { Images, Links } from "@/lib/utils/contants";
import { Box, Button, Center, Divider, Stack, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <Stack align="center" ta="center">
        <Box w={{ base: 350, md: 500 }} h={125} pos="relative">
          <Image src={Images.logoColorNoBackground} alt="MyPosts logo" fill />
        </Box>
        <Box w={{ base: 350, md: 500 }}>
          <Divider mb="sm" />
        </Box>
        <Title lh={0.75}>Welcome to my posts!</Title>
        <Title order={2}>The self journal posting application.</Title>
        <Button
          component={Link}
          href={Links.signup}
          my={10}
          size="lg"
          radius="xl"
        >
          Sign up
        </Button>
      </Stack>
    </Center>
  );
};

export default Home;
