"use client";

import {
  ErrorBoundary,
} from "react-error-boundary";

import { Button } from "@/components/ui/Button";

function ErrorFallback({
  error,
  resetErrorBoundary,
}: any) {
  return (
    <div className="p-10 text-center">
      <h2 className="text-xl font-bold">
        Something went wrong
      </h2>

      <p className="mt-2 text-slate-600">
        {error.message}
      </p>

      <Button
        className="mt-4"
        onClick={
          resetErrorBoundary
        }
      >
        Try Again
      </Button>
    </div>
  );
}

export function ErrorBoundaryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary
      FallbackComponent={
        ErrorFallback
      }
    >
      {children}
    </ErrorBoundary>
  );
}