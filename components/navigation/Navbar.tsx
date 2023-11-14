import { IconBook2, IconChevronRight, IconHome, IconPlus } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { openCreateJournalModal, openSettingsModal } from "@/lib/mantine/modals";
import { logoutUser } from "@/lib/services/client/auth/logoutUser";
import { Box, Divider, NavLink, Text, useMantineColorScheme } from "@mantine/core";
import { IconDoorEnter, IconSettings } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { MainAppBarContext } from "@/context/Contexts";
import { useContext } from "react";
import { Links } from "@/lib/utils/contants";
import Link from "next/link";

const { version } = require("@/package.json");

const Navbar = () => null;

const MainLinks = () => {
  const pathname = usePathname();
  const { journals } = useContext(MainAppBarContext);

  return (
    <>
      <NavLink label="Dashboard" component={Link} href={Links.dashboard} leftSection={<IconHome size="1.5rem" />} variant="filled" active={pathname.startsWith("/dashboard")} />
      <NavLink label="Journals" leftSection={<IconBook2 size="1.5rem" />} rightSection={<IconChevronRight size="1.5rem" />} active={pathname.startsWith("/journal")} variant="filled" defaultOpened>
        <NavLink label="Create new" leftSection={<IconPlus size="1.5rem" />} onClick={openCreateJournalModal} variant="subtle" active />
        {journals?.map((journal) => (
          <NavLink label={journal.title} component={Link} href={`${Links.journal}/${journal.id}`} active={pathname.includes(journal.id)} variant="filled" key={journal.id} />
        ))}
      </NavLink>
    </>
  );
};

const BottomLinks = () => {
  const router = useRouter();
  const { clearColorScheme } = useMantineColorScheme();
  const { user } = useContext(MainAppBarContext);
  const settings = user?.settings;

  const logout = async () => {
    await logoutUser();
    clearColorScheme();
    router.push("/");
  };

  return (
    <>
      <Box py="sm">
        <NavLink label="Settings" leftSection={<IconSettings size="1.5rem" />} onClick={() => openSettingsModal(settings)} />
        <NavLink label="Logout" leftSection={<IconDoorEnter size="1.5rem" />} onClick={logout} />
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
