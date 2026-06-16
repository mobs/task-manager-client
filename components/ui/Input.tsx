import {
  InputHTMLAttributes,
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<
  HTMLInputElement,
  InputProps
>(function Input(
  {
    label,
    error,
    className,
    ...props
  },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-slate-300 px-3 py-2",
          "outline-none",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
          error &&
            "border-red-500 focus:border-red-500",
          className
        )}
        {...props}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});