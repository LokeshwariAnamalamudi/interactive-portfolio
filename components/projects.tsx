import {
  ArrowRight,
  BarChart3,
  Binary,
  BrainCircuit,
  Mail,
  ScanSearch,
  Sparkles,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { projects } from '@/lib/portfolio-data'

type ProjectDetail = {
  category: string
  problem: string
  solution: string
  impact: string
  workflow: string[]
  impactValue: string
  impactLabel: string
  secondaryValue: string
  secondaryLabel: string
  visualTopLeft: string
  visualTopRight: string
  visualBottomLeft: string
  visualBottomRight: string
  visualCaption: string
  icon: 'digit' | 'deepfake' | 'email' | 'finance'
}

const projectDetails: Record<string, ProjectDetail> = {
  'Handwritten Digit Classification': {
    category: 'Machine Learning Project',

    problem:
      'Handwritten digits vary widely in shape, size, angle, and stroke quality, making consistent automated classification difficult.',

    solution:
      'Processed and normalized image data, engineered useful visual features, and benchmarked multiple machine learning classifiers with an optimized multilayer perceptron.',

    impact:
      'Delivered reliable ten-class digit recognition while demonstrating systematic preprocessing, model comparison, and evaluation.',

    workflow: ['Normalize', 'Extract', 'Train', 'Predict'],

    impactValue: '98.2%',
    impactLabel: 'classification accuracy',

    secondaryValue: 'MLP',
    secondaryLabel: 'Best-performing model',

    visualTopLeft: 'Raw pixels',
    visualTopRight: 'MLP model',
    visualBottomLeft: 'Feature vectors',
    visualBottomRight: 'Digit predicted',
    visualCaption: 'Pixels to Prediction',

    icon: 'digit',
  },

  'Deepfake Video Detection': {
    category: 'Computer Vision Project',

    problem:
      'Manipulated video content can contain subtle spatial and temporal inconsistencies that are difficult to identify reliably across individual frames.',

    solution:
      'Developed a computer vision pipeline using frame extraction, preprocessing, data augmentation, temporal video analysis, and iterative false-positive evaluation.',

    impact:
      'Improved detection reliability through structured error analysis and model optimization while building an end-to-end workflow for deepfake video analysis.',

    workflow: ['Extract Frames', 'Preprocess', 'Analyze', 'Detect'],

    impactValue: '+12%',
    impactLabel: 'reliability improvement',

    secondaryValue: 'Temporal',
    secondaryLabel: 'Video analysis focus',

    visualTopLeft: 'Video frames',
    visualTopRight: 'Detection model',
    visualBottomLeft: 'Visual features',
    visualBottomRight: 'Prediction',
    visualCaption: 'Frames to Detection',

    icon: 'deepfake',
  },

  'Prism - AI Email Triage Agent': {
    category: 'Generative AI Project',

    problem:
      'Users spend significant time manually sorting emails, identifying priorities, summarizing conversations, and drafting repetitive responses.',

    solution:
      'Built a multi-step workflow for signal extraction, AI-based classification, sender-history lookup, and suggested reply generation, with API batching and human review before sending replies or updating memory.',

    impact:
      'Analyzed a 70-email dataset and classified messages into four categories: time-sensitive, actionable, informational, and noise.',

    workflow: [
      'Extract Signals',
      'Classify',
      'Check History',
      'Suggest Reply',
    ],

    impactValue: '70',
    impactLabel: 'emails analyzed',

    secondaryValue: '4',
    secondaryLabel: 'classification categories',

    visualTopLeft: 'Incoming email',
    visualTopRight: 'Extracted signals',
    visualBottomLeft: 'Sender history',
    visualBottomRight: 'Suggested reply',
    visualCaption: 'Emails to Reviewed Suggestions',

    icon: 'email',
  },

  'Personal Finance Analyzer': {
    category: 'Data Analytics Project',

    problem:
      'Bank statements arrive in different formats and require repetitive cleaning and organization before users can understand where their money is going.',

    solution:
      'Developed a privacy-focused Personal Finance Analyzer supporting 3 bank-statement formats (CSV, Excel, PDF) using Python, Pandas, and PDFPlumber, with automated transaction cleaning and rule-based categorization across 8 spending categories.',

    impact:
      'Built an interactive Tableau dashboard showing category-wise spending, total transaction amounts, and income-vs-expense breakdowns so users can quickly identify spending patterns while keeping financial data locally processed.',

    workflow: [
      'Import Statements',
      'Clean Data',
      'Categorize',
      'Visualize',
    ],

    impactValue: '8',
    impactLabel: 'spending categories',

    secondaryValue: '3',
    secondaryLabel: 'statement formats',

    visualTopLeft: 'Bank statements',
    visualTopRight: 'Tableau insights',
    visualBottomLeft: 'Transactions',
    visualBottomRight: 'Spending patterns',
    visualCaption: 'Statements to Financial Insights',

    icon: 'finance',
  },
}

function ProjectIcon({ type }: { type: ProjectDetail['icon'] }) {
  if (type === 'email') {
    return <BrainCircuit className="size-10" strokeWidth={1.8} />
  }

  if (type === 'finance') {
    return <BarChart3 className="size-10" strokeWidth={1.8} />
  }

  if (type === 'deepfake') {
    return <ScanSearch className="size-10" strokeWidth={1.8} />
  }

  return <Binary className="size-10" strokeWidth={1.8} />
}

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24"
    >
      <Reveal>
        <SectionHeading index="02" title="Selected Work" />
      </Reveal>

      <div className="mt-12 space-y-12">
        {projects.map((project, i) => {
          const detail = projectDetails[project.title]

          if (!detail) {
            return null
          }

          return (
            <Reveal key={project.title} delay={i * 80} as="article">
              <div className="group relative overflow-hidden rounded-[26px] border border-border bg-card transition-all duration-500 hover:border-primary/70 hover:shadow-[0_0_55px_rgba(255,160,90,0.08)]">
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.025] via-transparent to-primary/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative p-7 md:p-8 lg:p-9">
                  {/* Header */}
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-4 flex flex-wrap items-center gap-3">
                        {/* Blinking live indicator */}
                        <span className="relative flex size-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                          <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/[0.07] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          <Sparkles className="size-3" />
                          {detail.category}
                        </span>

                        <span className="font-mono text-xs text-muted-foreground">
                          {project.time}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  {/* Main two-column area */}
                  <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.1fr]">
                    {/* Animated visual */}
                    <div className="relative flex min-h-[335px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background/30 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-primary/[0.025]">
                      {/* Rings */}
                      <div className="pointer-events-none absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 transition-transform duration-700 group-hover:scale-105" />

                      <div className="pointer-events-none absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 transition-transform duration-700 group-hover:scale-110" />

                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-64 -translate-x-1/2 bg-primary/20" />

                      {/* Top labels */}
                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[11px] text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/[0.08] hover:text-foreground">
                          {detail.icon === 'email' && (
                            <Mail className="size-3.5" />
                          )}

                          {detail.visualTopLeft}
                        </span>

                        <span className="rounded-full border border-primary/40 bg-primary/[0.08] px-3 py-2 text-[11px] text-muted-foreground transition-all duration-300 hover:bg-primary/[0.16] hover:text-primary">
                          {detail.visualTopRight}
                        </span>
                      </div>

                      {/* Central icon */}
                      <div className="relative z-10 flex flex-1 items-center justify-center">
                        <div className="relative">
                          <span className="absolute inset-0 animate-ping rounded-[26px] bg-primary/10" />

                          <div className="relative flex size-24 items-center justify-center rounded-[26px] border border-primary/40 bg-primary text-primary-foreground shadow-[0_0_45px_rgba(255,160,90,0.18)] transition-transform duration-300 group-hover:scale-105">
                            <ProjectIcon type={detail.icon} />
                          </div>
                        </div>
                      </div>

                      {/* Bottom labels */}
                      <div className="relative z-10 flex items-end justify-between gap-3">
                        <span className="rounded-full border border-border bg-card px-3 py-2 text-[11px] text-muted-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/[0.08] hover:text-foreground">
                          {detail.visualBottomLeft}
                        </span>

                        <span className="rounded-full border border-primary/40 bg-primary/[0.07] px-3 py-2 text-[11px] text-muted-foreground transition-all duration-300 hover:bg-primary/[0.16] hover:text-primary">
                          {detail.visualBottomRight}
                        </span>
                      </div>

                      <div className="relative z-10 mt-5 text-center">
                        <span className="rounded-full border border-border bg-card px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {detail.visualCaption}
                        </span>
                      </div>
                    </div>

                    {/* Problem, solution, and impact */}
                    <div className="space-y-4">
                      <div className="group/problem rounded-2xl border border-border bg-background/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/[0.065]">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] font-semibold text-primary">
                            01
                          </span>

                          <h4 className="font-semibold text-foreground">
                            Problem
                          </h4>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors group-hover/problem:text-foreground/80">
                          {detail.problem}
                        </p>
                      </div>

                      <div className="group/solution rounded-2xl border border-primary/35 bg-primary/[0.055] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/80 hover:bg-primary/[0.11]">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] font-semibold text-primary">
                            02
                          </span>

                          <h4 className="font-semibold text-foreground">
                            Solution
                          </h4>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors group-hover/solution:text-foreground/80">
                          {detail.solution}
                        </p>
                      </div>

                      <div className="group/impact rounded-2xl border border-border bg-background/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/[0.065]">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] font-semibold text-primary">
                            03
                          </span>

                          <h4 className="font-semibold text-foreground">
                            Impact
                          </h4>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground transition-colors group-hover/impact:text-foreground/80">
                          {detail.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Impact and pipeline */}
                  <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Measured impact */}
                    <div className="rounded-2xl border border-primary/45 bg-primary/[0.08] p-6 transition-all duration-300 hover:border-primary/80 hover:bg-primary/[0.12]">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                        Measured Impact
                      </p>

                      <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <div className="text-5xl font-semibold tracking-tight text-primary md:text-6xl">
                            {detail.impactValue}
                          </div>

                          <p className="mt-2 text-sm text-muted-foreground">
                            {detail.impactLabel}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-border bg-background/35 px-5 py-4 text-right transition-all duration-300 hover:border-primary/50">
                          <div className="font-mono text-base font-semibold text-primary">
                            {detail.secondaryValue}
                          </div>

                          <p className="mt-1 text-[10px] text-muted-foreground">
                            {detail.secondaryLabel}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pipeline */}
                    <div className="rounded-2xl border border-border bg-background/30 p-6 transition-all duration-300 hover:border-primary/50">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Intelligence Pipeline
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-2.5">
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
                  </div>

                  {/* Technology tags */}
                  <div className="mt-6 border-t border-border pt-6">
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
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
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}