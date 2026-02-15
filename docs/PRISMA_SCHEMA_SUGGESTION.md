# Prisma Schema Suggestion for Qwalo Backend

This document suggests how to model the database for the Qwalo dashboard: **workspaces**, **interviews** (video or voice), and **invitees** (clients/users who receive interview links).

---

## Overview

- **Users** are authenticated via Clerk; store `clerkUserId` to link backend data to identity.
- **Workspaces** belong to a user (or org); each has an organization name (shown in the dashboard header).
- **Interviews** belong to a workspace and have a type: `video` or `voice`.
- **Invitees** are the people (clients/users) an interview is sent to; they have status (e.g. pending, accepted, completed).

---

## Suggested Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// --------------------------------------------
// User (link to Clerk)
// --------------------------------------------
model User {
  id           String   @id @default(cuid())
  clerkUserId  String   @unique
  email        String?
  name         String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  workspaces   Workspace[]
}

// --------------------------------------------
// Workspace (organization + container for interviews)
// --------------------------------------------
model Workspace {
  id                 String   @id @default(cuid())
  name               String
  organizationName   String
  ownerId            String
  owner              User     @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt

  interviews         Interview[]

  @@index([ownerId])
}

// --------------------------------------------
// Interview (video or voice call)
// --------------------------------------------
model Interview {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id], onDelete: Cascade)
  title       String
  mode        InterviewMode
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  invitees    InterviewInvitee[]

  @@index([workspaceId])
}

enum InterviewMode {
  video
  voice
}

// --------------------------------------------
// Invitee (client/user the interview is sent to)
// --------------------------------------------
model InterviewInvitee {
  id          String   @id @default(cuid())
  interviewId String
  interview   Interview @relation(fields: [interviewId], references: [id], onDelete: Cascade)
  email       String
  name        String?
  status      InviteeStatus @default(pending)
  sentAt      DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@unique([interviewId, email])
  @@index([interviewId])
  @@index([email])
}

enum InviteeStatus {
  pending
  accepted
  completed
}
```

---

## Build Order and Conventions

1. **Install Prisma**
   - In your backend repo: `npm i prisma @prisma/client` and `npx prisma init`.

2. **Set `DATABASE_URL`**
   - In `.env`: `DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"`.

3. **Sync with Clerk**
   - After Clerk webhook or first login, create or update `User` by `clerkUserId` (and optionally sync email/name from Clerk).

4. **API design**
   - **Controller** receives request, calls **service**, returns response.
   - **Service** contains business logic (e.g. “can this user create an interview in this workspace?”), calls **db.service** for all DB access.
   - **db.service** (or repository layer) contains only Prisma calls; no business rules.

5. **Suggested endpoints (high level)**
   - `GET/POST /workspaces` — list workspaces for current user, create workspace.
   - `GET/PATCH/DELETE /workspaces/:id` — get/update/delete workspace (with ownership check).
   - `GET/POST /workspaces/:workspaceId/interviews` — list interviews, create interview (with `mode: video | voice`).
   - `GET/PATCH/DELETE /workspaces/:workspaceId/interviews/:id` — get/update/delete interview.
   - `GET/POST /workspaces/:workspaceId/interviews/:id/invitees` — list invitees, add invitee (send to client).
   - `PATCH /workspaces/:workspaceId/interviews/:id/invitees/:inviteeId` — e.g. update status (accepted, completed).

6. **Invite flow**
   - When adding an invitee, create record with `status: pending`, set `sentAt`, and send email/link (via your email or notification service). When the client opens the link and joins, update status to `accepted`; when the call ends, update to `completed` if needed.

7. **Multi-tenancy**
   - Always scope queries by current user: e.g. workspace.ownerId === currentUser.id, or interview.workspace.ownerId === currentUser.id. Do this in the **service** layer, not in the controller.

8. **Migrations**
   - After editing the schema: `npx prisma migrate dev --name descriptive_name` for local/dev; use `prisma migrate deploy` in production.

---

## Optional Extensions

- **Workspace members**: If multiple users can access a workspace, add a `WorkspaceMember` model (workspaceId, userId, role) and scope permissions by membership instead of only owner.
- **Interview scheduling**: Add optional `scheduledAt`, `durationMinutes`, or a separate `InterviewSlot` model if you need calendar-style scheduling.
- **Call metadata**: For compliance or analytics, add a `CallRecord` or similar model linked to `Interview` to store room id, start/end time, and provider (e.g. Twilio, Daily, etc.) when you integrate the actual video/voice provider.

---

*This schema aligns with the frontend types in `client/src/types/dashboard.ts` and the dashboard flows: create workspace → create interview (video/voice) → send to clients.*
