"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Separator } from "@/components/ui/separator";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contacts = [
  {
    label: "Email",
    value: "doni@email.com",
    href: "mailto:doni@email.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/doni",
    href: "https://github.com/doni",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/doni",
    href: "https://linkedin.com/in/doni",
    icon: LinkedinIcon,
  },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-slate-50/50">
      {/* Section Label */}
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-slate-400">
        Contact
      </p>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Get in touch<span className="text-slate-300">.</span>
      </h2>
      <p className="mb-10 max-w-lg text-base leading-relaxed text-slate-500">
        Have a project in mind or just want to say hello? Feel free to reach out 
        through any of the channels below.
      </p>

      <Separator className="mb-10 bg-slate-200/60" />

      <div className="space-y-0 divide-y divide-slate-200/60">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between py-5 transition-colors hover:bg-slate-50/50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 transition-colors group-hover:border-slate-300">
                <contact.icon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-slate-900" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  {contact.label}
                </p>
                <p className="text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                  {contact.value}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-slate-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-600" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
