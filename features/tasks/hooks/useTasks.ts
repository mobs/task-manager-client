"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/constants";

import { tasksApi } from "../api/tasks.api";

import { GetTasksParams } from "../types/task.types";

export function useTasks(
  params?: GetTasksParams
) {
  return useQuery({
    queryKey: [
      QUERY_KEYS.TASKS,
      params,
    ],

    queryFn: () =>
      tasksApi.getTasks(params),
  });
}