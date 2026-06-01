import { Workflow } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary shadow-sm shadow-primary/30">
          <Workflow className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-xl font-semibold tracking-tight text-foreground">
          PipeFlow
        </span>
      </div>

      <div className="w-full max-w-sm">{children}</div>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        © 2024 PipeFlow. Todos os direitos reservados.
      </p>
    </div>
  );
}
