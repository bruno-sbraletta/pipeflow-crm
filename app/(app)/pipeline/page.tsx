import { Kanban, Plus } from "lucide-react";

const stages = [
  "Novo Lead",
  "Contato Realizado",
  "Proposta Enviada",
  "Negociação",
  "Fechado Ganho",
  "Fechado Perdido",
];

export default function PipelinePage(): React.ReactElement {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Pipeline</h1>
          <p className="mt-0.5 text-sm text-muted-foreground">
            Kanban de negócios com drag-and-drop
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          <Plus className="h-3.5 w-3.5" />
          Novo Negócio
        </button>
      </div>

      {/* Column headers preview */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {stages.map((stage) => (
          <div
            key={stage}
            className="flex w-56 shrink-0 flex-col rounded-xl border border-dashed border-border bg-card/50 p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                {stage}
              </span>
              <span className="rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                0
              </span>
            </div>
            <div className="flex h-20 items-center justify-center">
              <Kanban className="h-5 w-5 text-muted-foreground/25" />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground/50">
        Kanban com @dnd-kit implementado no milestone M3
      </p>
    </div>
  );
}
