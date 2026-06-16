import { Container } from "@/components/layout/Container";

import { ProtectedRoute } from "@/features/auth/components/ProtectedRoute";

import { EditTaskForm } from "@/features/tasks/components/EditTaskForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <ProtectedRoute>
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-6 text-3xl font-bold">Edit Task</h1>

          <EditTaskForm taskId={id} />
        </div>
      </Container>
    </ProtectedRoute>
  );
}
