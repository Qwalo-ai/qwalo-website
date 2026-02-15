import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardProvider } from "@/context/DashboardContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import SsoCallback from "@/pages/SsoCallback";
import AuthNotConfigured from "@/pages/AuthNotConfigured";
import Waitlist from "@/pages/Waitlist";
import Dashboard from "@/pages/dashboard/Dashboard";
import WorkspaceDetail from "@/pages/dashboard/WorkspaceDetail";

const hasClerk = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sign-up" component={hasClerk ? SignUp : AuthNotConfigured} />
      <Route path="/sign-in" component={hasClerk ? SignIn : AuthNotConfigured} />
      <Route path="/waitlist" component={hasClerk ? Waitlist : AuthNotConfigured} />
      <Route path="/sso-callback" component={hasClerk ? SsoCallback : AuthNotConfigured} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/workspaces/:id" component={WorkspaceDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DashboardProvider>
          <Toaster />
          <Router />
        </DashboardProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
