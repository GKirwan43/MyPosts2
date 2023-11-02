"use client";

import { AppShell, Container } from "@mantine/core";
import Header from "../navigation/Header";

const AppShellContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell padding="md" header={{ height: 70 }}>
      <AppShell.Header zIndex={100} p="md">
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppShellContainer;
