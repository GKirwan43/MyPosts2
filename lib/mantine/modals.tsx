import CreateJournalForm from "@/components/forms/CreateJournalForm";
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

const openCreateJournalModal = () => {
  modals.open({
    modalId: "create_journal",
    title: "Create Journal",
    centered: true,
    children: <CreateJournalForm />,
  });
};

export { openSettingsModal, openCreateJournalModal };
