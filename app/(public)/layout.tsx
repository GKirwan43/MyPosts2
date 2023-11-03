"use client";

import Header from "@/components/navigation/Header";
import { AppShell, Container } from "@mantine/core";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
