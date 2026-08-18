"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { talents } from "@/lib/content";
import { images } from "@/lib/images";

export default function Talents() {
  const [featured, ...rest] = talents.items;

  return (
    <section id="talents" className="relative bg-cream py-24 text-ink sm:py-32">
      <Container>
        <SectionHeader index={talents.index} title={talents.title} light />
        <Reveal>
          <p className="mb-12 max-w-xl text-lg text-ink/65">{talents.intro}</p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <TalentCard talent={featured} image={images.talents[0]} featured />
          </Reveal>
          <div className="grid gap-5 lg:col-span-5">
            {rest.map((talent, i) => (
              <Reveal key={talent.name} delay={0.08 * (i + 1)}>
                <TalentCard talent={talent} image={images.talents[i + 1]} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TalentCard({
  talent,
  image,
  featured = false,
}: {
  talent: (typeof talents.items)[number];
  image: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-ink text-cream ${
        featured ? "min-h-[520px] lg:min-h-[720px]" : "min-h-[220px] sm:min-h-[240px]"
      }`}
    >
      <Image
        src={image}
        alt={talent.name}
        fill
        className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            {talent.discipline} · {talent.tag}
          </p>
          <h3
            className={`mt-2 font-display font-extrabold tracking-tight ${
              featured ? "text-4xl sm:text-6xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {talent.name}
          </h3>
          {featured && (
            <p className="mt-3 max-w-md text-sm text-cream/70">{talent.copy}</p>
          )}
        </div>
        <a
          href="#contact"
          className="inline-flex shrink-0 items-center gap-1 rounded-full border border-cream/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition hover:border-gold hover:text-gold"
        >
          View Profile
          <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
