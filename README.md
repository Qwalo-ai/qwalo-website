# Qwalo Website

Frontend web app for Qwalo, built with React + Vite + TypeScript.

## Prerequisites

- Node.js 20+
- npm 10+

## Getting started

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Environment variables

Create a `.env` file in the project root when needed.

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
```

- If `VITE_CLERK_PUBLISHABLE_KEY` is set, Clerk authentication pages are enabled.
- If missing, auth routes render a fallback `AuthNotConfigured` page.

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run check` — run TypeScript type checks

## Main routes

- `/` — landing page
- `/sign-up`, `/sign-in`, `/waitlist`, `/sso-callback` — auth flow (Clerk-enabled)
- `/dashboard` — workspace dashboard
- `/dashboard/workspaces/:id` — workspace detail

## Tech stack

- React 19
- TypeScript
- Vite
- Wouter (routing)
- TanStack Query
- Tailwind CSS + Radix UI
- Clerk (optional auth)
