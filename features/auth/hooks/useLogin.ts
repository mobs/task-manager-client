"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { setToken } from "@/lib/auth-storage";
import { getErrorMessage } from "@/lib/error-handler";

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,

    onSuccess: (data) => {
      setToken(data.data.token);

      toast.success("Logged in successfully");
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
