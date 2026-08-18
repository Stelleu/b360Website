import { vision } from "@/lib/content";

export default function Marquee() {
  const items = [...vision.slogan, ...vision.slogan, ...vision.slogan];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-5">
      <div className="marquee-track flex w-max gap-10 pr-10 text-2xl font-display font-extrabold tracking-tight text-cream/25 sm:text-4xl">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            {item}
            <span className="text-gold">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
