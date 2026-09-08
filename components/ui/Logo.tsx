import Image from "next/image";
import { images } from "@/lib/images";

type LogoProps = {
  className?: string;
  markSize?: number;
  showWordmark?: boolean;
  stacked?: boolean;
  wordmarkClassName?: string;
  priority?: boolean;
};

export default function Logo({
  className = "",
  markSize = 40,
  showWordmark = true,
  stacked = false,
  wordmarkClassName = "font-display text-2xl font-extrabold tracking-tighter",
  priority = false,
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center ${
        stacked ? "flex-col gap-4" : "gap-2.5"
      } ${className}`}
    >
      <Image
        src={images.logo}
        alt="B360 Agency logo"
        width={markSize}
        height={markSize}
        priority={priority}
        className="rounded-full bg-ink object-cover"
      />
      {showWordmark ? (
        <span className={wordmarkClassName}>
          B<span className="text-gold">360</span>
        </span>
      ) : null}
    </span>
  );
}
