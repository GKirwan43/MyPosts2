import MainAppShell from "@/components/app_shells/MainAppShell";
import { getUser } from "@/lib/services/server/user";
import { createContext } from "react";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return <MainAppShell user={user}>{children}</MainAppShell>;
}
