import { Waitlist } from "@clerk/clerk-react";

/**
 * Dedicated waitlist page with same layout as sign-in: split view,
 * illustration on the left, Clerk Waitlist on the right in a card.
 * No Navbar or Footer.
 */
export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-purple/20">
      <main className="min-h-screen flex flex-col lg:flex-row">
        {/* Left: Illustration panel */}
        <div className="hidden lg:flex lg:w-1/2 min-h-screen bg-gradient-to-br from-blue-50 to-white items-center justify-center px-16 py-20">
          <div className="w-full max-w-md flex items-center justify-center p-10">
            <img
              src="/qwalo-signup.png"
              alt="Qwalo waitlist"
              className="w-full max-h-[75vh] object-contain object-center rounded-[2rem] shadow-lg"
            />
          </div>
        </div>

        {/* Right: Waitlist card */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-white">
          <div className="w-full max-w-[420px]">
            <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  Qwalo
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Join the waitlist and we&apos;ll let you know when your spot is ready.
                </p>
              </div>
              <div className="[&_.cl-waitlist]:!rounded-xl [&_.cl-waitlist]:!border-0 [&_.cl-waitlist]:!shadow-none">
                <Waitlist afterJoinWaitlistUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
