export type TaskStatus =
  | "pending"
  | "in_progress"
  | "completed";

export type TaskPriority =
  | "low"
  | "medium"
  | "high";

export interface Task {
  id: string;

  title: string;

  description: string;

  status: TaskStatus;

  priority: TaskPriority;

  dueDate: string;

  createdAt: string;

  updatedAt: string;

  userId: string;
}

export interface CreateTaskPayload {
  title: string;

  description: string;

  status: TaskStatus;

  priority: TaskPriority;

  dueDate: string;
}

export interface UpdateTaskPayload {
  title?: string;

  description?: string;

  status?: TaskStatus;

  priority?: TaskPriority;

  dueDate?: string;
}

export interface Pagination {
  page: number;

  totalPages: number;

  totalItems: number;
}

export interface TasksResponse {
  data: Task[];

  pagination: Pagination;
}

export interface TaskResponse {
  data: Task;
}

export interface GetTasksParams {
  page?: number;

  status?: TaskStatus;

  search?: string;
}