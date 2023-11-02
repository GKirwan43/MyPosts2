"use client";

import { Box, Button, Group, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";

const SignUpForm = () => {
  // Toggle for showing or hiding password
  const [visible, { toggle }] = useDisclosure(false);
  // Form validation
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Box component="form" onSubmit={form.onSubmit(() => {})}>
      <Stack gap="xs">
        <TextInput label="Username" placeholder="Your username here" {...form.getInputProps("username")} />
        <TextInput label="Email" placeholder="Your username here" {...form.getInputProps("email")} />
        <PasswordInput label="Password" placeholder="Your password" visible={visible} onVisibilityChange={toggle} {...form.getInputProps("password")} />
        <PasswordInput label="Confirm Password" placeholder="Your password again" visible={visible} onVisibilityChange={toggle} {...form.getInputProps("confirmPassword")} />
        <Group justify="center" mt="xs">
          <Button type="submit">Sign up</Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SignUpForm;
