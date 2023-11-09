"use client";

import { AppShell, Container, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../Navbar";
import Header from "../Header";
import { UserContext } from "@/context/Contexts";
import { useEffect } from "react";

export default function MainAppShell({
  user,
  children,
}: {
  user: any;
  children: React.ReactNode;
}) {
  const { setColorScheme } = useMantineColorScheme();
  const [desktopNavbarOpened, { toggle: toggleDesktopNavbarOpen }] =
    useDisclosure(true);
  const [mobileNavbarOpened, { toggle: toggleMobileNavbarOpen }] =
    useDisclosure();

  useEffect(() => {
    setColorScheme(user.settings.darkMode ? "dark" : "light");
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        desktopNavbarOpened,
        mobileNavbarOpened,
        toggleDesktopNavbarOpen,
        toggleMobileNavbarOpen,
      }}
    >
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
          <Header.Main />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section grow>
            <Navbar.MainLinks />
          </AppShell.Section>
          <AppShell.Section>
            <Navbar.BottomLinks />
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Container>{children}</Container>
        </AppShell.Main>
      </AppShell>
    </UserContext.Provider>
  );
}
