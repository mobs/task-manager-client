"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { tasksApi } from "../api/tasks.api";

import { QUERY_KEYS } from "@/lib/constants";
import { getErrorMessage } from "@/lib/error-handler";

type UpdateTaskVariables = {
  id: string;
  payload: Parameters<typeof tasksApi.updateTask>[1];
};

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateTaskVariables) =>
      tasksApi.updateTask(id, payload),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });

      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASK, variables.id],
      });

      toast.success("Task updated successfully");
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
