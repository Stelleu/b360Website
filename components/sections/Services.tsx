"use client";

import {
  Briefcase,
  Dumbbell,
  Globe2,
  Handshake,
  LineChart,
  Sparkles,
  UserRound,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/lib/content";

const icons = [
  UserRound,
  Handshake,
  Sparkles,
  LineChart,
  Briefcase,
  Dumbbell,
  Globe2,
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeader index={services.index} title={services.title} />
        <Reveal>
          <p className="mb-14 max-w-3xl font-display text-2xl leading-snug text-cream/80 sm:text-3xl">
            {services.intro}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden border border-white/10 bg-[#111] p-7 transition duration-500 hover:border-gold/50 hover:bg-[#161616]">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition duration-500 group-hover:bg-gold/15" />
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="text-gold" size={22} strokeWidth={1.5} />
                      <span className="text-xs text-cream/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/60">
                      {item.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
