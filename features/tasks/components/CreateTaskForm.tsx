"use client";

import { useRouter } from "next/navigation";

import { TaskForm } from "./TaskForm";

import {
  TaskFormValues,
} from "../schemas/task.schema";

import { useCreateTask } from "../hooks/useCreateTask";

export function CreateTaskForm() {
  const router = useRouter();
  const createTask = useCreateTask();

  const handleSubmit = async (values: TaskFormValues) => {
    await createTask.mutateAsync({
      ...values,
      dueDate: new Date(values.dueDate).toISOString(),
    });

    router.push("/");
  };

  return (
    <TaskForm
      onSubmit={handleSubmit}
      isSubmitting={createTask.isPending}
    />
  );
}