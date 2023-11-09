import { Burger, Button, Group, Stack } from "@mantine/core";
import React, { useContext } from "react";
import Logo from "../images/Logo";
import { Links } from "@/lib/utils/contants";
import { MainAppBarContext } from "@/context/Contexts";
import Link from "next/link";

const Header = () => null;

const Public = () => {
  return (
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
  );
};

const Main = () => {
  const {
    desktopNavbarOpened,
    mobileNavbarOpened,
    toggleDesktopNavbarOpen,
    toggleMobileNavbarOpen,
  } = useContext(MainAppBarContext);

  return (
    <Stack h="100%" justify="center">
      <Group justify="space-between">
        <Group>
          {}
          <Burger
            opened={desktopNavbarOpened}
            onClick={toggleDesktopNavbarOpen}
            aria-label="Open navbar"
            visibleFrom="sm"
          />
          <Burger
            opened={mobileNavbarOpened}
            onClick={toggleMobileNavbarOpen}
            aria-label="Open navbar"
            hiddenFrom="sm"
          />
          <Logo link={Links.dashboard} />
        </Group>
      </Group>
    </Stack>
  );
};

Header.Public = Public;
Header.Main = Main;

export default Header;
