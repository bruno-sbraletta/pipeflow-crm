import { Settings } from "lucide-react";

const sections = [
  { title: "Workspace", description: "Nome, logo e configurações gerais" },
  { title: "Membros", description: "Convites e permissões da equipe" },
  { title: "Faturamento", description: "Planos, pagamentos e upgrades" },
];

export default function SettingsPage(): React.ReactElement {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">Configurações</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Gerencie seu workspace, membros e faturamento
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {sections.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-dashed border-border bg-card/50 p-6"
          >
            <Settings className="mb-3 h-5 w-5 text-muted-foreground/40" />
            <p className="text-sm font-medium text-foreground">{title}</p>
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground/50">
        Settings UI completo implementado no milestone M6
      </p>
    </div>
  );
}
