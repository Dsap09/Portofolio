"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Dmusic",
    description:
      "A modern music streaming platform with playlist management, real-time audio playback, and user authentication powered by Supabase.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    image: "/projects/dmusic.webp",
    link: "#",
  },
  {
    title: "Mini-BPM UMKM",
    description:
      "Business process management system designed for small enterprises. Features workflow automation, task tracking, and role-based access control.",
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    image: "/projects/mini-bpm.webp",
    link: "#",
  },
  {
    title: "ERP System",
    description:
      "Lightweight enterprise resource planning tool for inventory management, sales tracking, and automated reporting using Google ecosystem.",
    tech: ["Google Apps Script", "Sheets API", "JavaScript"],
    image: "/projects/erp.webp",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-white">
      {/* Section Label */}
      <p className="mb-3 text-sm font-medium tracking-widest uppercase text-slate-400">
        Projects
      </p>
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Featured work<span className="text-slate-300">.</span>
      </h2>

      <Separator className="mb-12 bg-slate-100" />

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Hover overlay with arrow */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 transition-all duration-300 group-hover:bg-slate-900/5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/90 group-hover:shadow-lg">
                  <ArrowUpRight className="h-5 w-5 text-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-700" />
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-500">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="rounded-full border-0 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 shadow-none"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
