"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";
import { images } from "@/lib/images";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="about" className="relative bg-cream text-ink py-24 sm:py-32">
      <Container>
        <SectionHeader index={about.index} title={about.title} light />
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                {about.lead}
              </p>
            </Reveal>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/70 sm:text-base">
              {about.paragraphs.map((p, i) => (
                <Reveal key={p} delay={0.08 * (i + 1)}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.35}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-xl leading-snug text-ink sm:text-2xl">
                {about.quote}
              </blockquote>
            </Reveal>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div ref={ref} className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
            <motion.div style={{ y, scale }} className="absolute inset-[-14%]">
              <Image
                src={images.aboutCourt}
                alt="Basketball court under arena lights"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.22em] text-cream/80">
              Charis Prep · The origin
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
