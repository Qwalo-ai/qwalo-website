import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import logoUrl from "@assets/logo.png";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FolderKanban, Video, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  /** Organization/workspace name shown in header when inside a workspace */
  organizationName?: string | null;
}

/**
 * Wraps dashboard pages with consistent layout and nav.
 * Uses the same visual theme as the landing page (white, brand-purple, gray-900).
 */
export function DashboardLayout({ children, organizationName }: DashboardLayoutProps) {
  const [location] = useLocation();
  const isDashboardRoot = location === "/dashboard" || location === "/dashboard/";
  const isWorkspace = location.startsWith("/dashboard/workspaces/");

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900 cursor-pointer">
              <img src={logoUrl} alt="Qwalo" className="h-8 w-auto object-contain" />
            </Link>
            {(organizationName || isWorkspace) && (
              <span className="hidden text-gray-500 sm:inline" aria-hidden>
                /
              </span>
            )}
            {organizationName && (
              <span className="truncate max-w-[200px] sm:max-w-[280px] text-gray-700 font-semibold">
                {organizationName}
              </span>
            )}
          </div>
          <nav className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                  isDashboardRoot && "bg-gray-100 text-gray-900"
                )}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="rounded-full border-gray-200 text-gray-700">
                <LogOut className="mr-2 h-4 w-4" />
                Back to site
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 lg:px-6">{children}</main>
    </div>
  );
}
