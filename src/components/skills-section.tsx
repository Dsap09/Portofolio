"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS", "TypeScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "Node.js", "Supabase", "REST API", "PostgreSQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Vercel", "Security Auditing", "Figma", "Google Apps Script"],
  },
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-slate-50/50">
      {/* Section Label */}
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-slate-400">
        Skills
      </p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        What I work with<span className="text-slate-300">.</span>
      </h2>

      <Separator className="mb-12 bg-slate-200/60" />

      <div className="grid gap-10 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="mb-4 text-xs font-semibold tracking-widest uppercase text-slate-400">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-none transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
