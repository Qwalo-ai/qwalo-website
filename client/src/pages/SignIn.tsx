import { useState, useEffect } from "react";
import { useSignIn, useAuth } from "@clerk/clerk-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

/**
 * Google "G" logo for the Continue with Google button
 */
function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function SignIn() {
  const { signIn, isLoaded, setActive } = useSignIn();
  const { isSignedIn } = useAuth();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setLocation("/");
    }
  }, [isLoaded, isSignedIn, setLocation]);

  if (isLoaded && isSignedIn) {
    return null;
  }

  const handleGoogleSignIn = async () => {
    if (!isLoaded || !signIn) return;
    setError("");
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: `${window.location.origin}/sso-callback`,
        redirectUrlComplete: `${window.location.origin}/dashboard`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) return;
    setError("");
    setLoading(true);
    try {
      await signIn.create({ identifier: email });
      const result = await signIn.attemptFirstFactor({
        strategy: "password",
        password,
      });
      if (result.status === "complete" && result.createdSessionId) {
        await setActive({ session: result.createdSessionId });
        setLocation("/");
      } else {
        setError("Sign-in incomplete. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <Navbar />
      <main className="min-h-screen flex flex-col lg:flex-row">
        <div className="hidden lg:flex lg:w-1/2 min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-50 to-white items-center justify-center p-12">
          <div className="max-w-md text-center">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-brand-purple/10 to-blue-100 flex items-center justify-center">
              <svg
                className="w-3/4 h-3/4 text-brand-purple/30"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
              </svg>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Welcome back. Sign in to continue.
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[420px]">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                Qwalo
              </h1>
              <p className="text-gray-500 text-sm mt-1 mb-6">
                Welcome back! Sign in to your account.
              </p>

              <form onSubmit={handleEmailSubmit} className="space-y-5">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 rounded-xl border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium"
                  onClick={handleGoogleSignIn}
                  disabled={!isLoaded}
                >
                  <GoogleIcon />
                  Continue with Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-400">or</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 rounded-xl border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="h-11 rounded-xl border-gray-200 pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={() => setShowPassword((p) => !p)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium"
                  disabled={loading || !isLoaded}
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </Button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="font-semibold text-gray-900 hover:text-brand-purple cursor-pointer"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
