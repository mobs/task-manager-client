"use client";

import { useEffect, useState } from "react";

import {
  getToken,
  AUTH_EVENT,
} from "@/lib/auth-storage";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean | null>(null);

  useEffect(() => {
    const updateAuth = () => {
      setIsAuthenticated(!!getToken());
    };

    updateAuth();

    window.addEventListener(
      AUTH_EVENT,
      updateAuth
    );

    return () => {
      window.removeEventListener(
        AUTH_EVENT,
        updateAuth
      );
    };
  }, []);

  return { isAuthenticated };
}