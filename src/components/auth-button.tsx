"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function AuthButton() {
  const { data: session } = authClient.useSession();

  return session ? (
    <Button onClick={async () => await authClient.signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={async () => await authClient.signIn.social({ provider: "google" })}>
      Sign In with Google
    </Button>
  );
}