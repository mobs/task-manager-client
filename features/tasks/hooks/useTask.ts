"use client";

import { useQuery } from "@tanstack/react-query";

import { tasksApi } from "../api/tasks.api";

import { QUERY_KEYS } from "@/lib/constants";

export function useTask(id: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.TASK, id],

    queryFn: () => tasksApi.getTask(id),

    enabled: !!id,
  });
}