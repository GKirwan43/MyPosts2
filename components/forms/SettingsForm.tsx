import { Box, Button, Group, Stack, Switch } from "@mantine/core";
import { closeModal } from "@mantine/modals";
import { useForm } from "@mantine/form";

const SettingsForm = () => {
  const form = useForm({
    initialValues: {
      darkMode: false,
    },
  });

  const applyChanges = () => {};

  return (
    <Box component="form" onSubmit={form.onSubmit(applyChanges)} onReset={() => closeModal("settings")}>
      <Stack>
        <Switch label="Dark mode" {...form.getInputProps("darkMode", { type: "checkbox" })} />
        <Group gap="xs" justify="end">
          <Button type="reset" variant="default">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default SettingsForm;
