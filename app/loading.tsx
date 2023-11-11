import Spinner from "@/components/loaders/Spinner";
import { Center } from "@mantine/core";

export default function Loading() {
  return (
    <Center h="100%">
      <Spinner />
    </Center>
  );
}
