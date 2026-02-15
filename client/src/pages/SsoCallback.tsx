import { useEffect } from "react";
import { useLocation } from "wouter";
import { AuthenticateWithRedirectCallback, useAuth } from "@clerk/clerk-react";

const DASHBOARD_PATH = "/dashboard";

/**
 * Handles OAuth redirect from Google (or other providers) and completes sign-in/sign-up.
 * Must be mounted on the route used as redirectUrl in authenticateWithRedirect().
 * Passes fallback redirect URLs so Clerk redirects to dashboard after success.
 */
export default function SsoCallback() {
  const { isSignedIn } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (isSignedIn) {
      setLocation(DASHBOARD_PATH);
    }
  }, [isSignedIn, setLocation]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <AuthenticateWithRedirectCallback
        signUpFallbackRedirectUrl={DASHBOARD_PATH}
        signInFallbackRedirectUrl={DASHBOARD_PATH}
      />
      <p className="mt-6 text-sm text-gray-500">Completing sign-in…</p>
    </div>
  );
}
