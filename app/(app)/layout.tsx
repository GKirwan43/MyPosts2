import MainAppShell from "@/components/app_shell/app_shells/MainAppShell";
import { getJournals } from "@/lib/services/server/journal";
import { getUser } from "@/lib/services/server/user";
import { Text } from "@mantine/core";
import { Suspense } from "react";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  const jouranls = await getJournals();

  return (
    <MainAppShell user={user} journals={jouranls}>
      {children}
    </MainAppShell>
  );
}
