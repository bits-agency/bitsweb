import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Code, Compass, Cpu, Palette, Search, Send, Users } from "lucide-react";
import { PageIntro, SectionContainer, CtaBand } from "@/components/page-primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Build the Future With Us | BITS.go" },
      { name: "description", content: "Join the BITS.go engineering, creative, and business intelligence teams. Express interest in engineering, design, AI, and growth roles." },
      { property: "og:title", content: "Careers — Build the Future With Us | BITS.go" },
      { property: "og:description", content: "We are cultivating a multidisciplinary technology agency built on craftsmanship, intelligence, and ambition." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const talentDisciplines = [
  {
    category: "Software & Engineering",
    icon: Code,
    roles: ["Frontend Developer (React / TypeScript / Next.js)", "Backend Developer (Node.js / Python / Go)", "Full-Stack Engineer", "Mobile App Developer (Flutter / React Native)"],
  },
  {
    category: "Design & Experience",
    icon: Palette,
    roles: ["UI/UX Designer (Figma / Design Systems)", "Brand Identity & Graphic Designer", "Motion & Product Designer"],
  },
  {
    category: "Intelligence & Automation",
    icon: Cpu,
    roles: ["AI Solutions Engineer", "Workflow & Automation Specialist (n8n / Make / APIs)", "Data & Business Systems Analyst"],
  },
  {
    category: "Growth, Strategy & Operations",
    icon: Compass,
    roles: ["Technical SEO & Content Strategist", "Business Development & Tech Sales", "Semi-Technical Market Researcher", "Customer Success & Project Manager"],
  },
];

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Full-Stack Engineer",
    portfolioUrl: "",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageIntro
        eyebrow="Culture // Talent // Growth"
        title="Build the Future With Us"
        copy="BITS.go is assembling a disciplined, ambitious technology team dedicated to solving high-value business challenges across Nigeria and beyond."
      />

      <SectionContainer className="py-20 sm:py-28">
        {/* Culture & Philosophy */}
        <div className="grid gap-12 lg:grid-cols-12 mb-24">
          <div className="lg:col-span-6">
            <p className="eyebrow text-accent mb-4">Our Culture</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Craftsmanship over corporate jargon.</h2>
            <p className="mt-5 text-muted-foreground leading-8 text-base">
              At BITS.go (Bamietech IT Solutions), we value engineers, designers, and thinkers who understand that technology is meaningful only when it moves a business forward. We reject bureaucracy in favor of ownership, continuous learning, and direct execution.
            </p>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <div className="border border-border bg-card p-6">
              <span className="font-mono text-xs text-accent font-bold">01 // AUTONOMY</span>
              <h3 className="text-lg font-bold mt-2">Ownership & Output</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                We measure results, rigor, and clarity of thought — not arbitrary hours spent in front of a screen.
              </p>
            </div>
            <div className="border border-border bg-card p-6">
              <span className="font-mono text-xs text-accent font-bold">02 // CONTINUOUS GROWTH</span>
              <h3 className="text-lg font-bold mt-2">Skill Acceleration</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                Work across both Web2 foundations and cutting-edge AI integrations with constant hands-on mentorship.
              </p>
            </div>
            <div className="border border-border bg-card p-6">
              <span className="font-mono text-xs text-accent font-bold">03 // MULTIDISCIPLINARY</span>
              <h3 className="text-lg font-bold mt-2">Cross-Domain Thinking</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                Designers understand developer constraints; engineers understand business economics and customer journeys.
              </p>
            </div>
            <div className="border border-border bg-card p-6">
              <span className="font-mono text-xs text-accent font-bold">04 // INTEGRITY</span>
              <h3 className="text-lg font-bold mt-2">Real Value</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                We never ship mediocre code or fabricate deliverables. We deliver work our clients and team are genuinely proud of.
              </p>
            </div>
          </div>
        </div>

        {/* Talent Disciplines Grid */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow text-accent mb-3">Talent Pool</p>
            <h2 className="text-3xl font-extrabold tracking-tight">Disciplines we are actively cultivating.</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              We periodically expand our core roster and project retainers as client engagements scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {talentDisciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.category} className="border border-border bg-card p-8 space-y-4">
                  <div className="flex items-center gap-3 border-b border-border pb-4">
                    <div className="grid size-10 place-items-center border border-accent bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-xl font-bold">{item.category}</h3>
                  </div>
                  <ul className="space-y-2.5 pt-2">
                    {item.roles.map((role) => (
                      <li key={role} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-accent" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expression of Interest Form */}
        <div className="border border-border bg-card p-8 sm:p-14 max-w-3xl mx-auto">
          <p className="eyebrow text-accent mb-2">Talent Registry</p>
          <h2 className="text-3xl font-extrabold tracking-tight">Express Your Interest</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Even if a specific opening isn't advertised today, we review every promising engineer, designer, and strategist who reaches out.
          </p>

          {submitted ? (
            <div className="mt-8 border border-accent/40 bg-accent/5 p-8 text-center">
              <CheckCircle2 size={36} className="mx-auto text-accent mb-3" />
              <h3 className="text-xl font-bold">Expression of Interest Received!</h3>
              <p className="mt-2 text-xs text-muted-foreground">
                Thank you, {form.name}. Our talent lead will review your profile and portfolio link ({form.portfolioUrl || "on file"}) and reach out when project roles match your profile.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sobur Bamidele"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. dev@domain.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 09136447931"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Domain</label>
                  <select
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  >
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full-Stack Engineer">Full-Stack Engineer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Brand & Graphics Designer">Brand & Graphics Designer</option>
                    <option value="Mobile App Developer">Mobile App Developer</option>
                    <option value="AI / Automation Engineer">AI / Automation Engineer</option>
                    <option value="Business Research / Growth">Business Research / Growth</option>
                    <option value="Other Technical Role">Other Technical Role</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Portfolio / GitHub / LinkedIn URL *
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/yourhandle or https://behance.net/..."
                  value={form.portfolioUrl}
                  onChange={(e) => setForm({ ...form, portfolioUrl: e.target.value })}
                  className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Brief Introduction & Key Projects
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you build, technologies you enjoy, and what kind of impact you want to create..."
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full border border-border bg-background p-4 text-sm focus:border-accent focus:outline-none resize-y"
                />
              </div>

              <Button type="submit" variant="accent" className="w-full font-bold gap-2">
                <Send size={15} /> Submit Expression of Interest
              </Button>
            </form>
          )}
        </div>
      </SectionContainer>

      <CtaBand title="Have questions about our technology stack or operations? Reach out directly." />
    </div>
  );
}
