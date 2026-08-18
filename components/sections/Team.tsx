"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";
import { images } from "@/lib/images";

export default function Team() {
  return (
    <section id="team" className="relative bg-ink py-24 sm:py-32">
      <Container>
        <SectionHeader index={team.index} title={team.title} />
        <Reveal>
          <p className="mb-12 max-w-2xl text-lg text-cream/70">{team.intro}</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.05}>
              <article className="group relative overflow-hidden bg-[#111]">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={images.team[i]}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end bg-ink/0 p-6 opacity-0 transition duration-500 group-hover:bg-ink/55 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-cream/90">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold">
                    {member.title}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
