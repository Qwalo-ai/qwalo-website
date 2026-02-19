import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, FolderKanban, ChevronRight } from "lucide-react";
import type { Interview, InterviewMode } from "@/types/dashboard";
import { useDashboard } from "@/context/DashboardContext";

/**
 * Create interview form shown from dashboard.
 */
function CreateInterviewForm({
  title,
  setTitle,
  mode,
  setMode,
  workspaceId,
  setWorkspaceId,
  onSubmit,
  onCancel,
  workspaces,
}: {
  title: string;
  setTitle: (v: string) => void;
  mode: InterviewMode;
  setMode: (v: InterviewMode) => void;
  workspaceId: string;
  setWorkspaceId: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  workspaces: { id: string; name: string; organizationName: string }[];
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="interview-title" className="text-gray-700">Interview title</Label>
        <Input
          id="interview-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Product feedback round 1"
          className="rounded-xl border-gray-200"
          required
        />
      </div>

      <div className="space-y-2">
        <Label className="text-gray-700">Workspace</Label>
        <Select value={workspaceId} onValueChange={setWorkspaceId}>
          <SelectTrigger className="rounded-xl border-gray-200">
            <SelectValue placeholder="Select workspace" />
          </SelectTrigger>
          <SelectContent>
            {workspaces.map((ws) => (
              <SelectItem key={ws.id} value={ws.id}>{ws.name} · {ws.organizationName}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-gray-700">Interview type</Label>
        <Select value={mode} onValueChange={(v) => setMode(v as InterviewMode)}>
          <SelectTrigger className="rounded-xl border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="video">Video call</SelectItem>
            <SelectItem value="voice">Voice call</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DialogFooter className="gap-2 sm:gap-0">
        <Button type="button" variant="outline" onClick={onCancel} className="rounded-xl">
          Cancel
        </Button>
        <Button type="submit" className="rounded-xl bg-gray-900 hover:bg-gray-800 text-white">
          Create interview
        </Button>
      </DialogFooter>
    </form>
  );
}

/**
 * Main dashboard page: show workspaces and start the flow by creating an interview.
 */
export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { workspaces, addInterview } = useDashboard();
  const [dialogOpen, setDialogOpen] = useState(true);
  const [newTitle, setNewTitle] = useState("");
  const [newMode, setNewMode] = useState<InterviewMode>("video");
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(workspaces[0]?.id ?? "");

  useEffect(() => {
    setDialogOpen(true);
  }, []);

  useEffect(() => {
    if (!selectedWorkspaceId && workspaces[0]?.id) {
      setSelectedWorkspaceId(workspaces[0].id);
    }
  }, [selectedWorkspaceId, workspaces]);

  const handleCreateInterview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !selectedWorkspaceId) return;

    const interview: Interview = {
      id: `int-${Date.now()}`,
      workspaceId: selectedWorkspaceId,
      title: newTitle.trim(),
      mode: newMode,
      createdAt: new Date().toISOString(),
      invitees: [],
    };

    addInterview(interview);
    setNewTitle("");
    setNewMode("video");
    setDialogOpen(false);
    setLocation(`/dashboard/workspaces/${selectedWorkspaceId}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Workspaces</h1>
            <p className="text-gray-500 mt-1">Start by creating an interview, then manage invites inside your workspace.</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white shadow-lg shadow-brand-purple/20">
                <Plus className="mr-2 h-4 w-4" />
                New interview
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl border-gray-100">
              <DialogHeader>
                <DialogTitle className="text-gray-900">Create interview</DialogTitle>
                <DialogDescription className="text-gray-500">
                  This is the first step. After creating it, you can open the workspace and send client invites.
                </DialogDescription>
              </DialogHeader>
              <CreateInterviewForm
                title={newTitle}
                setTitle={setNewTitle}
                mode={newMode}
                setMode={setNewMode}
                workspaceId={selectedWorkspaceId}
                setWorkspaceId={setSelectedWorkspaceId}
                onSubmit={handleCreateInterview}
                onCancel={() => setDialogOpen(false)}
                workspaces={workspaces}
              />
            </DialogContent>
          </Dialog>
        </div>

        {workspaces.length === 0 ? (
          <Card className="rounded-2xl border-gray-100 bg-gray-50/50">
            <CardHeader>
              <CardTitle className="text-gray-900">No workspaces found</CardTitle>
              <CardDescription>Add a workspace first to start creating interviews.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workspaces.map((ws) => (
              <li key={ws.id}>
                <Link href={`/dashboard/workspaces/${ws.id}`}>
                  <Card className="rounded-2xl border-gray-100 shadow-sm transition-all hover:shadow-md hover:border-brand-purple/20 cursor-pointer h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="rounded-xl bg-brand-purple/10 p-2">
                          <FolderKanban className="h-5 w-5 text-brand-purple" />
                        </div>
                        <CardTitle className="text-gray-900 truncate">{ws.name}</CardTitle>
                      </div>
                      <CardDescription className="text-gray-500">{ws.organizationName}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <span className="inline-flex items-center text-sm font-medium text-brand-purple">
                        Open <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
}
