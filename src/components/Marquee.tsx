export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-4 text-background">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6 font-display text-xl font-semibold uppercase tracking-widest">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="inline-block size-2 rounded-full bg-neon" />
          </span>
        ))}
      </div>
    </div>
  );
}
