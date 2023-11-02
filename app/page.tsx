import { Links } from "@/lib/utils/contants";
import { Button, Center, Stack, Title } from "@mantine/core";
import Link from "next/link";

const Home = () => {
  return (
    <Center h={550}>
      <Stack align="center">
        <Title lh={0.75}>Welcome to my posts!</Title>
        <Title order={2}>The self journal posting application.</Title>
        <Button component={Link} href={Links.signup} my={10}>
          Sign up
        </Button>
      </Stack>
    </Center>
  );
};

export default Home;
