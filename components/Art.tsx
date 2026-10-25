import type { Item } from "@/lib/data";

/** Gradient + emoji "artwork" used everywhere in place of photos. */
export default function Art({
  item,
  className = "",
  size = "text-7xl",
  justify = "center",
}: {
  item: Pick<Item, "from" | "to" | "emoji">;
  className?: string;
  size?: string;
  justify?: "center" | "flex-start" | "flex-end";
}) {
  return (
    <div
      className={`relative flex items-center overflow-hidden ${className}`}
      style={{ background: `radial-gradient(circle at 30% 20%, ${item.to}, ${item.from} 70%)`, justifyContent: justify, padding: justify === "center" ? 0 : "0 1rem" }}
    >
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 85%, #000 0, transparent 55%)" }} />
      <span className={`${size} relative drop-shadow-[0_12px_18px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-110`} aria-hidden>
        {item.emoji}
      </span>
    </div>
  );
}
