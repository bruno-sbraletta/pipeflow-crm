import { AppShell } from "@/components/shared/AppShell";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <AppShell>{children}</AppShell>;
}
