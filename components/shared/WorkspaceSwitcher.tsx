"use client";

import { useState } from "react";
import { ChevronDown, Check, Plus, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { mockWorkspaces } from "@/lib/mock-data";
import type { Workspace } from "@/types";

export function WorkspaceSwitcher(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>(mockWorkspaces[0].id);

  const active = mockWorkspaces.find((w) => w.id === activeId) as Workspace;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-sm transition-colors hover:bg-sidebar-accent"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/20">
          <Building2 className="h-3.5 w-3.5 text-primary" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-medium leading-tight text-sidebar-foreground">
            {active.name}
          </span>
          <span className="text-[11px] capitalize text-sidebar-foreground/50">
            Plano {active.plan}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 shrink-0 text-sidebar-foreground/40 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <>
          {/* backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* dropdown */}
          <div
            role="listbox"
            className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-lg border border-border bg-popover shadow-xl"
          >
            {mockWorkspaces.map((ws) => (
              <button
                key={ws.id}
                role="option"
                aria-selected={ws.id === activeId}
                onClick={() => {
                  setActiveId(ws.id);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/20">
                  <Building2 className="h-3 w-3 text-primary" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate font-medium text-foreground">
                    {ws.name}
                  </span>
                  <span className="text-[11px] capitalize text-muted-foreground">
                    Plano {ws.plan}
                  </span>
                </span>
                {ws.id === activeId && (
                  <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                )}
              </button>
            ))}

            <div className="border-t border-border">
              <button className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                <Plus className="h-3.5 w-3.5" />
                Criar workspace
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
