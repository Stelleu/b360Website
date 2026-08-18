"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { vision } from "@/lib/content";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Particles() {
  const dots = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((i) => (
        <span
          key={i}
          className="particle absolute h-1 w-1 rounded-full bg-gold"
          style={{
            left: `${8 + ((i * 17) % 86)}%`,
            top: `${10 + ((i * 23) % 78)}%`,
            animationDelay: `${(i % 8) * 0.35}s`,
            opacity: 0.25 + (i % 5) * 0.1,
          }}
        />
      ))}
      <span className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-electric/20 blur-[80px]" />
      <span className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-gold/25 blur-[70px]" />
    </div>
  );
}

export default function Vision() {
  const pin = useRef<HTMLDivElement>(null);
  const dunk = useRef<HTMLDivElement>(null);
  const artist = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const slogan = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });

      tl.fromTo(
        dunk.current,
        { yPercent: 28, scale: 0.86, rotate: -8, xPercent: -6 },
        { yPercent: -14, scale: 1.18, rotate: 2, xPercent: 4, ease: "none" },
        0,
      );
      tl.fromTo(
        artist.current,
        { yPercent: 18, opacity: 0.25, filter: "blur(16px)" },
        { yPercent: -8, opacity: 1, filter: "blur(0px)", ease: "none" },
        0,
      );
      tl.to(copy.current, { opacity: 0, y: -40, ease: "none" }, 0.15);
      tl.fromTo(
        slogan.current,
        { opacity: 0, y: 80, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, ease: "none" },
        0.35,
      );
    },
    { scope: pin },
  );

  return (
    <section id="vision" ref={pin} className="relative bg-ink">
      <div className="h-[280vh]">
        <div className="sticky top-0 flex h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={images.basketballArena}
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/70" />
          </div>

          <div
            ref={dunk}
            className="absolute -left-[8%] bottom-[-6%] z-10 h-[88%] w-[70%] sm:w-[55%]"
          >
            <div className="relative h-full w-full mask-bottom">
              <Image
                src={images.dunkParallax}
                alt="Basketball player dunking"
                fill
                className="object-cover object-center drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                sizes="60vw"
              />
            </div>
          </div>

          <div
            ref={artist}
            className="absolute right-[-6%] top-[8%] z-10 hidden h-[78%] w-[48%] md:block"
          >
            <div className="relative h-full w-full">
              <Particles />
              <Image
                src={images.artistSilhouette}
                alt="Artist on stage"
                fill
                className="object-cover object-center opacity-80 mix-blend-lighten contrast-125"
                sizes="45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-ink via-transparent to-transparent" />
            </div>
          </div>

          <Container className="relative z-20 flex h-full flex-col justify-end pb-16 pt-28 sm:justify-center sm:pb-0">
            <div ref={copy} className="max-w-2xl">
              <p className="eyebrow mb-5">
                {vision.index} — {vision.title}
              </p>
              <h2 className="display mb-8 text-4xl sm:text-6xl">{vision.title}</h2>
              <div className="space-y-5 text-base leading-relaxed text-cream/80 sm:text-lg">
                {vision.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div
              ref={slogan}
              className="pointer-events-none absolute inset-x-0 bottom-16 px-5 opacity-0 sm:bottom-24 lg:px-12"
            >
              <p className="display text-[11vw] leading-[0.85] text-cream sm:text-7xl lg:text-8xl">
                {vision.slogan.map((word) => (
                  <span key={word} className="mr-[0.25em] inline-block last:text-gold">
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
