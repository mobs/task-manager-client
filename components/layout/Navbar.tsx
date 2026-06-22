"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useLogout } from "@/features/auth/hooks/useLogout";

export function Navbar() {
  const { isAuthenticated } = useAuth();
  const { logout } = useLogout();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="border-b bg-white p-3">
        <div className="flex justify-between">
          <Link href="/" className="text-xl font-bold">
            Task Manager
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className="border-b bg-white p-3">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold">
          Task Manager
        </Link>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link href="/">
                <Button variant="secondary">Tasks</Button>
              </Link>

              <Link href="/tasks/new">
                <Button>New Task</Button>
              </Link>

              <Button variant="danger" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="secondary">Login</Button>
              </Link>

              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
