import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

/**
 * Shown on /sign-in and /sign-up when VITE_CLERK_PUBLISHABLE_KEY is not set.
 */
export default function AuthNotConfigured() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900">Authentication not configured</h1>
          <p className="mt-2 text-gray-500 text-sm">
            Add <code className="bg-gray-100 px-1 rounded">VITE_CLERK_PUBLISHABLE_KEY</code> to your{" "}
            <code className="bg-gray-100 px-1 rounded">.env</code> file and restart the dev server to enable sign-in.
          </p>
          <Link href="/">
            <Button className="mt-6">Back to home</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
