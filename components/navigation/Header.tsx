import { Group, Text, Button } from "@mantine/core";
import { Links } from "@/lib/utils/contants";
import Link from "next/link";

const Header = () => {
  return (
    <Group justify="space-between">
      <Text component={Link} href={Links.home} size="lg" fw={700}>
        MyPosts
      </Text>
      <Group gap="xs">
        <Button component={Link} href={Links.login} variant="default">
          Login
        </Button>
        <Button component={Link} href={Links.signup} variant="filled">
          Sign up
        </Button>
      </Group>
    </Group>
  );
};

export default Header;
