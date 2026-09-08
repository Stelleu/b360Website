import Logo from "@/components/ui/Logo";
import { footer, navItems } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo
            markSize={48}
            wordmarkClassName="font-display text-4xl font-extrabold tracking-tighter"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            {footer.tagline}
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm text-cream/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Presence</p>
          <p className="text-sm text-cream/70">Kinshasa, DRC</p>
          <p className="text-sm text-cream/70">United States</p>
          <a
            href="mailto:hello@b360.agency"
            className="mt-4 inline-block text-sm text-gold hover:text-gold-light"
          >
            hello@b360.agency
          </a>
        </div>
      </div>
      <div className="container-site flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.rights}</p>
        <p>Discover. Develop. Connect. Represent. Invest.</p>
      </div>
    </footer>
  );
}
