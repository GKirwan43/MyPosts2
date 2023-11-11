import { Loader, Stack, Title } from "@mantine/core";

const Spinner = () => {
  return (
    <Stack align="center">
      <Loader size="xl" />
      <Title size="h3">Loading...</Title>
    </Stack>
  );
};

export default Spinner;
