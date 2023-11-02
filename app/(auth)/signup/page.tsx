import SignUpForm from "@/components/forms/SignUpForm";
import { Center, Divider, Paper, Title } from "@mantine/core";

const SignUp = () => {
  return (
    <Center h={550}>
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
