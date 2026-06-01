import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

interface InvitePageProps {
  params: { token: string };
}

export default function InvitePage({ params }: InvitePageProps): React.ReactElement {
  const workspaceName = "Agência Digital Ltda";

  return (
    <Card className="border-border bg-card shadow-xl shadow-black/20">
      <CardHeader className="items-center pb-2 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-lg">Você foi convidado!</CardTitle>
      </CardHeader>

      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">
          Você recebeu um convite para entrar no workspace
        </p>
        <p className="mt-1 text-base font-semibold text-foreground">
          {workspaceName}
        </p>

        <div className="mt-6 flex flex-col gap-2.5">
          <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Aceitar convite
          </button>
          <Link
            href="/login"
            className="w-full rounded-lg border border-border py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-ring hover:text-foreground"
          >
            Entrar com conta existente
          </Link>
        </div>

        <p className="mt-4 text-xs text-muted-foreground/60">
          Token: {params.token}
        </p>
      </CardContent>
    </Card>
  );
}
