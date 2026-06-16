export function TaskSkeleton() {
  return (
    <div className="grid gap-4">
      {Array.from({
        length: 5,
      }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="animate-pulse space-y-4">
            <div className="h-6 w-1/2 rounded bg-slate-200" />

            <div className="h-4 w-full rounded bg-slate-200" />

            <div className="h-4 w-4/5 rounded bg-slate-200" />

            <div className="h-4 w-32 rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}