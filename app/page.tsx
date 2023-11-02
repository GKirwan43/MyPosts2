"use client";

import { Links } from "@/lib/utils/contants";
import { Button, Center, Stack, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Link from "next/link";

const Home = () => {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <Stack align="center" ta="center">
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
