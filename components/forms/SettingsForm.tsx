"use client";

import {
  Box,
  Button,
  Group,
  Stack,
  Switch,
  LoadingOverlay,
} from "@mantine/core";
import { closeModal } from "@mantine/modals";
import { useForm } from "@mantine/form";
import { updateUser } from "@/lib/services/server/user";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/lib/mantine/notifications";
import { useState } from "react";

const SettingsForm = ({ settings }: any) => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      darkMode: settings.darkMode,
    },
  });

  const handleSubmit = async (values: UserSettings) => {
    setLoading(true);

    try {
      await updateUser({ settings: values });
      showSuccessNotification({
        title: "Settings saved.",
        message: "Your settings have been saved successfully!",
      });
      closeModal("settings");
    } catch (e: any) {
      showErrorNotification({ message: e.message });
    }

    setLoading(false);
  };

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={loading}
        zIndex={100}
        overlayProps={{ blur: 2 }}
      />
      <Box
        component="form"
        onSubmit={form.onSubmit(handleSubmit)}
        onReset={() => closeModal("settings")}
      >
        <Stack>
          <Switch
            label="Dark mode"
            {...form.getInputProps("darkMode", { type: "checkbox" })}
          />
          <Group gap="xs" justify="end">
            <Button type="reset" variant="default">
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
};

export default SettingsForm;
