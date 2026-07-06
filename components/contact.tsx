'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/about'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading index="05" title="Get in touch" />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something <span className="text-primary">data-driven</span>.
          </h3>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have a pipeline that needs taming, a model to ship, or an analytics problem worth solving? My inbox is
            always open — I&apos;ll get back to you soon.
          </p>

          <button
            type="button"
            onClick={copyEmail}
            className="group mt-6 inline-flex items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-3 font-mono text-sm font-semibold transition-colors hover:bg-card hover:text-primary"
          >
            <Mail className="size-4 text-primary" />
            {profile.email}
            {copied ? (
              <Check className="size-4 text-primary transition-colors group-hover:text-foreground" />
            ) : (
              <Copy className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
            )}
          </button>

          <div className="mt-6 flex items-center gap-2">
            {[
              { icon: GithubIcon, href: profile.socials.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
              { icon: XIcon, href: profile.socials.twitter, label: 'X' },
            ].map((item) => {
              const IconComp = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="flex size-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-card hover:text-primary">
                  <IconComp className="size-5" />
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form action="https://formspree.io/f/xeebnwvg" method="POST" className="rounded-xl border border-border bg-card p-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Ada Lovelace"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="you@company.com"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}