"use client";

import { AppShell, Container, ScrollArea, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MainAppBarContext } from "@/context/Contexts";
import { useEffect } from "react";
import Header from "../navigation/Header";
import Navbar from "../navigation/Navbar";
import { usePathname } from "next/navigation";

export default function MainAppShell({ user, journals, children }: { user: User; journals: [Journal]; children: React.ReactNode }) {
  const pathname = usePathname();
  const { setColorScheme } = useMantineColorScheme();
  const [desktopNavbarOpened, { toggle: toggleDesktopNavbarOpen }] = useDisclosure(true);
  const [mobileNavbarOpened, { toggle: toggleMobileNavbarOpen }] = useDisclosure();

  useEffect(() => {
    setColorScheme(user.settings.darkMode ? "dark" : "light");
  }, [user]);

  useEffect(() => {
    if (mobileNavbarOpened) {
      toggleMobileNavbarOpen();
    }
  }, [pathname]);

  return (
    <MainAppBarContext.Provider
      value={{
        user,
        journals,
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
          <AppShell.Section grow component={ScrollArea}>
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
    </MainAppBarContext.Provider>
  );
}
