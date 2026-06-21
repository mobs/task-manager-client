import { EmptyState } from "@/components/states/EmptyState";

import { Task } from "../types/task.types";

import { TaskCard } from "./TaskCard";

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({
  tasks,
}: TaskListProps) {
  if (!tasks.length) {
    return (
      <EmptyState
        title="No tasks found"
        description="Create your first task to get started."
      />
    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}