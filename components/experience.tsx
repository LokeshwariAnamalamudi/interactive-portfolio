import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { experience } from '@/lib/portfolio-data'

type ExperienceDetail = {
  headline: string
  metrics: {
    value: string
    label: string
  }[]
  workflow: string[]
}

const experienceDetails: Record<string, ExperienceDetail> = {
  'SDSU Research Foundation | San Diego, USA': {
    headline:
      'Engineered scalable data pipelines for creating, validating, versioning, and monitoring grounded LLM training datasets.',
    metrics: [
      {
        value: '50K+',
        label: 'Documents processed',
      },
      {
        value: '200K+',
        label: 'QA pairs generated',
      },
      {
        value: '68% → 91%',
        label: 'Model accuracy',
      },
    ],
    workflow: [
      'Semantic chunking',
      'Entity linking',
      'Quality validation',
      'Model monitoring',
    ],
  },

  'Medha Constructions | Bengaluru, India': {
    headline:
      'Developed AI-powered document extraction, data quality, and cost-prediction systems for construction workflows.',
    metrics: [
      {
        value: '1,200+',
        label: 'Documents processed',
      },
      {
        value: '91% / 94%',
        label: 'Precision / recall',
      },
      {
        value: '20.2% → 13.4%',
        label: 'Cost-prediction MAPE',
      },
    ],
    workflow: [
      'Document extraction',
      'Data standardization',
      'Cost prediction',
      'AWS deployment',
    ],
  },

  'SRM University | Vijayawada, India': {
    headline:
      'Developed a computer vision surveillance system for abnormal-behavior detection and automated security alerts.',

    metrics: [
      {
        value: '500K+',
        label: 'Video frames processed',
      },
      {
        value: '87%',
        label: 'Detection accuracy',
      },
      {
        value: '89%',
        label: 'Security incidents flagged',
      },
    ],

    workflow: [
      'Frame processing',
      'Transfer learning',
      'Abnormal-behavior detection',
      'Security alerts',
    ],
  },
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1240px] scroll-mt-20 px-6 py-24"
    >
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>

      <div className="relative mt-14">
        {/* Vertical timeline */}
        <div className="absolute bottom-0 left-[20px] top-0 hidden w-px bg-primary/45 md:block" />

        <ol className="space-y-10">
          {experience.map((job, i) => {
            const detail = experienceDetails[job.company]

            return (
              <Reveal key={job.company} delay={i * 90} as="li">
                <div className="relative md:pl-[72px]">
                  {/* Timeline number */}
                  <div
                    className={`absolute left-0 top-1 z-10 hidden size-10 items-center justify-center rounded-full border font-mono text-[11px] font-semibold md:flex ${
                      i === 0
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-primary/55 bg-background text-primary'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Experience card */}
                  <article className="group relative overflow-hidden rounded-[24px] border border-primary/45 bg-card px-7 py-7 transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_45px_rgba(255,160,90,0.07)] md:px-8 md:py-8">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.025] via-transparent to-primary/[0.045] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary/45 bg-primary/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                              <BriefcaseBusiness className="size-3" />
                              Experience
                            </span>

                            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                              <CalendarDays className="size-3.5" />
                              {job.period}
                            </span>
                          </div>

                          <h3 className="text-[27px] font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[30px]">
                            {job.role}
                          </h3>

                          <div className="mt-2 flex items-center gap-2 text-sm font-medium text-primary">
                            <Building2 className="size-4" />
                            <span>{job.company}</span>
                          </div>
                        </div>

                        <span className="font-mono text-xs text-muted-foreground">
                          {String(i + 1).padStart(2, '0')} /{' '}
                          {String(experience.length).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Headline */}
                      {detail && (
                        <div className="mt-6 border-l-2 border-primary/70 pl-4">
                          <p className="max-w-4xl text-[15px] font-medium leading-6 text-foreground/90">
                            {detail.headline}
                          </p>
                        </div>
                      )}

                      {/* Full description */}
                      <p className="mt-6 max-w-[1080px] text-[15px] leading-7 text-muted-foreground">
                        {job.description}
                      </p>

                      {/* Metrics */}
                      {detail && (
                        <div className="mt-7 grid gap-3 md:grid-cols-3">
                          {detail.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="rounded-2xl border border-border bg-background/30 px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/[0.055]"
                            >
                              <div className="text-[26px] font-semibold tracking-tight text-primary">
                                {metric.value}
                              </div>

                              <div className="mt-2 font-mono text-[10px] text-muted-foreground">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Workflow */}
                      {detail && (
                        <div className="mt-6 rounded-2xl border border-border bg-background/25 p-5 transition-all duration-300 hover:border-primary/50">
                          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                            Delivery Workflow
                          </p>

                          <div className="flex flex-wrap items-center gap-2.5">
                            {detail.workflow.map((step, index) => (
                              <div
                                key={step}
                                className="flex items-center gap-2.5"
                              >
                                <span className="rounded-full border border-border bg-card px-3 py-2 font-mono text-[10px] text-foreground transition-all duration-300 hover:border-primary/70 hover:bg-primary/[0.1] hover:text-primary">
                                  {step}
                                </span>

                                {index < detail.workflow.length - 1 && (
                                  <ArrowRight className="size-4 text-primary" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className="mt-6 border-t border-border pt-5">
                        <ul className="flex flex-wrap gap-2">
                          {job.tags.map((tag) => (
                            <li
                              key={tag}
                              className="cursor-default rounded-full border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/[0.08] hover:text-primary"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}