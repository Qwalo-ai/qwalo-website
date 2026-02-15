import { createRoot } from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!publishableKey) {
  console.warn(
    "Missing VITE_CLERK_PUBLISHABLE_KEY. Add it to .env to enable authentication."
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  publishableKey ? (
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  ) : (
    <App />
  )
);
