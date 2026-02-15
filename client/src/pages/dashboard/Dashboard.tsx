import { useState } from "react";
import { Link } from "wouter";
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
import { Plus, FolderKanban, ChevronRight } from "lucide-react";
import type { Workspace } from "@/types/dashboard";
import { useDashboard } from "@/context/DashboardContext";

/**
 * Create workspace form content; shared by trigger and empty state.
 */
function CreateWorkspaceForm({
  newName,
  setNewName,
  newOrgName,
  setNewOrgName,
  onSubmit,
  onCancel,
}: {
  newName: string;
  setNewName: (v: string) => void;
  newOrgName: string;
  setNewOrgName: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="org-name" className="text-gray-700">Organization name</Label>
        <Input
          id="org-name"
          value={newOrgName}
          onChange={(e) => setNewOrgName(e.target.value)}
          placeholder="e.g. Acme Inc"
          className="rounded-xl border-gray-200"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ws-name" className="text-gray-700">Workspace name</Label>
        <Input
          id="ws-name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="e.g. Product Research"
          className="rounded-xl border-gray-200"
          required
        />
      </div>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button type="button" variant="outline" onClick={onCancel} className="rounded-xl">
          Cancel
        </Button>
        <Button type="submit" className="rounded-xl bg-gray-900 hover:bg-gray-800 text-white">
          Create
        </Button>
      </DialogFooter>
    </form>
  );
}

/**
 * Main dashboard page: list workspaces and create new ones.
 */
export default function Dashboard() {
  const { workspaces, addWorkspace } = useDashboard();
  const [newName, setNewName] = useState("");
  const [newOrgName, setNewOrgName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCreateWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newOrgName.trim()) return;
    const ws: Workspace = {
      id: `ws-${Date.now()}`,
      name: newName.trim(),
      organizationName: newOrgName.trim(),
      createdAt: new Date().toISOString(),
    };
    addWorkspace(ws);
    setNewName("");
    setNewOrgName("");
    setDialogOpen(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Workspaces</h1>
            <p className="text-gray-500 mt-1">Create workspaces and manage interviews for your organization.</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white shadow-lg shadow-brand-purple/20">
                <Plus className="mr-2 h-4 w-4" />
                New workspace
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-2xl border-gray-100">
              <DialogHeader>
                <DialogTitle className="text-gray-900">Create workspace</DialogTitle>
                <DialogDescription className="text-gray-500">
                  Create a workspace to organize interviews. The organization name will appear in the header.
                </DialogDescription>
              </DialogHeader>
              <CreateWorkspaceForm
                newName={newName}
                setNewName={setNewName}
                newOrgName={newOrgName}
                setNewOrgName={setNewOrgName}
                onSubmit={handleCreateWorkspace}
                onCancel={() => setDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {workspaces.length === 0 ? (
          <Card className="rounded-2xl border-gray-100 bg-gray-50/50">
            <CardHeader>
              <CardTitle className="text-gray-900">No workspaces yet</CardTitle>
              <CardDescription>Create your first workspace to start adding interviews and inviting clients.</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white">
                    <Plus className="mr-2 h-4 w-4" />
                    Create workspace
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-2xl border-gray-100">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">Create workspace</DialogTitle>
                    <DialogDescription className="text-gray-500">
                      Create a workspace to organize interviews. The organization name will appear in the header.
                    </DialogDescription>
                  </DialogHeader>
                  <CreateWorkspaceForm
                    newName={newName}
                    setNewName={setNewName}
                    newOrgName={newOrgName}
                    setNewOrgName={setNewOrgName}
                    onSubmit={handleCreateWorkspace}
                    onCancel={() => setDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
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
