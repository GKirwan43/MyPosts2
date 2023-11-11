import { Paper } from "@mantine/core";

const MainCard = ({
  children,
  w,
  h,
}: {
  children: React.ReactNode;
  w?: string | number;
  h?: string | number;
}) => {
  return (
    <Paper shadow="lg" p="md" radius="lg" w={w} h={h}>
      {children}
    </Paper>
  );
};

export default MainCard;
