import { Link, useRouterState } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { learningNav, primaryNav, utilityNav, type NavItem } from "@/components/app/nav-items";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

function NavGroup({
  label,
  items,
  pathname,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <div className="space-y-1">
      <h2 className="px-3 pt-4 pb-1 text-[0.65rem] font-semibold tracking-widest text-muted-foreground uppercase">
        {label}
      </h2>
      {items.map((item) => {
        const active = pathname === item.to;
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
              active
                ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
            )}
          >
            <item.icon className="size-4 shrink-0" aria-hidden />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export function AppSidebarContent({
  onNavigate,
  onSignOut,
}: {
  onNavigate?: () => void;
  onSignOut: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-16 shrink-0 items-center border-b px-4">
        <Logo />
      </div>
      <ScrollArea className="flex-1">
        <nav aria-label="Application" className="px-3 pb-4">
          <NavGroup label="Overview" items={primaryNav} pathname={pathname} onNavigate={onNavigate} />
          <NavGroup label="Learning" items={learningNav} pathname={pathname} onNavigate={onNavigate} />
          <NavGroup label="More" items={utilityNav} pathname={pathname} onNavigate={onNavigate} />
        </nav>
      </ScrollArea>
      <div className="border-t p-3">
        <button
          type="button"
          onClick={onSignOut}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="size-4" aria-hidden />
          Logout
        </button>
      </div>
    </div>
  );
}