"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/Input";
import { useDebounce } from "@/hooks/useDebounce";

export function TaskSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("search") ?? ""
  );

  const debouncedSearch =
    useDebounce(search, 500);

  useEffect(() => {
    const currentSearch =
      searchParams.get("search") ?? "";

    // Prevent unnecessary navigation
    if (
      currentSearch ===
      debouncedSearch
    ) {
      return;
    }

    const params =
      new URLSearchParams(
        searchParams.toString()
      );

    if (
      debouncedSearch.trim()
    ) {
      params.set(
        "search",
        debouncedSearch
      );
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.replace(
      `${pathname}?${params.toString()}`
    );
  }, [
    debouncedSearch,
    pathname,
    router,
  ]);

  return (
    <Input
      placeholder="Search tasks..."
      value={search}
      onChange={(e) =>
        setSearch(
          e.target.value
        )
      }
    />
  );
}