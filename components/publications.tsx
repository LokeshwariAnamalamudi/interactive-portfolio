import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Sparkles,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { publications } from '@/lib/portfolio-data'

export function Publications() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-[1240px] scroll-mt-20 px-6 py-24"
    >
      <Reveal>
        <SectionHeading index="04" title="Publications" />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 80} as="article">
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[22px] border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-primary/[0.035] hover:shadow-[0_0_40px_rgba(255,160,90,0.06)]"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                {/* Top row */}
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                    <Sparkles className="size-3" />
                    Publication
                  </span>

                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-primary md:text-[22px]">
                  {pub.title}
                </h3>

                {/* Summary */}
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {pub.authors}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-6">
                  <div className="border-t border-border pt-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div className="flex max-w-[80%] items-start gap-2 text-sm font-medium text-primary">
                        <BookOpen className="mt-0.5 size-4 shrink-0" />
                        <span>{pub.venue}</span>
                      </div>

                      <div className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted-foreground">
                        <CalendarDays className="size-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}