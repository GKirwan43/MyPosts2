"use client";

import { AppShell, Container, useMantineColorScheme } from "@mantine/core";
import React, { useEffect } from "react";
import Header from "../navigation/Header";

const PublicAppShell = ({ children }: { children: React.ReactNode }) => {
  const { clearColorScheme } = useMantineColorScheme();

  useEffect(() => {
    clearColorScheme();
  });

  return (
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header zIndex={100} p="md">
        <Header.Public />
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default PublicAppShell;
