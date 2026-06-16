interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 p-10 text-center">
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}