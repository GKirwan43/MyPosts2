import { Paper } from "@mantine/core";

const MainCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Paper shadow="xs" p="md" radius="lg" withBorder>
      {children}
    </Paper>
  );
};

export default MainCard;
