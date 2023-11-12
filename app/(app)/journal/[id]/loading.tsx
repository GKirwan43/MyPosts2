"use client";

import Spinner from "@/components/loaders/Spinner";
import { Center } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Loading() {
  const { height } = useViewportSize();

  return (
    <Center h={0.75 * height}>
      <Spinner />
    </Center>
  );
}
