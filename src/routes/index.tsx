import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, MoveUpRight } from "lucide-react";
import alphaImage from "@/assets/project-alpha.jpg";
import deltaImage from "@/assets/project-delta.jpg";
import { Button } from "@/components/ui/button";
import { industries, processSteps, projects, serviceGroups } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BITS.go — Technology That Moves Business" },
      { name: "description", content: "BITS.go helps businesses build, transform and scale through web development, software, mobile apps, branding, AI, automation, SEO, hosting and IT solutions." },
      { property: "og:title", content: "BITS.go — Technology That Moves Business" },
      { property: "og:description", content: "Technology, design and digital solutions for businesses ready to build growth and opportunity." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "BITS.go — Bamietech IT Solutions", url: "/", email: "bits.go@gmail.com", telephone: ["09136447931", "09129324801"], areaServed: "Nigeria", description: "Technology, design and digital solutions for modern businesses." }) }],
  }),
  component: HomePage,
});

function HomePage() {
  return <div>
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-28">
        <div className="reveal-up lg:col-span-8">
          <p className="eyebrow mb-7 text-accent">Growth & Opportunity</p>
          <h1 className="max-w-5xl text-[3.75rem] font-extrabold leading-[0.9] tracking-[-0.055em] text-balance sm:text-7xl lg:text-[7.5rem]">Technology That <span className="text-accent">Moves</span> Business.</h1>
          <p className="mt-9 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">BITS.go helps businesses build digital products, strengthen their brand, automate operations, and unlock new opportunities through technology.</p>
          <div className="mt-10 flex flex-wrap gap-3"><Link to="/quote"><Button variant="accent">Start a Project <ArrowUpRight size={17} /></Button></Link><Link to="/services"><Button variant="outline">Explore Services</Button></Link></div>
        </div>
        <div className="relative hidden lg:col-span-4 lg:block">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />
          <div className="reveal-up space-y-12 pl-8 pt-2 [animation-delay:180ms]">
            <div><p className="eyebrow mb-3">Status // Active</p><p className="text-5xl font-extrabold tracking-[-0.05em]">2026</p><p className="mt-2 text-xs text-muted-foreground">Building from Nigeria, thinking beyond borders.</p></div>
            <div className="bg-foreground p-8 text-background"><p className="eyebrow mb-5 text-accent">Strategy</p><p className="text-2xl font-bold leading-tight italic">“Businesses should not have to struggle with technology.”</p></div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-6 right-[7%] hidden font-mono text-[10rem] font-bold leading-none text-foreground/[0.025] xl:block">BITS</div>
    </section>

    <section className="bg-foreground py-20 text-background sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="eyebrow mb-10 text-accent">The signal rail</p><div className="grid border border-background/15 md:grid-cols-2 lg:grid-cols-4">{[{ label: "BUILD", title: "Build", copy: "We turn ideas and business needs into reliable digital products." }, { label: "INNOVATE", title: "Innovate", copy: "We use modern technology and creative thinking to solve problems." }, { label: "TRANSFORM", title: "Transform", copy: "We replace outdated manual processes with smarter digital systems." }, { label: "SCALE", title: "Scale", copy: "We create technology designed for long-term sustainable growth." }].map((item, index) => <div key={item.title} className="border-b border-background/15 p-8 transition-colors hover:bg-background/5 md:nth-[odd]:border-r lg:border-b-0 lg:border-r lg:p-10 lg:last:border-r-0"><p className="mb-8 font-mono text-xs text-accent">0{index + 1} // {item.label}</p><h2 className="mb-4 text-3xl font-bold">{item.title}</h2><p className="text-sm leading-7 text-background/60">{item.copy}</p></div>)}</div></div></section>

    <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-16 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-xl"><p className="eyebrow mb-5 text-accent">What we do</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Digital solutions for any scale.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">From individual entrepreneurs to established institutions, we provide the technical foundation for growth.</p></div><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-foreground">Explore all services <MoveUpRight size={16} /></Link></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{serviceGroups.slice(0, 5).map((group, index) => <Link to="/services" key={group.label} className="group border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent sm:p-9"><div className="mb-16 flex items-start justify-between"><span className="grid size-11 place-items-center border border-accent font-mono text-xs text-accent">0{index + 1}</span><span className="eyebrow">{group.label}</span></div><h3 className="text-2xl font-bold">{group.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{group.serviceSlugs.length} connected capabilities for a clearer path from problem to outcome.</p><div className="mt-8 flex items-center gap-2 text-sm font-bold text-accent">View category <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></Link>)}</div></div></section>

    <section className="border-y border-border bg-surface py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-16 max-w-2xl"><p className="eyebrow mb-5 text-accent">Start with the problem</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">What are you trying to solve?</h2><p className="mt-5 leading-7 text-muted-foreground">You do not need to know the perfect technology yet. Start with the business outcome and we will help shape the right path.</p></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{[{ q: "Need to get your business online?", answer: "Website + Branding + SEO" }, { q: "Need to automate your business?", answer: "Software + Automation + AI" }, { q: "Need to build a digital product?", answer: "Strategy + UI/UX + Software" }, { q: "Need better online visibility?", answer: "SEO + Content + Brand" }, { q: "Need ongoing technology support?", answer: "Hosting + IT Support + Maintenance" }, { q: "Have a different challenge?", answer: "Tell us what is getting in the way" }].map((item) => <Link to="/quote" key={item.q} className="group bg-background p-7 transition-colors hover:bg-foreground hover:text-background sm:p-9"><p className="text-lg font-bold leading-snug">{item.q}</p><p className="mt-7 font-mono text-xs text-accent">{item.answer}</p><ArrowUpRight size={17} className="mt-10 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" /></Link>)}</div></div></section>

    <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow mb-5 text-accent">Selected work</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Proof of execution.</h2><p className="mt-5 max-w-lg leading-7 text-muted-foreground">Editable demo and concept projects, ready to be replaced with verified work as BITS.go grows.</p></div><Link to="/work" className="text-sm font-bold text-accent hover:text-foreground">View all projects <MoveUpRight size={16} className="inline" /></Link></div><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-7"><Link to="/work" className="group block"><div className="overflow-hidden bg-foreground"><img src={alphaImage} alt="Abstract dark dashboard concept for Project Alpha" width={1200} height={900} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" /></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow mb-2 text-accent">{projects[0].type} // {projects[0].category}</p><h3 className="text-2xl font-bold">{projects[0].title}</h3></div><span className="font-mono text-xs text-muted-foreground">{projects[0].year}</span></div></Link></div><div className="lg:col-span-5 lg:pt-24"><Link to="/work" className="group block"><div className="overflow-hidden bg-surface"><img src={deltaImage} alt="Abstract mobile app concept for Project Delta" width={900} height={1200} className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" /></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="eyebrow mb-2 text-accent">{projects[1].type} // {projects[1].category}</p><h3 className="text-2xl font-bold">{projects[1].title}</h3></div><span className="font-mono text-xs text-muted-foreground">{projects[1].year}</span></div></Link></div></div></div></section>

    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="eyebrow text-accent mb-2">Engagements & Alliances</p>
            <h2 className="text-3xl font-extrabold tracking-tight">Selected Clients & Partnerships</h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground">Active & Expanding Roster // Verified Deployments</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { sector: "Enterprise Logistics", type: "Dispatch & Tracking Portal" },
            { sector: "Commercial Retail", type: "Custom POS & Inventory Sync" },
            { sector: "Educational Institutes", type: "Student & Portal Management" },
            { sector: "Real Estate & Hospitality", type: "Booking & Brand Identity" }
          ].map((partner, i) => (
            <div key={partner.sector} className="border border-border bg-background p-6 text-center group hover:border-accent transition-colors">
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Partner Client // 0{i + 1}</p>
              <p className="font-bold text-sm text-foreground">{partner.sector}</p>
              <p className="text-[11px] text-muted-foreground mt-2">{partner.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-foreground py-24 text-background sm:py-32"><div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="eyebrow mb-5 text-accent">Built for growth</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">One technology partner. More room to move.</h2><p className="mt-7 max-w-xl text-lg leading-8 text-background/65">We bring development, design, branding, automation, AI, hosting, and support together with business understanding — so your technology can keep up with your ambition.</p><Link to="/about" className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-accent">Why BITS.go <ArrowUpRight size={17} /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:col-span-5">{["Business first", "Modern technology", "Human collaboration", "Long-term support"].map((item) => <div key={item} className="border border-background/15 p-6"><Check size={17} className="mb-8 text-accent" /><p className="font-bold">{item}</p></div>)}</div></div></section>

    <section className="py-24 sm:py-32"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mb-14 max-w-2xl"><p className="eyebrow mb-5 text-accent">How we work</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">A clear path from idea to impact.</h2></div><div className="grid gap-px border border-border bg-border md:grid-cols-4 lg:grid-cols-7">{processSteps.map((step, index) => <div key={step} className="bg-background p-5 sm:p-6"><p className="font-mono text-xs text-accent">0{index + 1}</p><p className="mt-16 font-bold">{step}</p></div>)}</div></div></section>

    <section className="border-t border-border py-24 sm:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-center"><div className="lg:col-span-7"><p className="eyebrow mb-5 text-accent">Meet the founder</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Ibrahim Sobur Bamidele</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">BITS.go was shaped by a simple belief: businesses should not have to struggle with technology. Ibrahim brings more than four years of experience across software development, digital products, Web2, and Web3 to building useful solutions around real-world problems.</p><Link to="/about/founder" className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-accent">Meet the founder <ArrowUpRight size={17} /></Link></div><div className="border-l border-accent pl-7 lg:col-span-5"><p className="font-mono text-xs leading-7 text-muted-foreground">“The work is not just writing code. It is understanding what a business needs to do better, then making that possible.”</p><p className="mt-6 text-sm font-bold">Founder & CEO</p></div></div></section>

    <section className="bg-accent py-24 text-accent-foreground sm:py-32"><div className="mx-auto max-w-5xl px-5 text-center sm:px-8"><p className="eyebrow mb-6 text-accent-foreground/70">Your next move</p><h2 className="text-4xl font-extrabold tracking-[-0.04em] sm:text-7xl">Let's build something that moves your business forward.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-accent-foreground/75">Tell us what you are trying to build, improve, or solve. We will help determine the right technology solution.</p><Link to="/quote" className="mt-10 inline-flex"><Button variant="dark">Start a Project <ArrowUpRight size={17} /></Button></Link></div></section>

    <section className="bg-surface py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="eyebrow mb-6">Industries we serve</p><div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground">{industries.slice(0, 8).map((item) => <Link key={item} to="/industries" className="hover:text-accent">{item}</Link>)}</div></div></section>
  </div>;
}