"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Kanban,
  Settings,
  Workflow,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Users },
  { href: "/pipeline", label: "Pipeline", icon: Kanban },
] as const;

function NavLink({
  href,
  label,
  icon: Icon,
  onClick,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  onClick?: () => void;
}): React.ReactElement {
  const pathname = usePathname();
  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-sidebar-foreground/55 hover:bg-sidebar-accent hover:text-sidebar-foreground"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0 transition-colors",
          isActive ? "text-primary" : "text-sidebar-foreground/40 group-hover:text-sidebar-foreground/70"
        )}
      />
      {label}
      {isActive && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
      )}
    </Link>
  );
}

function Logo(): React.ReactElement {
  return (
    <div className="flex h-14 items-center gap-2.5 px-4">
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary shadow-sm shadow-primary/30">
        <Workflow className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="text-[15px] font-semibold tracking-tight text-sidebar-foreground">
        PipeFlow
      </span>
    </div>
  );
}

export function SidebarContent({
  onClose,
}: {
  onClose?: () => void;
}): React.ReactElement {
  const pathname = usePathname();
  const isSettingsActive =
    pathname === "/settings" || pathname.startsWith("/settings/");

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-sidebar-border">
        <Logo />
        {onClose && (
          <button
            onClick={onClose}
            className="mr-3 flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
            aria-label="Fechar menu"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="border-b border-sidebar-border px-3 py-3">
        <WorkspaceSwitcher />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3">
        <div className="flex flex-col gap-0.5">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} onClick={onClose} />
          ))}
        </div>
      </nav>

      <div className="border-t border-sidebar-border px-3 py-3">
        <Link
          href="/settings"
          onClick={onClose}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
            isSettingsActive
              ? "bg-primary/10 text-primary"
              : "text-sidebar-foreground/55 hover:bg-sidebar-accent hover:text-sidebar-foreground"
          )}
        >
          <Settings
            className={cn(
              "h-4 w-4 shrink-0",
              isSettingsActive ? "text-primary" : "text-sidebar-foreground/40"
            )}
          />
          Configurações
          {isSettingsActive && (
            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
          )}
        </Link>
      </div>
    </div>
  );
}

export function Sidebar(): React.ReactElement {
  return (
    <aside className="hidden w-60 shrink-0 flex-col bg-sidebar md:flex">
      <SidebarContent />
    </aside>
  );
}
