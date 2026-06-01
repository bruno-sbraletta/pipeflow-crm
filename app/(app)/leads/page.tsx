import { Users, Plus } from "lucide-react";

export default function LeadsPage(): React.ReactElement {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Leads</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Gerencie seus contatos e oportunidades
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          <Plus className="h-3.5 w-3.5" />
          Novo Lead
        </button>
      </div>

      <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
        <Users className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
        <p className="text-sm font-medium text-muted-foreground">
          Lista de Leads — M2
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Tabela com filtros e busca implementada no milestone de Leads UI
        </p>
      </div>
    </div>
  );
}
