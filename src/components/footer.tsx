import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <Separator className="bg-slate-100" />
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Doni. All rights reserved.
          </p>
          <p className="text-xs text-slate-300">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
