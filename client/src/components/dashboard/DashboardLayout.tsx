import { Link, useLocation } from "wouter";
import { ReactNode, useMemo, useState } from "react";
import logoUrl from "@assets/logo.png";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut, PanelLeftClose, PanelLeftOpen, Building2, FolderKanban } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  /** Organization/workspace name shown in header when inside a workspace */
  organizationName?: string | null;
  /** Current workspace context for sidebar navigation */
  workspaceName?: string | null;
  workspaceId?: string | null;
}

/**
 * Wraps dashboard pages with consistent layout and nav.
 */
export function DashboardLayout({ children, organizationName, workspaceName, workspaceId }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isDashboardRoot = location === "/dashboard" || location === "/dashboard/";
  const workspaceHref = workspaceId ? `/dashboard/workspaces/${workspaceId}` : null;
  const isWorkspacePage = Boolean(workspaceHref && location === workspaceHref);

  const navItems = useMemo(
    () => [
      {
        href: "/dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        isActive: isDashboardRoot,
      },
      ...(workspaceHref && workspaceName
        ? [
            {
              href: workspaceHref,
              label: workspaceName,
              icon: FolderKanban,
              isActive: isWorkspacePage,
            },
          ]
        : []),
    ],
    [isDashboardRoot, isWorkspacePage, workspaceHref, workspaceName]
  );

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            "hidden border-r border-gray-100 bg-white transition-all duration-200 md:flex md:flex-col",
            sidebarCollapsed ? "w-20" : "w-64"
          )}
        >
          <div className="flex h-14 items-center border-b border-gray-100 px-3">
            <Link href="/dashboard" className="flex items-center gap-2 overflow-hidden cursor-pointer">
              <img src={logoUrl} alt="Qwalo" className="h-8 w-auto object-contain" />
              {!sidebarCollapsed && <span className="text-lg font-semibold text-gray-900">Qwalo</span>}
            </Link>
          </div>

          <nav className="flex-1 px-2 py-4">
            <ul className="space-y-2">
              {navItems.map(({ href, label, icon: Icon, isActive }) => (
                <li key={href}>
                  <Link href={href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "h-11 w-full justify-start rounded-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                        isActive && "bg-gray-100 text-gray-900",
                        sidebarCollapsed && "justify-center px-0"
                      )}
                    >
                      <Icon className={cn("h-5 w-5 shrink-0", !sidebarCollapsed && "mr-2")} />
                      {!sidebarCollapsed && label}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-gray-100 p-2">
            <Link href="/">
              <Button
                variant="outline"
                className={cn(
                  "h-11 w-full rounded-xl border-gray-200 text-gray-700",
                  sidebarCollapsed && "px-0"
                )}
              >
                <LogOut className={cn("h-4 w-4 shrink-0", !sidebarCollapsed && "mr-2")} />
                {!sidebarCollapsed && "Back to site"}
              </Button>
            </Link>
          </div>
        </aside>

        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="flex h-14 items-center justify-between px-4 lg:px-6">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden md:inline-flex"
                  onClick={() => setSidebarCollapsed((current) => !current)}
                  aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                  {sidebarCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
                </Button>
                <Link href="/dashboard" className="md:hidden flex items-center gap-2 cursor-pointer">
                  <img src={logoUrl} alt="Qwalo" className="h-8 w-auto object-contain" />
                </Link>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5">
                <Building2 className="h-4 w-4 text-gray-500" />
                <span className="max-w-[180px] truncate text-sm font-medium text-gray-700 sm:max-w-[260px]">
                  {organizationName || "Organization"}
                </span>
              </div>
            </div>
          </header>

          <main className="px-4 py-8 lg:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
