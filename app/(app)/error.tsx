"use client";

import MainCard from "@/components/cards/MainCard";
import { Center, Title, Stack, Text, Button, rem } from "@mantine/core";
import { IconExclamationCircle } from "@tabler/icons-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Center my={50}>
      <MainCard>
        <Stack align="center">
          <IconExclamationCircle size={50} color="red" />
          <Title>Something went wrong!</Title>
          <Text>{error.message}</Text>
          <Button variant="default" onClick={reset}>
            Refresh
          </Button>
        </Stack>
      </MainCard>
    </Center>
  );
}
