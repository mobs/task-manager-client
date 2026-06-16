import { apiClient } from "@/lib/api-client";

import {
  CreateTaskPayload,
  GetTasksParams,
  TaskResponse,
  TasksResponse,
  UpdateTaskPayload,
} from "../types/task.types";

function buildQueryString(
  params: Record<string, string | number | undefined>
) {
  const searchParams =
    new URLSearchParams();

  Object.entries(params).forEach(
    ([key, value]) => {
      if (
        value !== undefined &&
        value !== ""
      ) {
        searchParams.append(
          key,
          String(value)
        );
      }
    }
  );

  return searchParams.toString();
}

async function getTasks(
  params?: GetTasksParams
) {
  const queryString =
    buildQueryString({
      page: params?.page,
      status: params?.status,
      search: params?.search,
    });

  const endpoint = queryString
    ? `/tasks?${queryString}`
    : "/tasks";

  return apiClient.get<TasksResponse>(
    endpoint
  );
}

async function getTask(id: string) {
  return apiClient.get<TaskResponse>(
    `/tasks/${id}`
  );
}

async function createTask(
  payload: CreateTaskPayload
) {
  return apiClient.post<TaskResponse>(
    "/tasks",
    payload
  );
}

async function updateTask(
  id: string,
  payload: UpdateTaskPayload
) {
  return apiClient.patch<TaskResponse>(
    `/tasks/${id}`,
    payload
  );
}

async function completeTask(id: string) {
  return apiClient.patch<TaskResponse>(
    `/tasks/${id}`,
    {
      status: "completed",
    }
  );
}

async function deleteTask(id: string) {
  return apiClient.delete<void>(
    `/tasks/${id}`
  );
}

export const tasksApi = {
  getTasks,
  getTask,

  createTask,
  updateTask,

  completeTask,
  deleteTask,
};