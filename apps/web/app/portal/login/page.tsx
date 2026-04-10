"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";

/**
 * Magic-Link Login Page for the Kundenportal.
 * Sends a one-time login link to the customer's email address.
 * No password required — customers just click the link in their inbox.
 */
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const result = await authClient.signIn.magicLink({
      email,
      callbackURL: "/portal/dashboard",
    });

    if (result.error) {
      setStatus("error");
    } else {
      setStatus("sent");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            Foerderis Kundenportal
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Geben Sie Ihre E-Mail-Adresse ein. Wir schicken Ihnen einen
            Login-Link.
          </p>
        </div>

        {status === "sent" ? (
          <div className="rounded-lg border border-border bg-card p-4 text-center text-sm text-foreground">
            ✉️ Login-Link gesendet!
            <br />
            Bitte prüfen Sie Ihr E-Mail-Postfach.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {status === "loading" ? "Wird gesendet…" : "Login-Link anfordern"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
