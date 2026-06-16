"use client";

import { ErrorBoundaryProvider } from "@/components/providers/ErrorBoundaryProvider";
import { QueryProvider } from "@/providers/QueryProvider";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
    </QueryProvider>
  );
}
