import { Container } from "@/components/layout/Container";

import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";

import { CreateTaskForm } from "@/features/tasks/components/CreateTaskForm";

export default function Page() {
  return (
    <ProtectedRoute>
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold">
            Create Task
          </h1>

          <CreateTaskForm />
        </div>
      </Container>
    </ProtectedRoute>
  );
}