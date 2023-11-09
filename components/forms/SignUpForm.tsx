import { useRouter } from "next/navigation";
import { createUser } from "@/lib/services/client/auth/createUser";
import {
  Box,
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  FocusTrap,
  rem,
  LoadingOverlay,
} from "@mantine/core";
import { useForm, hasLength, isEmail, matchesField } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
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
        "Username must be 5-25 characters long."
      ),
      email: isEmail("Invalid Email."),
      password: hasLength(
        { min: 6 },
        "Password must be 6 or more characters long."
      ),
      confirmPassword: matchesField("password", "Passwords do not match."),
    },
  });

  const signUp = async (values: SignUpFormValues) => {
    setLoading(true);

    const res = await createUser(values);
    const fieldErrors = res?.fieldErrors;

    if (fieldErrors) {
      form.setErrors(fieldErrors);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={loading}
        zIndex={100}
        overlayProps={{ blur: 2 }}
      />
      <FocusTrap>
        <Box component="form" onSubmit={form.onSubmit(signUp)}>
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
              leftSection={
                <IconAt style={{ width: rem(16), height: rem(16) }} />
              }
              withAsterisk
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password here"
              visible={passwordVisible}
              onVisibilityChange={() =>
                setPasswordVisible((prevState) => !prevState)
              }
              withAsterisk
              {...form.getInputProps("password")}
            />
            <PasswordInput
              label="Confirm Password"
              placeholder="Your password again"
              visible={passwordVisible}
              onVisibilityChange={() =>
                setPasswordVisible((prevState) => !prevState)
              }
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
    </Box>
  );
};

export default SignUpForm;
