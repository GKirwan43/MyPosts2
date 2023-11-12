"use client";

import { Paper, useMantineColorScheme } from "@mantine/core";

const MainCard = ({
  children,
  style,
  w,
  h,
}: {
  children: React.ReactNode;
  style?: Object;
  w?: string | number;
  h?: string | number;
}) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Paper
      shadow="lg"
      p="md"
      radius="lg"
      w={w}
      h={h}
      style={style}
      withBorder={colorScheme === "dark"}
    >
      {children}
    </Paper>
  );
};

export default MainCard;
