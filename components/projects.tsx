import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { projects } from '@/lib/portfolio-data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Selected Work" />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} as="article">
            <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  {project.accent && (
                    <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      Featured
                    </span>
                  )}
                  <span className="font-mono text-xs text-muted-foreground">{project.time}</span>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

              <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dd className="font-mono text-base font-semibold text-primary">{metric.value}</dd>
                    <dt className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
