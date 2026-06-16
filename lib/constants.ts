export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api";

export const QUERY_KEYS = {
  TASKS: ["tasks"] as const,

  TASK: (id: string) =>
    ["task", id] as const,

  USER: ["user"] as const,
};

export const STORAGE_KEYS = {
  TOKEN: "task-manager-token",
} as const;