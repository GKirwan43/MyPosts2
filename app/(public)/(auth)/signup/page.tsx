"use client";

import SignUpForm from "@/components/forms/SignUpForm";
import { Center, Divider, Paper, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const SignUp = () => {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <Paper shadow="xs" radius="lg" withBorder p="lg" w={300}>
        <Title size="h2" ta="center">
          Create an account
        </Title>
        <Divider my="xs" />
        <SignUpForm />
      </Paper>
    </Center>
  );
};

export default SignUp;
