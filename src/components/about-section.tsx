"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-white">
      {/* Section Label */}
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-slate-400">
        About
      </p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        A bit about me<span className="text-slate-300">.</span>
      </h2>

      <Separator className="mb-10 bg-slate-100" />

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-slate-600">
            I&apos;m a <span className="font-medium text-slate-900">Systems and Information Technology</span> student 
            with a strong focus on full-stack web development. I enjoy breaking down complex problems 
            and turning them into clean, functional digital solutions.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            My academic journey has shaped my approach to building software — I prioritize 
            <span className="font-medium text-slate-900"> system architecture</span>, 
            <span className="font-medium text-slate-900"> scalability</span>, and 
            <span className="font-medium text-slate-900"> code quality</span>. I believe great software 
            starts with thoughtful design and disciplined execution.
          </p>
        </div>
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-slate-600">
            Beyond coding, I&apos;m deeply interested in how technology shapes business processes. 
            From building ERP systems to streaming platforms, I aim to create tools that 
            genuinely solve real-world problems.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Currently exploring the intersection of 
            <span className="font-medium text-slate-900"> web security</span>, 
            <span className="font-medium text-slate-900"> cloud infrastructure</span>, and 
            <span className="font-medium text-slate-900"> modern frameworks</span> to build 
            robust, production-ready applications.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
