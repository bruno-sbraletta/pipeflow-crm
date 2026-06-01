"use client";

import { useState } from "react";
import { Menu, Search, LogOut, User, Settings } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onMenuClick: () => void;
}

function UserMenu(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-accent"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Avatar className="h-7 w-7">
          <AvatarFallback className="bg-primary text-[11px] font-semibold text-primary-foreground">
            AD
          </AvatarFallback>
        </Avatar>
        <span className="hidden text-sm font-medium text-foreground sm:inline">
          Admin
        </span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="menu"
            className="absolute right-0 top-full z-20 mt-1.5 w-52 overflow-hidden rounded-lg border border-border bg-popover shadow-xl"
          >
            <div className="border-b border-border px-3 py-2.5">
              <p className="text-sm font-medium text-foreground">Admin</p>
              <p className="truncate text-xs text-muted-foreground">
                admin@agenciadigital.com
              </p>
            </div>

            <div className="py-1">
              <Link
                href="/settings"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              >
                <User className="h-3.5 w-3.5" />
                Perfil
              </Link>
              <Link
                href="/settings"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Settings className="h-3.5 w-3.5" />
                Configurações
              </Link>
            </div>

            <div className="border-t border-border py-1">
              <button
                role="menuitem"
                className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sair
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function Navbar({ onMenuClick }: NavbarProps): React.ReactElement {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-accent hover:text-foreground md:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Search */}
      <div
        className={cn(
          "hidden items-center gap-2 rounded-lg border px-3 py-1.5 transition-all sm:flex",
          searchFocused
            ? "w-72 border-ring bg-background"
            : "w-56 border-transparent bg-accent"
        )}
      >
        <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <input
          type="search"
          placeholder="Buscar leads, negócios..."
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      {/* Mobile search icon */}
      <button
        className="flex h-8 w-8 items-center justify-center rounded-md text-foreground/60 transition-colors hover:bg-accent hover:text-foreground sm:hidden"
        aria-label="Buscar"
      >
        <Search className="h-4 w-4" />
      </button>

      <div className="ml-auto flex items-center gap-1">
        <UserMenu />
      </div>
    </header>
  );
}
