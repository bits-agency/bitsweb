import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SectionContainer } from "@/components/page-primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BITS.go" },
      { name: "description", content: "Terms of service and engagement standards for BITS.go (Bamietech IT Solutions)." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Commercial Agreement // Professional Code"
        title="Terms & Conditions"
        copy="The legal terms, project milestone agreements, and service principles that govern all technology engagements with BITS.go."
      />

      <SectionContainer className="py-20 max-w-4xl">
        <div className="border border-border bg-card p-8 sm:p-14 space-y-8 text-sm leading-8 text-muted-foreground">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Engagement Framework</h2>
            <p className="mt-2">
              All technology development, design, and consulting projects undertaken by BITS.go (Bamietech IT Solutions) are governed by formal project scopes, agreed milestones, and clear technical acceptance criteria outlined prior to execution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. Intellectual Property Ownership</h2>
            <p className="mt-2">
              Upon complete settlement of agreed contractual invoices, all custom software, bespoke design collateral, database architectures, and digital assets developed exclusively for the client transfer fully to client ownership, unless explicitly defined as licensed third-party or open-source infrastructure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. Warranties & Post-Launch Support</h2>
            <p className="mt-2">
              We stand behind the engineering quality of our deliverables. All completed builds include an agreed warranty window for bug remediation, performance optimization, and handoff documentation, with optional ongoing service-level agreements (SLAs).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Inquiries</h2>
            <p className="mt-2">
              For legal or partnership inquiries, contact us at{" "}
              <a href="mailto:bits.go@gmail.com" className="text-accent underline font-semibold">bits.go@gmail.com</a>{" "}
              or call <a href="tel:09136447931" className="text-accent underline font-semibold">09136447931</a>.
            </p>
          </div>

          <div className="pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Last Updated: March 2026</span>
            <Link to="/privacy" className="text-accent hover:underline font-semibold">View Privacy Policy →</Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
