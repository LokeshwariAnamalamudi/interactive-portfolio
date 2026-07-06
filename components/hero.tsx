'use client'

import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile, stats } from '@/lib/portfolio-data'
import Image from 'next/image'

const phrases = ['ETL pipelines.', 'ML models.', 'LLM & RAG systems.', 'clean datasets.']

export function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 50 : 100

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
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 6%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 6%) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1">
              <span className="relative inline-flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="relative inline-flex size-2 rounded-full animate-ping bg-primary opacity-75" />
            </div>

            <p className="mb-3 font-mono text-sm text-primary">Hi, my name is</p>

            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>

            <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-muted-foreground sm:text-5xl">
              I build <span className="text-primary">{displayText}</span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">{profile.tagline}</p>

            <div className="mt-8 flex items-center gap-2">
              <a href="#projects" className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">View my work</a>
              <a href="#contact" className="rounded-md border border-border bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90">Get in touch</a>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90"><GithubIcon className="size-4" /></a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/90"><LinkedinIcon className="size-4" /></a>
            </div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <div className="relative size-80 overflow-hidden rounded-2xl border border-border">
              <Image src="/profile_portfolio.jpg" alt="Lokeshwari Anamalamudi" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-4 text-center">
              <dt className="font-mono text-xs text-muted-foreground">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary">
          <ArrowDown className="size-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}