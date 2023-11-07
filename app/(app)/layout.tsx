"use client";

import Logo from "@/components/images/Logo";
import { logoutUser } from "@/lib/services/auth/logoutUser";
import { Links } from "@/lib/utils/contants";
import { AppShell, Box, Burger, Container, Divider, Group, NavLink, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook2, IconChevronRight, IconDoorEnter, IconHome, IconSettings } from "@tabler/icons-react";
import { useRouter, usePathname } from "next/navigation";

const { version } = require("@/package.json");

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [desktopNavbarOpened, { toggle: toggleDesktopNavbarOpen }] = useDisclosure(true);
  const [mobileNavbarOpened, { toggle: toggleMobileNavbarOpen }] = useDisclosure();

  const logout = async () => {
    await logoutUser();
    router.push("/");
  };

  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{
        width: { sm: 250, lg: 300 },
        breakpoint: "sm",
        collapsed: {
          mobile: !mobileNavbarOpened,
          desktop: !desktopNavbarOpened,
        },
      }}
    >
      <AppShell.Header zIndex={100} p="md">
        <Stack h="100%" justify="center">
          <Group justify="space-between">
            <Group>
              <Burger opened={desktopNavbarOpened} onClick={toggleDesktopNavbarOpen} aria-label="Open navbar" visibleFrom="sm" />
              <Burger opened={mobileNavbarOpened} onClick={toggleMobileNavbarOpen} aria-label="Open navbar" hiddenFrom="sm" />
              <Logo link={Links.dashboard} />
            </Group>
          </Group>
        </Stack>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section grow>
          <NavLink label="Dashboard" leftSection={<IconHome size="1.5rem" />} variant="filled" active={pathname.startsWith("/dashboard")} />
          <NavLink label="Journals" leftSection={<IconBook2 size="1.5rem" />} rightSection={<IconChevronRight size="1.5rem" />} />
        </AppShell.Section>
        <AppShell.Section>
          <Box py="sm">
            <NavLink label="Settings" leftSection={<IconSettings size="1.5rem" />} />
            <NavLink label="Logout" leftSection={<IconDoorEnter size="1.5rem" />} onClick={logout} />
          </Box>
          <Divider />
          <Text size="sm" ml="md" mt="md">
            Version: {version}
          </Text>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
}
