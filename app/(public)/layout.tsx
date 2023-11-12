import PublicAppShell from "@/components/app_shells/PublicAppShell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicAppShell>{children}</PublicAppShell>;
}
