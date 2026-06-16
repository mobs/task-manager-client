"use client";
import { Card } from "@/components/ui/Card";

import Link from "next/link";

import { Button } from "@/components/ui/Button";

import { useDeleteTask } from "../hooks/useDeleteTask";

import { useCompleteTask } from "../hooks/useCompleteTask";
import { Task, TaskPriority, TaskStatus } from "../types/task.types";
import { useState } from "react";
import { DeleteTaskModal } from "./DeleteTaskModal";

interface TaskCardProps {
  task: Task;
}

function getStatusClasses(status: TaskStatus) {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-700";

    case "in_progress":
      return "bg-yellow-100 text-yellow-700";

    case "pending":
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getPriorityClasses(priority: TaskPriority) {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700";

    case "medium":
      return "bg-orange-100 text-orange-700";

    case "low":
    default:
      return "bg-blue-100 text-blue-700";
  }
}

export function TaskCard({ task }: TaskCardProps) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const deleteTask = useDeleteTask();
  const completeTask = useCompleteTask();
  
  return (
    <Card>
      <div className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {task.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600">{task.description}</p>
          </div>

          <div className="flex gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusClasses(
                task.status,
              )}`}
            >
              {task.status.replace("_", " ")}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${getPriorityClasses(
                task.priority,
              )}`}
            >
              {task.priority}
            </span>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-slate-500">
            Due: {new Date(task.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t pt-4">
        <Link href={`/tasks/${task.id}/edit`}>
          <Button variant="secondary">Edit</Button>
        </Link>

        {task.status !== "completed" && (
          <Button
            onClick={() => completeTask.mutate(task.id)}
            isLoading={completeTask.isPending}
          >
            Complete
          </Button>
        )}

        <DeleteTaskModal
          open={isDeleteOpen}
          loading={deleteTask.isPending}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={() => deleteTask.mutate(task.id)}
        />
      </div>
    </Card>
  );
}
