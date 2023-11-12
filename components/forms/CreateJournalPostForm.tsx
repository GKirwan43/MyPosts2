"use client";

import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Stack,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import RichTextEditorInput from "../inputs/TextEditor";
import { createJournalPost } from "@/lib/services/server/journal";
import {
  showErrorNotification,
  showSuccessNotification,
} from "@/lib/mantine/notifications";
import { useState } from "react";

const CreateJournalPostForm = ({
  journalId,
  onCancel,
}: {
  journalId: string;
  onCancel: () => void;
}) => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      title: "",
      post: "",
    },

    validate: {
      title: isNotEmpty("Title is required."),
      post: isNotEmpty("Post is required."),
    },
  });

  const createPost = async (values: any) => {
    setLoading(true);

    try {
      await createJournalPost({ ...values, journalId });
      showSuccessNotification({
        title: "Journal post created.",
        message: `Journal post has been created!`,
      });
      onCancel();
    } catch (e: any) {
      showErrorNotification({ message: e.message });
      setLoading(false);
    }
  };

  return (
    <Box pos="relative">
      <LoadingOverlay
        visible={loading}
        zIndex={100}
        overlayProps={{ blur: 2 }}
      />
      <Box component="form" onSubmit={form.onSubmit(createPost)}>
        <Stack>
          <TextInput
            label="Title"
            description="The title for your post."
            placeholder="Your posts title here."
            {...form.getInputProps("title")}
          />
          <RichTextEditorInput
            label="Post"
            description="The content of your post."
            placeholder="Your post here."
            {...form.getInputProps("post")}
          />
          <Group gap="xs" justify="end">
            <Button variant="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
};

export default CreateJournalPostForm;
