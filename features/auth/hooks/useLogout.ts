"use client";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { removeToken } from "@/lib/auth-storage";

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    removeToken();

    toast.success(
      "Logged out successfully"
    );

    router.replace(
      "/login"
    );
  };

  return {
    logout,
  };
}