"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import { tasksApi } from "../api/tasks.api";

import { QUERY_KEYS } from "@/lib/constants";
import { getErrorMessage } from "@/lib/error-handler";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: tasksApi.deleteTask,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TASKS],
      });

      toast.success("Task deleted successfully");
    },

    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
}
