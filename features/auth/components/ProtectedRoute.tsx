"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "../hooks/useAuth";

import { Spinner } from "@/components/ui/Spinner";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoute({
  children,
}: Props) {
  const router = useRouter();

  const { isAuthenticated } =
    useAuth();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.replace(
        "/login"
      );
    }
  }, [
    isAuthenticated,
    router,
  ]);

  if (isAuthenticated === null) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return <>{children}</>;
}