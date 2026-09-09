import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageIntro } from "@/components/page-primitives";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => { const service = services.find((item) => item.slug === params.service); if (!service) throw notFound(); return service; },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Service"} — BITS.go` }, { name: "description", content: loaderData?.description ?? "BITS.go technology service." }, { property: "og:title", content: `${loaderData?.title ?? "Service"} — BITS.go` }, { property: "og:description", content: loaderData?.description ?? "BITS.go technology service." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: `/services/${loaderData?.slug ?? ""}` }] }),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  return <div><PageIntro eyebrow={`${service.number} // ${service.category}`} title={service.title} copy={service.description} /><section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12"><div className="lg:col-span-7"><p className="eyebrow mb-6 text-accent">What this includes</p><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{service.features.map((feature) => <div key={feature} className="bg-background p-6"><Check size={17} className="mb-12 text-accent" /><p className="font-bold leading-snug">{feature}</p></div>)}</div></div><div className="lg:col-span-5 lg:pt-10"><p className="eyebrow mb-6 text-accent">The outcome</p><ul className="space-y-5 border-l border-accent pl-6">{service.benefits.map((benefit) => <li key={benefit} className="text-lg font-bold leading-snug">{benefit}</li>)}</ul><Link to="/quote" className="mt-10 inline-flex"><Button variant="accent">Discuss this service <ArrowUpRight size={17} /></Button></Link></div></div></section><div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8"><Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-accent"><ArrowLeft size={16} /> Back to all services</Link></div><CtaBand title="Have a project in mind? Let's find the right starting point." /></div>;
}