"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface Props {
  open: boolean;

  loading?: boolean;

  onConfirm: () => void;

  onClose: () => void;
}

export function DeleteTaskModal({
  open,
  loading,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Modal
      open={open}
      title="Delete Task"
      onClose={onClose}
    >
      <p>
        Are you sure you want to
        delete this task?
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          isLoading={loading}
          onClick={onConfirm}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
}