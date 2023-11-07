"use client";

import { Box, Button, Group, PasswordInput, Stack, TextInput, FocusTrap, rem, LoadingOverlay } from "@mantine/core";
import { useForm, isEmail, isNotEmpty } from "@mantine/form";
import { useState } from "react";
import { IconAt } from "@tabler/icons-react";
import { loginUser } from "@/lib/services/client/auth/loginUser";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email."),
      password: isNotEmpty("Password can not be blank."),
    },
  });

  const login = async (values: LoginFormValues) => {
    setLoading(true);

    const res = await loginUser(values);
    const fieldErrors = res?.fieldErrors;

    if (fieldErrors) {
      form.setErrors(fieldErrors);
    } else {
      router.push("/dashboard");
    }

    setLoading(false);
  };

  return (
    <Box pos="relative">
      <LoadingOverlay visible={loading} zIndex={100} overlayProps={{ blur: 2 }} />
      <FocusTrap>
        <Box component="form" onSubmit={form.onSubmit(login)}>
          <Stack gap="xs">
            <TextInput label="Email" placeholder="Your email here" leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} withAsterisk {...form.getInputProps("email")} />
            <PasswordInput label="Password" placeholder="Your password here" visible={passwordVisible} onVisibilityChange={() => setPasswordVisible((prevState) => !prevState)} withAsterisk {...form.getInputProps("password")} />
            <Group justify="center" mt="xs">
              <Button type="submit" size="md" radius="xl">
                Login
              </Button>
            </Group>
          </Stack>
        </Box>
      </FocusTrap>
    </Box>
  );
};

export default LoginForm;
