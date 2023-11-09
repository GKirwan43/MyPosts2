import { IconBook2, IconChevronRight, IconHome } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { openSettingsModal } from "@/lib/mantine/modals";
import { logoutUser } from "@/lib/services/client/auth/logoutUser";
import {
  Box,
  Divider,
  NavLink,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { IconDoorEnter, IconSettings } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/Contexts";
import { useContext } from "react";

const { version } = require("@/package.json");

const Navbar = () => null;

const MainLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <NavLink
        label="Dashboard"
        leftSection={<IconHome size="1.5rem" />}
        variant="filled"
        active={pathname.startsWith("/dashboard")}
      />
      <NavLink
        label="Journals"
        leftSection={<IconBook2 size="1.5rem" />}
        rightSection={<IconChevronRight size="1.5rem" />}
      />
    </>
  );
};

const BottomLinks = () => {
  const router = useRouter();
  const { clearColorScheme } = useMantineColorScheme();
  const { user } = useContext(UserContext);
  const settings = user?.settings;

  const logout = async () => {
    await logoutUser();
    clearColorScheme();
    router.push("/");
  };

  return (
    <>
      <Box py="sm">
        <NavLink
          label="Settings"
          leftSection={<IconSettings size="1.5rem" />}
          onClick={() => openSettingsModal(settings)}
        />
        <NavLink
          label="Logout"
          leftSection={<IconDoorEnter size="1.5rem" />}
          onClick={logout}
        />
      </Box>
      <Divider />
      <Text size="sm" ml="md" mt="md">
        Version: {version}
      </Text>
    </>
  );
};

Navbar.MainLinks = MainLinks;
Navbar.BottomLinks = BottomLinks;

export default Navbar;
