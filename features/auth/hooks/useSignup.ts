"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { setToken } from "@/lib/auth-storage";
import { getErrorMessage } from "@/lib/error-handler";

export function useSignup() {
  return useMutation({
    mutationFn: authApi.signup,

    onSuccess: (data) => {
      setToken(data.data.token);
      toast.success("Account created");
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
