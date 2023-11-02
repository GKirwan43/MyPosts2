"use client";

import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  FocusTrap,
  rem,
} from "@mantine/core";
import { useForm, hasLength, isEmail, matchesField } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconAt } from "@tabler/icons-react";

const SignUpForm = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      username: hasLength(
        { min: 5, max: 25 },
        "Username must be 5-25 characters long.",
      ),
      email: isEmail("Invalid Email."),
      password: hasLength(
        { min: 5 },
        "Password must be 5 or more characters long.",
      ),
      confirmPassword: matchesField("password", "Passwords do not match."),
    },
  });

  return (
    <FocusTrap>
      <Box component="form" onSubmit={form.onSubmit(() => {})}>
        <Stack gap="xs">
          <TextInput
            label="Username"
            placeholder="Your username here"
            maxLength={25}
            withAsterisk
            {...form.getInputProps("username")}
          />
          <TextInput
            label="Email"
            placeholder="Your email here"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            visible={visible}
            onVisibilityChange={toggle}
            withAsterisk
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Your password again"
            visible={visible}
            onVisibilityChange={toggle}
            withAsterisk
            {...form.getInputProps("confirmPassword")}
          />
          <Group justify="center" mt="xs">
            <Button type="submit" size="md" radius="xl">
              Sign up
            </Button>
          </Group>
        </Stack>
      </Box>
    </FocusTrap>
  );
};

export default SignUpForm;
