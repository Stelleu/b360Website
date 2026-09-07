"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { talents } from "@/lib/content";
import { images } from "@/lib/images";

export default function Talents() {
  return (
    <section id="talents" className="relative bg-cream py-24 text-ink sm:py-32">
      <Container>
        <SectionHeader index={talents.index} title={talents.title} light />
        <Reveal>
          <p className="mb-12 max-w-xl text-lg text-ink/65">{talents.intro}</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {talents.items.map((talent, i) => (
            <Reveal key={talent.name} delay={i * 0.05}>
              <TalentCard talent={talent} image={images.talents[i]} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TalentCard({
  talent,
  image,
}: {
  talent: (typeof talents.items)[number];
  image: string;
}) {
  return (
    <article className="group relative overflow-hidden bg-ink text-cream">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={talent.name}
          fill
          className="object-cover object-top opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 sm:p-8">
          <p className="mb-0 max-h-0 max-w-md overflow-hidden text-sm leading-relaxed text-cream/90 opacity-0 transition-all duration-500 group-hover:mb-3 group-hover:max-h-24 group-hover:opacity-100">
            {talent.copy}
          </p>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                {talent.discipline} · {talent.tag}
              </p>
              <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {talent.name}
              </h3>
            </div>
            <a
              href={talent.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-cream/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:border-gold hover:text-gold"
            >
              @{talent.name.split(" ")[0]}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
