import { Brain, Database, LineChart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { skills, education } from '@/lib/portfolio-data'

const focuses = [
  {
    icon: Database,
    title: 'Data Engineering',
    body: 'ETL pipelines, data wrangling, and schema enforcement that turn unstructured sources into query-ready datasets.',
  },
  {
    icon: Brain,
    title: 'ML & Generative AI',
    body: 'Supervised learning, deep learning, and LLM/RAG workflows — from feature engineering to model evaluation.',
  },
  {
    icon: LineChart,
    title: 'Data Analysis',
    body: 'EDA, statistical analysis, and time-series work that surface patterns and drive data-informed decisions.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a Computer Science master&apos;s student at San Diego State University focused on AI, data
              engineering, and analytics. I like living in the space between raw, messy data and real decisions —
              building pipelines and models that people can actually trust.
            </p>
            <p>
              Across research and teaching roles I&apos;ve built ETL pipelines for large archival text datasets,
              real-time computer-vision data capture, and ML models spanning digit classification, deepfake detection,
              and crop-yield prediction. Lately I&apos;ve been deep in LLMs, RAG, and prompt engineering.
            </p>
            <p>
              I care about data quality, reproducibility, and the small details that make a dataset or model
              dependable — and I love turning statistical analysis into interventions that make a measurable
              difference.
            </p>
          </div>

          <div className="mt-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">Toolbox</p>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 lg:col-span-2">
          {focuses.map((focus, i) => (
            <Reveal key={focus.title} delay={i * 100}>
              <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <focus.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{focus.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{focus.body}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={focuses.length * 100}>
            <div className="rounded-xl border border-border bg-card p-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Education</p>
              <ul className="space-y-4">
                {education.map((edu) => (
                  <li key={edu.school} className="border-l-2 border-primary/40 pl-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-medium text-foreground">{edu.school}</h3>
                      <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                    </div>
                    <p className="text-sm text-primary">{edu.degree}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{edu.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{index}.</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
