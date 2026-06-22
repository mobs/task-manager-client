"use client";

import { useSearchParams } from "next/navigation";

import { Container } from "@/components/layout/Container";

import { ErrorState } from "@/components/states/ErrorState";

import { TaskFilters } from "@/features/tasks/components/TaskFilters";

import { TaskList } from "@/features/tasks/components/TaskList";

import { TaskSearch } from "@/features/tasks/components/TaskSearch";

import { Pagination } from "@/features/tasks/components/Pagination";

import { TaskSkeleton } from "@/features/tasks/components/TaskSkeleton";

import { useTasks } from "@/features/tasks/hooks/useTasks";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";

import { GetTasksParams, TaskStatus } from "@/features/tasks/types/task.types";

export default function HomePage() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");

  const search = searchParams.get("search") ?? undefined;

  const status = (searchParams.get("status") as TaskStatus | null) ?? undefined;

  const queryParams: GetTasksParams = {
    page,
    search,
    status,
  };

  const { data, isLoading, error } = useTasks(queryParams);
  const tasks = data?.data?.tasks;
  const pages = data?.data?.pagination?.page;
  const totalPages = data?.data.pagination?.totalPages;

  return (
    <ProtectedRoute>
      <Container>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Tasks</h1>

            <Link href="/tasks/new">
              <Button>Create Task</Button>
            </Link>
          </div>

          <TaskSearch />

          <TaskFilters />

          {isLoading && <TaskSkeleton />}

          {error && <ErrorState />}

          {!isLoading && !error && data && (
            <>
              <TaskList tasks={tasks ?? []} />

              <Pagination
                page={pages ?? 1}
                totalPages={totalPages ?? 1}
              />
            </>
          )}
        </div>
      </Container>
    </ProtectedRoute>
  );
}
