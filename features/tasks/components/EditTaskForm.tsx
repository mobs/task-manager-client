"use client";

import { useRouter } from "next/navigation";

import { TaskForm } from "./TaskForm";

import {
  TaskFormValues,
} from "../schemas/task.schema";

import { useTask } from "../hooks/useTask";

import { useUpdateTask } from "../hooks/useUpdateTask";

import { Spinner } from "@/components/ui/Spinner";

interface Props {
  taskId: string;
}

export function EditTaskForm({
  taskId,
}: Props) {
  const router = useRouter();

  const {
    data,
    isLoading,
  } = useTask(taskId);

  const updateTask =
    useUpdateTask();

  if (isLoading) {
    return <Spinner />;
  }

  const task = data?.data;

  if (!task) {
    return null;
  }

  const handleSubmit =
    async (
      values: TaskFormValues
    ) => {
      await updateTask.mutateAsync(
        {
          id: taskId,
          payload: {
            ...values,
            dueDate: new Date(values.dueDate).toISOString(),
          },
        }
      );

      router.push("/");
    };

  return (
    <TaskForm
      defaultValues={{
        title: task.title,
        description:
          task.description,
        status: task.status,
        priority:
          task.priority,
        dueDate:
          task.dueDate.slice(
            0,
            10
          ),
      }}
      onSubmit={
        handleSubmit
      }
      isSubmitting={
        updateTask.isPending
      }
    />
  );
}