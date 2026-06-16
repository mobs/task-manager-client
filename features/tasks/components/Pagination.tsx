"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/Button";

interface PaginationProps {
  page: number;
  totalPages: number;
}

export function Pagination({
  page,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const changePage = (
    nextPage: number
  ) => {
    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    params.set(
      "page",
      String(nextPage)
    );

    router.replace(
      `${pathname}?${params.toString()}`
    );
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="secondary"
        disabled={page <= 1}
        onClick={() =>
          changePage(page - 1)
        }
      >
        Previous
      </Button>

      <span className="text-sm font-medium">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="secondary"
        disabled={
          page >= totalPages
        }
        onClick={() =>
          changePage(page + 1)
        }
      >
        Next
      </Button>
    </div>
  );
}