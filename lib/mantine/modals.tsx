import SettingsForm from "@/components/forms/SettingsForm";
import { modals } from "@mantine/modals";

const openSettingsModal = (settings: any) => {
  modals.open({
    modalId: "settings",
    title: "Settings",
    centered: true,
    children: <SettingsForm settings={settings} />,
  });
};

export { openSettingsModal };
