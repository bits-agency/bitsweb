import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, CheckCircle2, Send, Sparkles, Phone, MessageSquare, Mail, Calendar, Clock, DollarSign, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionContainer } from "@/components/page-primitives";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Project Quotation — BITS.go" },
      { name: "description", content: "Tell BITS.go about your business requirements, software needs, or digital goals to receive a tailored project estimate." },
      { property: "og:title", content: "Request a Project Quotation — BITS.go" },
      { property: "og:description", content: "Tell BITS.go about your business requirements to receive a tailored project estimate." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

const serviceOptions = [
  "Web Development",
  "Software & Applications",
  "Mobile App Development",
  "UI/UX Design",
  "Graphics Design",
  "Branding & Identity",
  "SEO & Online Visibility",
  "AI Solutions & Bots",
  "Business Automation",
  "Hosting & Infrastructure",
  "IT Support & Consulting",
  "Training & Digital Skills",
  "SaaS & Product Development",
  "Other / Custom Solution",
];

const budgetRanges = [
  "Below ₦300,000 / $250 (Basic / Startup package)",
  "₦300,000 – ₦750,000 / $250 – $600 (Growth standard)",
  "₦750,000 – ₦2,000,000 / $600 – $1,500 (Comprehensive business build)",
  "₦2,000,000 – ₦5,000,000+ / $1,500 – $4,000+ (Enterprise / Complex software)",
  "Flexible / Need guidance from BITS.go",
];

const timelineOptions = [
  "Urgent (Within 1–2 weeks)",
  "Standard (3–5 weeks)",
  "Medium-term (1–3 months)",
  "Long-term (Ongoing development / Retainer)",
  "Flexible / Exploring possibilities",
];

const contactMethods = [
  { id: "WhatsApp", label: "WhatsApp (Fastest response)", icon: MessageSquare },
  { id: "Phone", label: "Direct Phone Call", icon: Phone },
  { id: "Email", label: "Detailed Email", icon: Mail },
  { id: "Meeting", label: "Virtual Consultation (Google Meet)", icon: Calendar },
];

function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    description: "",
    budget: budgetRanges[1],
    timeline: timelineOptions[1],
    contactMethod: "WhatsApp",
  });

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.phone)) {
      alert("Please enter your name and phone number to continue.");
      return;
    }
    if (step === 2 && formData.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*New Project Quotation Request from BITS.go Website*\n\n` +
      `*Client:* ${formData.name}\n` +
      `*Company:* ${formData.company || "Not specified"}\n` +
      `*Contact:* ${formData.phone} | ${formData.email || "No email"}\n` +
      `*Services Needed:* ${formData.services.join(", ")}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      `*Target Timeline:* ${formData.timeline}\n` +
      `*Preferred Contact:* ${formData.contactMethod}\n\n` +
      `*Project Brief:* ${formData.description || "Discuss directly"}`;
    return encodeURIComponent(text);
  };

  return (
    <div>
      <PageIntro
        eyebrow="Estimate // Scope // Execution"
        title="Request a Project Quotation"
        copy="Tell us what your business is trying to build, solve, or transform. We review every requirement thoroughly to architect the right technical and commercial solution."
      />

      <SectionContainer className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl">
          {submitted ? (
            <div className="border border-border bg-card p-8 sm:p-14 text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight">Project Request Received!</h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-7">
                Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. Our technical and business strategy team is reviewing your project details.
              </p>
              <div className="my-8 border-y border-border py-6 text-left space-y-2 text-sm">
                <p><span className="text-muted-foreground">Services:</span> <span className="font-medium text-foreground">{formData.services.join(", ")}</span></p>
                <p><span className="text-muted-foreground">Preferred Contact:</span> <span className="font-medium text-foreground">{formData.contactMethod} ({formData.phone})</span></p>
                <p><span className="text-muted-foreground">Timeline:</span> <span className="font-medium text-foreground">{formData.timeline}</span></p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/2349136447931?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="accent" className="w-full sm:w-auto">
                    Fast-Track via WhatsApp <ArrowRight size={16} />
                  </Button>
                </a>
                <Link to="/" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="border border-border bg-card">
              {/* Stepper Header */}
              <div className="border-b border-border bg-surface px-6 py-5 sm:px-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-accent">STEP 0{step} OF 05</span>
                    <span className="h-3 w-px bg-border" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                      {step === 1 && "Client & Business Profile"}
                      {step === 2 && "Required Services"}
                      {step === 3 && "Project Scope & Objectives"}
                      {step === 4 && "Commercials & Timeline"}
                      {step === 5 && "Review & Preferred Contact"}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground hidden sm:inline">{step * 20}% completed</span>
                </div>
                {/* Progress bar */}
                <div className="mt-4 h-1 w-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300"
                    style={{ width: `${step * 20}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
                {/* STEP 1: Basic Information */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">Tell us about you and your organization</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Who should we contact regarding this quotation?</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ibrahim Sobur"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Company / Organization Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Global Logistics"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 09136447931"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. contact@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Service Selection */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">What capabilities does your project require?</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Select all services that apply to your initiative.</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {serviceOptions.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`flex items-center justify-between border p-4 text-left text-sm font-semibold transition-all ${
                              isSelected
                                ? "border-accent bg-accent/10 text-foreground"
                                : "border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                            }`}
                          >
                            <span>{service}</span>
                            <span
                              className={`size-4 rounded-full border grid place-items-center text-[10px] ${
                                isSelected ? "border-accent bg-accent text-accent-foreground font-bold" : "border-border"
                              }`}
                            >
                              {isSelected ? "✓" : ""}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 3: Project Scope & Objectives */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold">Tell us about your project</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        What are you trying to build or improve? What business problem are you addressing?
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Project Brief & Requirements
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Describe your current system, target audience, features required, or problems you are trying to overcome through this technology project..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full border border-border bg-background p-4 text-sm focus:border-accent focus:outline-none resize-y"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Budget & Timeline */}
                {step === 4 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold">Investment scale & target timeframe</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Helps us tailor a realistic and value-packed technology proposal.</p>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <DollarSign size={14} className="text-accent" /> Estimated Budget Range
                      </label>
                      <div className="space-y-2">
                        {budgetRanges.map((range) => (
                          <label
                            key={range}
                            className={`flex items-center gap-3 border p-3.5 text-sm cursor-pointer transition-colors ${
                              formData.budget === range
                                ? "border-accent bg-accent/5 font-semibold text-foreground"
                                : "border-border hover:border-border/80 text-muted-foreground"
                            }`}
                          >
                            <input
                              type="radio"
                              name="budget"
                              checked={formData.budget === range}
                              onChange={() => setFormData({ ...formData, budget: range })}
                              className="accent-accent"
                            />
                            <span>{range}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <Clock size={14} className="text-accent" /> Desired Delivery Timeline
                      </label>
                      <div className="space-y-2">
                        {timelineOptions.map((time) => (
                          <label
                            key={time}
                            className={`flex items-center gap-3 border p-3.5 text-sm cursor-pointer transition-colors ${
                              formData.timeline === time
                                ? "border-accent bg-accent/5 font-semibold text-foreground"
                                : "border-border hover:border-border/80 text-muted-foreground"
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeline"
                              checked={formData.timeline === time}
                              onChange={() => setFormData({ ...formData, timeline: time })}
                              className="accent-accent"
                            />
                            <span>{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Review & Preferred Contact */}
                {step === 5 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold">Review & preferred contact method</h3>
                      <p className="mt-1 text-sm text-muted-foreground">How would you prefer BITS.go to deliver this quotation?</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {contactMethods.map((method) => {
                        const Icon = method.icon;
                        const isSelected = formData.contactMethod === method.id;
                        return (
                          <button
                            type="button"
                            key={method.id}
                            onClick={() => setFormData({ ...formData, contactMethod: method.id })}
                            className={`flex items-center gap-3 border p-4 text-left transition-all ${
                              isSelected
                                ? "border-accent bg-accent/10 font-bold text-foreground"
                                : "border-border bg-background text-muted-foreground hover:border-foreground/30"
                            }`}
                          >
                            <Icon size={18} className={isSelected ? "text-accent" : "text-muted-foreground"} />
                            <span className="text-sm">{method.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="border border-border bg-surface p-5 space-y-3 text-xs leading-6">
                      <p className="font-bold text-foreground uppercase tracking-wider text-[11px]">Summary of your inquiry:</p>
                      <p><strong className="text-foreground">Client:</strong> {formData.name} {formData.company ? `(${formData.company})` : ""}</p>
                      <p><strong className="text-foreground">Contact:</strong> {formData.phone} | {formData.email || "No email"}</p>
                      <p><strong className="text-foreground">Services:</strong> {formData.services.join(", ")}</p>
                      <p><strong className="text-foreground">Budget:</strong> {formData.budget}</p>
                      <p><strong className="text-foreground">Timeline:</strong> {formData.timeline}</p>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <div className="flex items-center justify-between border-t border-border pt-6">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                      <ArrowLeft size={16} /> Back
                    </Button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <Button type="button" variant="dark" onClick={nextStep} className="gap-2">
                      Continue <ArrowRight size={16} />
                    </Button>
                  ) : (
                    <Button type="submit" variant="accent" className="gap-2 font-bold">
                      <Send size={16} /> Send Project Request
                    </Button>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* WhatsApp Direct Option */}
          <div className="mt-12 border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-accent">Prefer immediate conversation?</p>
              <h3 className="text-lg font-bold mt-1">Chat directly with the BITS.go engineering team</h3>
              <p className="text-xs text-muted-foreground mt-1">Available on WhatsApp for fast questions and preliminary scope reviews.</p>
            </div>
            <a
              href="https://wa.me/2349136447931?text=Hello%20BITS.go%2C%20I%27d%20like%20to%20request%20a%20project%20quotation."
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <Button variant="outline" className="gap-2 font-bold border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <MessageSquare size={16} /> Open WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
