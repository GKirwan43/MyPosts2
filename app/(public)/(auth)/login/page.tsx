"use client";

import LoginForm from "@/components/forms/LoginForm";
import { Center, Divider, Paper, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const Login = () => {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <Paper shadow="xs" radius="lg" withBorder p="lg" w={300}>
        <Title size="h2" ta="center">
          Login
        </Title>
        <Divider my="xs" />
        <LoginForm />
      </Paper>
    </Center>
  );
};

export default Login;
