'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile, stats } from '@/lib/portfolio-data'
import Image from 'next/image'

const phrases = [
  'intelligent data pipelines',
  'ML systems',
  'LLM & RAG products',
  'analytics solutions',
]

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 45 : 85

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentPhrase.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
          setCharIndex(0)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 5%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 5%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 78% 68% at 50% 34%, black, transparent)',
          WebkitMaskImage:
            'radial-gradient(ellipse 78% 68% at 50% 34%, black, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-[1220px] flex-col justify-center px-6 pb-20 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.06] px-3 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                Generative AI and Data Engineer
              </span>
            </div>

            <p className="mb-4 font-mono text-sm text-primary">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-3xl text-balance text-6xl font-semibold leading-[0.96] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[76px]">
              {profile.name}
            </h1>

            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-muted-foreground sm:text-5xl lg:text-[48px]">
              I build{' '}
              <span className="text-primary">
                {displayText}
                <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-primary" />
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Building intelligent AI systems, scalable data pipelines, and analytics products that solve real business problems.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-mono text-xs font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Explore my work
                <ArrowRight className="size-4" />
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-border bg-background/30 px-5 py-3 font-mono text-xs font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                Get in touch
              </a>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-background/30 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <GithubIcon className="size-4" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-background/30 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>

            {/* STATS */}
            <dl className="mt-10 grid max-w-[760px] grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/55 px-4 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/[0.045]"
                >
                  <dd className="text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>

                  <dt className="mt-2 font-mono text-[10px] leading-[1.35] text-muted-foreground">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[540px] w-[430px] max-w-full overflow-hidden rounded-[30px] border border-primary/35 bg-card shadow-[0_0_70px_rgba(255,160,90,0.06)]">
              <Image
                src="/profile_portfolio.jpg"
                alt="Lokeshwari Anamalamudi"
                fill
                className="object-cover"
                priority
              />

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.03]" />
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em]">
            Scroll to explore
          </span>
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}