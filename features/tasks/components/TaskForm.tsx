"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

import {
  taskSchema,
  TaskFormValues,
} from "../schemas/task.schema";

interface TaskFormProps {
  defaultValues?: TaskFormValues;

  isSubmitting?: boolean;

  onSubmit: (
    values: TaskFormValues
  ) => Promise<void>;
}

export function TaskForm({
  defaultValues,
  isSubmitting,
  onSubmit,
}: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(
      taskSchema
    ),

    defaultValues:
      defaultValues ?? {
        title: "",
        description: "",
        status: "pending",
        priority: "medium",
        dueDate: "",
      },
  });

  return (
    <Card>
      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        <Input
          label="Title"
          error={
            errors.title?.message
          }
          {...register("title")}
        />

        <Input
          label="Description"
          error={
            errors.description
              ?.message
          }
          {...register(
            "description"
          )}
        />

        <Select
          label="Status"
          error={
            errors.status?.message
          }
          {...register("status")}
        >
          <option value="pending">
            Pending
          </option>

          <option value="in_progress">
            In Progress
          </option>

          <option value="completed">
            Completed
          </option>
        </Select>

        <Select
          label="Priority"
          error={
            errors.priority
              ?.message
          }
          {...register(
            "priority"
          )}
        >
          <option value="low">
            Low
          </option>

          <option value="medium">
            Medium
          </option>

          <option value="high">
            High
          </option>
        </Select>

        <Input
          type="date"
          label="Due Date"
          error={
            errors.dueDate?.message
          }
          {...register("dueDate")}
        />

        <Button
          type="submit"
          className="w-full"
          isLoading={
            isSubmitting
          }
        >
          Save Task
        </Button>
      </form>
    </Card>
  );
}