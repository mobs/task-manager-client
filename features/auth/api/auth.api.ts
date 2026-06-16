import { apiClient } from "@/lib/api-client";

import {
  AuthResponse,
  LoginPayload,
  SignupPayload,
} from "../types/auth.types";

export const authApi = {
  login(payload: LoginPayload) {
    return apiClient.post<AuthResponse>(
      "/auth/login",
      payload,
      {
        auth: false,
      }
    );
  },

  signup(payload: SignupPayload) {
    return apiClient.post<AuthResponse>(
      "/auth/signup",
      payload,
      {
        auth: false,
      }
    );
  },
};