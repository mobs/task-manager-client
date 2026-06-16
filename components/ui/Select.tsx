import {
  SelectHTMLAttributes,
  forwardRef,
} from "react";

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(function Select(
  {
    label,
    error,
    children,
    ...props
  },
  ref
) {
  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <select
        ref={ref}
        className="
          w-full
          rounded-lg
          border
          border-slate-300
          px-3
          py-2
          outline-none
          focus:border-blue-500
        "
        {...props}
      >
        {children}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});