"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { hero } from "@/lib/content";
import { images, videos } from "@/lib/images";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("b360-intro");
    const delay = seen ? 180 : 2000;
    const t = window.setTimeout(() => setReady(true), delay);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.heroDunk}
          alt="Basketball player dunking"
          fill
          priority
          className="scale-105 object-cover"
          sizes="100vw"
        />
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={images.heroPoster}
        >
          <source src={videos.heroDunk} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0A0A0A_78%)]" />
      </div>

      <div className="container-site flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <Logo
            showWordmark={false}
            markSize={128}
            priority
            className="drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.08, duration: 0.7 }}
          className="eyebrow mb-6"
        >
          {hero.kicker}
        </motion.p>

        <h1 className="sr-only">{hero.title}</h1>
        <div className="display max-w-5xl text-5xl sm:text-7xl lg:text-[6.4rem]">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 0 ? "text-gold" : ""}`}
                initial={{ y: "110%" }}
                animate={ready ? { y: "0%" } : { y: "110%" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.28, duration: 0.7 }}
          className="mt-7 max-w-xl text-lg text-cream/75 sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#talents">{hero.primaryCta}</Button>
          <Button href="#contact" variant="secondary">
            {hero.secondaryCta}
          </Button>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-16 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-cream/50 hover:text-gold"
        >
          Scroll
          <ArrowDownRight size={14} />
        </motion.a>
      </div>
    </section>
  );
}
