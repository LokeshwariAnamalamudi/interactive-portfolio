import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { experience } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>

      <ol className="mt-12 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 90} as="li">
            <div className="group relative grid gap-2 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:grid-cols-[180px_1fr] sm:gap-6">
              <div className="flex items-start">
                <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role} <span className="text-primary">@ {job.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{job.description}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
