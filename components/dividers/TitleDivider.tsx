import { Box, Divider, Title } from "@mantine/core";
import React from "react";

const TitleDivider = ({ title }: { title: string }) => {
  return (
    <Box my="lg">
      <Title>{title}</Title>
      <Divider />
    </Box>
  );
};

export default TitleDivider;
