import { useState } from "react";
import { Link, useParams } from "wouter";
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
import { Badge } from "@/components/ui/badge";
import { Plus, Video, Mic, ArrowLeft, UserPlus } from "lucide-react";
import type { Interview, InterviewMode } from "@/types/dashboard";
import { useDashboard } from "@/context/DashboardContext";
import { cn } from "@/lib/utils";

/**
 * Create interview form: title + mode (video | voice).
 */
function CreateInterviewForm({
  title,
  setTitle,
  mode,
  setMode,
  onSubmit,
  onCancel,
}: {
  title: string;
  setTitle: (v: string) => void;
  mode: InterviewMode;
  setMode: (v: InterviewMode) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
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
        <Label className="text-gray-700">Type</Label>
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
          Create
        </Button>
      </DialogFooter>
    </form>
  );
}

/**
 * Invite client form: email + optional name.
 */
function InviteClientForm({
  email,
  setEmail,
  name,
  setName,
  onSubmit,
  onCancel,
}: {
  email: string;
  setEmail: (v: string) => void;
  name: string;
  setName: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="invite-email" className="text-gray-700">Email</Label>
        <Input
          id="invite-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="client@example.com"
          className="rounded-xl border-gray-200"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="invite-name" className="text-gray-700">Name (optional)</Label>
        <Input
          id="invite-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Client name"
          className="rounded-xl border-gray-200"
        />
      </div>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button type="button" variant="outline" onClick={onCancel} className="rounded-xl">
          Cancel
        </Button>
        <Button type="submit" className="rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white">
          Send invite
        </Button>
      </DialogFooter>
    </form>
  );
}

/**
 * Workspace detail: list interviews, create interview (video/voice), invite clients.
 */
export default function WorkspaceDetail() {
  const params = useParams<{ id: string }>();
  const workspaceId = params?.id;
  const {
    getWorkspaceById,
    getInterviewsByWorkspaceId,
    addInterview,
    addInvitee,
  } = useDashboard();

  const workspace = workspaceId ? getWorkspaceById(workspaceId) : null;
  const interviews = workspaceId ? getInterviewsByWorkspaceId(workspaceId) : [];

  const [createOpen, setCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newMode, setNewMode] = useState<InterviewMode>("video");

  const [inviteOpen, setInviteOpen] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteName, setInviteName] = useState("");

  if (!workspaceId || !workspace) {
    return (
      <DashboardLayout>
        <Card className="rounded-2xl border-gray-100">
          <CardContent className="py-12 text-center">
            <p className="text-gray-500">Workspace not found.</p>
            <Link href="/dashboard">
              <Button variant="outline" className="mt-4 rounded-xl">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </DashboardLayout>
    );
  }

  const handleCreateInterview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const interview: Interview = {
      id: `int-${Date.now()}`,
      workspaceId: workspace.id,
      title: newTitle.trim(),
      mode: newMode,
      createdAt: new Date().toISOString(),
      invitees: [],
    };
    addInterview(interview);
    setNewTitle("");
    setNewMode("video");
    setCreateOpen(false);
  };

  const handleInvite = (e: React.FormEvent, interviewId: string) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    addInvitee(interviewId, {
      email: inviteEmail.trim(),
      name: inviteName.trim() || undefined,
      status: "pending",
      sentAt: new Date().toISOString(),
    });
    setInviteEmail("");
    setInviteName("");
    setInviteOpen(null);
  };

  return (
    <DashboardLayout organizationName={workspace.organizationName}>
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 mb-2 -ml-2 rounded-xl">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Workspaces
              </Button>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">{workspace.name}</h1>
            <p className="text-gray-500 mt-1">Create interviews and send them to clients as video or voice calls.</p>
          </div>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
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
                  Choose a title and whether the interview will be a video call or voice call.
                </DialogDescription>
              </DialogHeader>
              <CreateInterviewForm
                title={newTitle}
                setTitle={setNewTitle}
                mode={newMode}
                setMode={setNewMode}
                onSubmit={handleCreateInterview}
                onCancel={() => setCreateOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {interviews.length === 0 ? (
          <Card className="rounded-2xl border-gray-100 bg-gray-50/50">
            <CardHeader>
              <CardTitle className="text-gray-900">No interviews yet</CardTitle>
              <CardDescription>Create an interview to send to clients. They can join via video or voice call.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                className="rounded-xl bg-brand-purple hover:bg-brand-purple-dark text-white"
                onClick={() => setCreateOpen(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create interview
              </Button>
            </CardContent>
          </Card>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {interviews.map((int) => (
              <Card key={int.id} className="rounded-2xl border-gray-100 shadow-sm">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className={cn(
                        "rounded-xl p-2 shrink-0",
                        int.mode === "video" ? "bg-blue-100" : "bg-amber-100"
                      )}>
                        {int.mode === "video" ? (
                          <Video className="h-5 w-5 text-blue-600" />
                        ) : (
                          <Mic className="h-5 w-5 text-amber-600" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-gray-900 truncate">{int.title}</CardTitle>
                        <CardDescription className="text-gray-500 capitalize">{int.mode} call</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="shrink-0 rounded-lg">
                      {int.invitees.length} invitee{int.invitees.length !== 1 ? "s" : ""}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {int.invitees.length > 0 && (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {int.invitees.map((inv) => (
                        <li key={inv.id} className="flex items-center gap-2">
                          <span className="truncate">{inv.email}</span>
                          <Badge variant="outline" className="text-xs shrink-0 rounded">
                            {inv.status}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Dialog open={inviteOpen === int.id} onOpenChange={(open) => setInviteOpen(open ? int.id : null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full rounded-xl border-gray-200">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Send to client
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md rounded-2xl border-gray-100">
                      <DialogHeader>
                        <DialogTitle className="text-gray-900">Invite to interview</DialogTitle>
                        <DialogDescription className="text-gray-500">
                          Send this {int.mode} interview to a client. They will receive a link to join.
                        </DialogDescription>
                      </DialogHeader>
                      <InviteClientForm
                        email={inviteEmail}
                        setEmail={setInviteEmail}
                        name={inviteName}
                        setName={setInviteName}
                        onSubmit={(e) => handleInvite(e, int.id)}
                        onCancel={() => setInviteOpen(null)}
                      />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </ul>
        )}
      </div>
    </DashboardLayout>
  );
}
