"use client";

import MainCard from "@/components/cards/MainCard";
import SignUpForm from "@/components/forms/SignUpForm";
import { Center, Divider, Paper, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const SignUp = () => {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <MainCard w={300}>
        <Title size="h2" ta="center">
          Create an account
        </Title>
        <Divider my="xs" />
        <SignUpForm />
      </MainCard>
    </Center>
  );
};

export default SignUp;
