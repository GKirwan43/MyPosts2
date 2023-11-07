import SettingsForm from "@/components/forms/SettingsForm";
import { Box, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

const openSettingsModal = () => {
  modals.open({
    modalId: "settings",
    title: "Settings",
    centered: true,
    children: <SettingsForm />,
  });
};

export { openSettingsModal };
