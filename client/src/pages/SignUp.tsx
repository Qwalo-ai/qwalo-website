import { useState, useEffect } from "react";
import { useSignUp, useAuth } from "@clerk/clerk-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ChevronRight } from "lucide-react";

/**
 * Google "G" logo as inline SVG for the Continue with Google button
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

export default function SignUp() {
  const { signUp, isLoaded, setActive } = useSignUp();
  const { isSignedIn } = useAuth();
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      setLocation("/");
    }
  }, [isLoaded, isSignedIn, setLocation]);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState<"form" | "verify">("form");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isLoaded && isSignedIn) {
    return null;
  }

  const handleGoogleSignUp = async () => {
    if (!isLoaded || !signUp) return;
    setError("");
    try {
      await signUp.authenticateWithRedirect({
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
    if (!isLoaded || !signUp) return;
    setError("");
    setLoading(true);
    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setStep("verify");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create account");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;
    setError("");
    setLoading(true);
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      if (result.status === "complete" && result.createdSessionId) {
        await setActive({ session: result.createdSessionId });
        setLocation("/dashboard");
      } else {
        setError("Verification incomplete. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Left: Illustration panel */}
        <div className="hidden lg:flex lg:w-1/2 min-h-screen bg-gradient-to-br from-blue-50 to-white items-center justify-center px-16 py-20">
          <div className="w-full max-w-md flex items-center justify-center p-10">
            <img
              src="/qwalo-signup.png"
              alt="Qwalo sign up"
              className="w-full max-h-[75vh] object-contain object-center rounded-[2rem] shadow-lg"
            />
          </div>
        </div>

        {/* Right: Form card */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[420px]">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Qwalo
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Welcome! Please fill in the details to get started.
                </p>
              </div>

              {step === "form" ? (
                <form onSubmit={handleEmailSubmit} className="space-y-5">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-11 rounded-xl border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium"
                    onClick={handleGoogleSignUp}
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
              ) : (
                <form onSubmit={handleVerifyCode} className="space-y-5">
                  <p className="text-sm text-gray-600">
                    We sent a verification code to <strong>{email}</strong>.
                    Enter it below.
                  </p>
                  <div className="space-y-2">
                    <Label htmlFor="code" className="text-gray-700">
                      Verification code
                    </Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="h-11 rounded-xl border-gray-200"
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-600" role="alert">
                      {error}
                    </p>
                  )}
                  <Button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium"
                    disabled={loading || !verificationCode.trim()}
                  >
                    Verify and continue
                  </Button>
                  <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-gray-700"
                    onClick={() => setStep("form")}
                  >
                    Use a different email
                  </button>
                </form>
              )}

              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="font-semibold text-gray-900 hover:text-brand-purple cursor-pointer"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
