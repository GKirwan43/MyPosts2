import { getUser } from "@/lib/services/server/user";
import { Title, Text } from "@mantine/core";

const dashboard = async () => {
  const user = await getUser();

  return (
    <>
      <Title>Dashboard</Title>
      <Text>Username: {user.username}</Text>
      <Text>Email: {user.email}</Text>
      <Text>User ID: {user.uid}</Text>
    </>
  );
};

export default dashboard;
