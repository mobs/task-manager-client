"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/Button";

import { TaskStatus } from "../types/task.types";

const FILTERS: {
  label: string;
  value: TaskStatus | "all";
}[] = [
  {
    label: "All",
    value: "all",
  },

  {
    label: "Pending",
    value: "pending",
  },

  {
    label: "In Progress",
    value: "in_progress",
  },

  {
    label: "Completed",
    value: "completed",
  },
];

export function TaskFilters() {
  const router = useRouter();

  const searchParams =
    useSearchParams();

  const currentStatus =
    searchParams.get("status") ??
    "all";

  const handleFilterChange = (
    value: string
  ) => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (value === "all") {
      params.delete("status");
    } else {
      params.set("status", value);
    }

    params.set("page", "1");

    router.push(
      `/?${params.toString()}`
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {FILTERS.map((filter) => (
        <Button
          key={filter.value}
          variant={
            currentStatus ===
            filter.value
              ? "primary"
              : "secondary"
          }
          onClick={() =>
            handleFilterChange(
              filter.value
            )
          }
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}