import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <p className="eyebrow mb-6 text-accent">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-balance sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}

export function SectionContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function CtaBand({
  title,
  copy = "Tell us what you are trying to build, improve, or solve.",
  link = "/quote",
  label = "Start a Project",
}: {
  title: string;
  copy?: string;
  link?: "/quote" | "/contact";
  label?: string;
}) {
  return (
    <section className="bg-accent py-20 text-accent-foreground sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <h2 className="max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-accent-foreground/75">{copy}</p>
        <Link to={link} className="mt-9 inline-flex">
          <Button variant="dark">
            {label} <ArrowUpRight size={17} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div key={item} className="bg-background p-6 sm:p-8">
          <p className="font-mono text-xs text-accent">0{index + 1}</p>
          <p className="mt-14 font-bold">{item}</p>
        </div>
      ))}
    </div>
  );
}