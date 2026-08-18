export default function SectionHeader({
  index,
  title,
  light = false,
}: {
  index: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
      <div>
        <p className="eyebrow mb-4">{index} — {title}</p>
        <h2
          className={`display text-4xl sm:text-6xl lg:text-7xl ${
            light ? "text-ink" : "text-cream"
          }`}
        >
          {title}
        </h2>
      </div>
      <span className={`hidden h-px flex-1 max-w-xs sm:block ${light ? "bg-ink/15" : "bg-cream/15"}`} />
    </div>
  );
}
