import { BarChart3, Users, Briefcase, TrendingUp } from "lucide-react";

const placeholderCards = [
  { icon: Users, label: "Total de Leads", value: "10", color: "text-blue-400" },
  { icon: Briefcase, label: "Negócios Abertos", value: "6", color: "text-violet-400" },
  { icon: BarChart3, label: "Valor do Pipeline", value: "R$ 220.000", color: "text-emerald-400" },
  { icon: TrendingUp, label: "Taxa de Conversão", value: "14,3%", color: "text-amber-400" },
];

export default function DashboardPage(): React.ReactElement {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Visão geral das suas métricas de vendas
        </p>
      </div>

      {/* Metric cards skeleton */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {placeholderCards.map(({ icon: Icon, label, value, color }) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
              <Icon className={`h-4 w-4 ${color}`} />
            </div>
            <p className="mt-3 text-2xl font-semibold text-foreground">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Chart placeholder */}
      <div className="rounded-xl border border-dashed border-border bg-card/50 p-8 text-center">
        <BarChart3 className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
        <p className="text-sm font-medium text-muted-foreground">
          Gráfico de funil — M4
        </p>
        <p className="mt-1 text-xs text-muted-foreground/60">
          Implementado no milestone de Dashboard UI
        </p>
      </div>
    </div>
  );
}
