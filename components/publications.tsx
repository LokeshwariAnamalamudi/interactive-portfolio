import { FileText, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { publications } from '@/lib/portfolio-data'

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Publications" />
      </Reveal>

      <ul className="mt-12 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 80} as="li">
            <a
              href={pub.link}
              className="group flex items-start gap-4 p-6 transition-colors hover:bg-secondary/50"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="size-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-medium leading-snug text-foreground group-hover:text-primary">{pub.title}</h3>
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  <span className="text-primary">{pub.venue}</span> · {pub.year}
                </p>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
