import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Workspace, Interview, InterviewInvitee } from "@/types/dashboard";

interface DashboardState {
  workspaces: Workspace[];
  interviews: Interview[];
}

interface DashboardContextValue extends DashboardState {
  addWorkspace: (ws: Workspace) => void;
  getWorkspaceById: (id: string) => Workspace | undefined;
  addInterview: (interview: Interview) => void;
  getInterviewsByWorkspaceId: (workspaceId: string) => Interview[];
  addInvitee: (interviewId: string, invitee: Omit<InterviewInvitee, "id" | "interviewId">) => void;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

const DEMO_WORKSPACES: Workspace[] = [
  {
    id: "ws-1",
    name: "Product Research",
    organizationName: "Acme Inc",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Provides workspaces and interviews state to dashboard pages.
 * Replace with API calls when backend is ready.
 */
export function DashboardProvider({ children }: { children: ReactNode }) {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(DEMO_WORKSPACES);
  const [interviews, setInterviews] = useState<Interview[]>([]);

  const addWorkspace = useCallback((ws: Workspace) => {
    setWorkspaces((prev) => [ws, ...prev]);
  }, []);

  const getWorkspaceById = useCallback(
    (id: string) => workspaces.find((w) => w.id === id),
    [workspaces]
  );

  const addInterview = useCallback((interview: Interview) => {
    setInterviews((prev) => [interview, ...prev]);
  }, []);

  const getInterviewsByWorkspaceId = useCallback(
    (workspaceId: string) =>
      interviews.filter((i) => i.workspaceId === workspaceId),
    [interviews]
  );

  const addInvitee = useCallback(
    (interviewId: string, invitee: Omit<InterviewInvitee, "id" | "interviewId">) => {
      setInterviews((prev) =>
        prev.map((i) => {
          if (i.id !== interviewId) return i;
          const newInvitee: InterviewInvitee = {
            ...invitee,
            id: `inv-${Date.now()}`,
            interviewId,
          };
          return { ...i, invitees: [...i.invitees, newInvitee] };
        })
      );
    },
    []
  );

  const value: DashboardContextValue = {
    workspaces,
    interviews,
    addWorkspace,
    getWorkspaceById,
    addInterview,
    getInterviewsByWorkspaceId,
    addInvitee,
  };

  return (
    <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
  );
}

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within DashboardProvider");
  return ctx;
}
