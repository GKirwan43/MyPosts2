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
import { useForm, isNotEmpty } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconAt } from "@tabler/icons-react";

const LoginForm = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isNotEmpty("Email can not be blank."),
      password: isNotEmpty("Password can not be blank."),
    },
  });

  return (
    <FocusTrap>
      <Box component="form" onSubmit={form.onSubmit(() => {})}>
        <Stack gap="xs">
          <TextInput
            label="Email"
            placeholder="Your email here"
            leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
            withAsterisk
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password here"
            visible={visible}
            onVisibilityChange={toggle}
            withAsterisk
            {...form.getInputProps("password")}
          />
          <Group justify="center" mt="xs">
            <Button type="submit" size="md" radius="xl">
              Login
            </Button>
          </Group>
        </Stack>
      </Box>
    </FocusTrap>
  );
};

export default LoginForm;
