"use client";

import {
  Box,
  Button,
  Group,
  Stack,
  LoadingOverlay,
  TextInput,
  Textarea,
} from "@mantine/core";
import { closeModal } from "@mantine/modals";
import { isNotEmpty, useForm } from "@mantine/form";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/lib/mantine/notifications";
import { useState } from "react";
import { createJournal } from "@/lib/services/server/journal";

const CreateJournalForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },

    validate: {
      title: isNotEmpty("Title is required."),
    },
  });

  const handleSubmit = async (values: Journal) => {
    setLoading(true);

    try {
      await createJournal(values);
      showSuccessNotification({
        title: "Journal created.",
        message: `Journal "${values.title}" has been created!`,
      });
      closeModal("create_journal");
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
        onReset={() => closeModal("create_journal")}
      >
        <Stack>
          <TextInput
            label="Title"
            placeholder="Title of your journal here."
            withAsterisk
            maxLength={100}
            {...form.getInputProps("title")}
          />
          <Textarea
            label="Description"
            placeholder="Description of your journal here."
            maxLength={300}
            minRows={4}
            autosize
            {...form.getInputProps("description")}
          />
          <Group gap="xs" justify="end">
            <Button type="reset" variant="default">
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
};

export default CreateJournalForm;
