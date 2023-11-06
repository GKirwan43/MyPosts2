"use client";

import Logo from "@/components/images/Logo";
import { Images, Links } from "@/lib/utils/contants";
import {
  AppShell,
  Button,
  Container,
  Group,
  Stack,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header zIndex={100} p="md">
        <Stack h="100%" justify="center">
          <Group justify="space-between">
            <Logo link={Links.home} />
            <Group gap="xs">
              <Button component={Link} href={Links.login} variant="default">
                Login
              </Button>
              <Button component={Link} href={Links.signup} variant="filled">
                Sign up
              </Button>
            </Group>
          </Group>
        </Stack>
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
