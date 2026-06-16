import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title is too long"),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters"),

  status: z.enum([
    "pending",
    "in_progress",
    "completed",
  ]),

  priority: z.enum([
    "low",
    "medium",
    "high",
  ]),

  dueDate: z.string().min(1, "Due date is required"),
});

export type TaskFormValues =
  z.infer<typeof taskSchema>;