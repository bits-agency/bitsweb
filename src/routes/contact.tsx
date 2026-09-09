import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Building2, CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionContainer } from "@/components/page-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BITS.go — Bamietech IT Solutions" },
      { name: "description", content: "Get in touch with BITS.go. Contact our Ondo State or Jigawa State offices, call 09136447931, or send an inquiry to build your technology solution." },
      { property: "og:title", content: "Contact BITS.go — Bamietech IT Solutions" },
      { property: "og:description", content: "Offices in Ondo State and Jigawa State, Nigeria. Let's build something that moves your business forward." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageIntro
        eyebrow="Communication // Physical & Digital Presence"
        title="Contact BITS.go"
        copy="Let's build something that moves your business forward. Tell us what you are trying to build, improve, or solve."
      />

      <SectionContainer className="py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Column: Contact Channels & Offices */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className="eyebrow text-accent mb-4">Direct Channels</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Always accessible.</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-7">
                Whether you prefer a direct call, a WhatsApp conversation, or an email exchange, our technical consultants respond promptly.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:09136447931"
                  className="flex items-center gap-4 border border-border bg-card p-4 hover:border-accent transition-all group"
                >
                  <div className="grid size-11 place-items-center border border-accent bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-muted-foreground">Primary Line</p>
                    <p className="text-base font-bold">09136447931</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-accent" />
                </a>

                <a
                  href="tel:09129324801"
                  className="flex items-center gap-4 border border-border bg-card p-4 hover:border-accent transition-all group"
                >
                  <div className="grid size-11 place-items-center border border-accent bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-muted-foreground">Secondary Line</p>
                    <p className="text-base font-bold">09129324801</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-accent" />
                </a>

                <a
                  href="mailto:bits.go@gmail.com"
                  className="flex items-center gap-4 border border-border bg-card p-4 hover:border-accent transition-all group"
                >
                  <div className="grid size-11 place-items-center border border-accent bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-muted-foreground">Official Inquiries</p>
                    <p className="text-base font-bold break-all">bits.go@gmail.com</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-muted-foreground group-hover:text-accent" />
                </a>

                <a
                  href="https://wa.me/2349136447931?text=Hello%20BITS.go%2C%20I%20have%20an%20inquiry%20regarding%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-accent bg-accent/5 p-4 hover:bg-accent/10 transition-all group"
                >
                  <div className="grid size-11 place-items-center border border-accent bg-accent text-accent-foreground">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-accent font-bold">Instant Chat</p>
                    <p className="text-base font-bold text-foreground">Chat with BITS.go on WhatsApp</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-accent" />
                </a>
              </div>
            </div>

            {/* Physical Office Locations */}
            <div>
              <p className="eyebrow text-accent mb-4">Physical Locations</p>
              <h3 className="text-2xl font-bold">Our offices in Nigeria.</h3>

              <div className="mt-6 space-y-4">
                {/* Ondo State Office */}
                <div className="border border-border bg-card p-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase tracking-wider mb-2">
                    <Building2 size={15} /> Ondo State Office
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">Medinah Community Junction</p>
                  <p className="text-xs text-muted-foreground mt-1">Ilere–Akure/Ijare Road, Ondo State, Nigeria</p>
                </div>

                {/* Jigawa State Office */}
                <div className="border border-border bg-card p-6">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent font-bold uppercase tracking-wider mb-2">
                    <Building2 size={15} /> Jigawa State Office
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug">Tsada Primary School</p>
                  <p className="text-xs text-muted-foreground mt-1">Jigawa Tsada, Dutse, Jigawa State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-card p-8 sm:p-12">
              <p className="eyebrow text-accent mb-3">Send a Message</p>
              <h2 className="text-3xl font-extrabold tracking-tight">Let's talk about your business.</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-7">
                Share a summary of your inquiry, question, or proposal. A senior team member will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-10 border border-accent/40 bg-accent/5 p-8 text-center">
                  <CheckCircle2 size={36} className="mx-auto text-accent mb-3" />
                  <h3 className="text-xl font-bold">Message Transmitted!</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Thank you, {form.name}. We have received your inquiry and will follow up shortly via {form.phone || form.email}.
                  </p>
                  <div className="mt-6">
                    <Link to="/quote">
                      <Button variant="accent" className="font-bold">
                        Need a Detailed Project Quotation Instead? <ArrowUpRight size={15} />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ibrahim Sobur"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 09136447931"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. hello@business.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject / Focus</label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Web & Application Development">Web & Application Development</option>
                        <option value="Business Automation & AI">Business Automation & AI</option>
                        <option value="Branding & Design">Branding & Design</option>
                        <option value="IT Infrastructure & Hosting">IT Infrastructure & Hosting</option>
                        <option value="Corporate Training">Corporate Training</option>
                        <option value="Partnership Proposal">Partnership Proposal</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">How can we help your business? *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-border bg-background p-4 text-sm focus:border-accent focus:outline-none resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <Button type="submit" variant="accent" className="w-full sm:w-auto font-bold gap-2">
                      <Send size={15} /> Send Message
                    </Button>
                    <Link to="/quote" className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1">
                      Or fill out our 5-step Project Quotation Form <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
