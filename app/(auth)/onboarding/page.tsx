"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Building2, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OnboardingPage(): React.ReactElement {
  const router = useRouter();
  const [workspaceName, setWorkspaceName] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    if (!workspaceName.trim()) {
      setError("Dê um nome para o seu workspace");
      return;
    }
    if (workspaceName.trim().length < 2) {
      setError("O nome deve ter pelo menos 2 caracteres");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    router.push("/dashboard");
  }

  return (
    <Card className="border-border bg-card shadow-xl shadow-black/20">
      <CardHeader className="pb-4">
        {/* Step indicator */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-1.5 w-8 rounded-full bg-primary" />
          <div className="h-1.5 w-8 rounded-full bg-border" />
          <div className="h-1.5 w-8 rounded-full bg-border" />
        </div>

        {/* Icon */}
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15">
          <Building2 className="h-5 w-5 text-primary" />
        </div>

        <CardTitle className="text-lg">Configure seu workspace</CardTitle>
        <CardDescription>
          Este será o nome da sua empresa ou projeto no PipeFlow
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="workspace">Nome do workspace</Label>
            <Input
              id="workspace"
              type="text"
              placeholder="Ex: Minha Empresa, Freelancer Silva..."
              autoComplete="organization"
              autoFocus
              value={workspaceName}
              onChange={(e) => {
                setWorkspaceName(e.target.value);
                if (error) setError(undefined);
              }}
              aria-invalid={!!error}
              disabled={loading}
            />
            {error && <p className="text-xs text-destructive">{error}</p>}
            <p className="text-xs text-muted-foreground">
              Você pode alterar isso depois nas configurações
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Criando workspace...
              </>
            ) : (
              "Começar a usar o PipeFlow"
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
