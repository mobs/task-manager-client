"use client";

import { useEffect, useState } from "react";
import { getToken } from "@/lib/auth-storage";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean | null>(null);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
}