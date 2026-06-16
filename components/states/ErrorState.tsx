interface ErrorStateProps {
  title?: string;
  description?: string;
}

export function ErrorState({
  title = "Something went wrong",
  description = "Please try again later.",
}: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6">
      <h3 className="font-semibold text-red-700">
        {title}
      </h3>

      <p className="mt-2 text-red-600">
        {description}
      </p>
    </div>
  );
}