/**
 * Dashboard domain types for workspaces, interviews, and invitees.
 * These align with the suggested Prisma schema for the backend.
 */

export type InterviewMode = "video" | "voice";

export interface Workspace {
  id: string;
  name: string;
  organizationName: string;
  createdAt: string;
}

export interface Interview {
  id: string;
  workspaceId: string;
  title: string;
  mode: InterviewMode;
  createdAt: string;
  invitees: InterviewInvitee[];
}

export interface InterviewInvitee {
  id: string;
  interviewId: string;
  email: string;
  name?: string;
  status: "pending" | "accepted" | "completed";
  sentAt?: string;
}
