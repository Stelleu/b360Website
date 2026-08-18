import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500 ease-outExpo";

  const styles = {
    primary:
      "bg-cream text-ink hover:bg-gold hover:text-ink shadow-[0_0_0_1px_rgba(244,240,230,0.15)]",
    secondary:
      "border border-cream/30 bg-transparent text-cream hover:border-gold hover:text-gold",
    ghost: "text-cream hover:text-gold px-0",
    dark: "bg-ink text-cream hover:bg-gold hover:text-ink",
  } as const;

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
