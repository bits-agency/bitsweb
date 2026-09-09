import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SectionContainer } from "@/components/page-primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — BITS.go" },
      { name: "description", content: "Privacy Policy for BITS.go (Bamietech IT Solutions). How we protect and respect client and visitor data." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Governance // Compliance"
        title="Privacy Policy"
        copy="At BITS.go (Bamietech IT Solutions), we respect the privacy of every client, partner, and website visitor. This policy explains our data principles."
      />

      <SectionContainer className="py-20 max-w-4xl">
        <div className="border border-border bg-card p-8 sm:p-14 space-y-8 text-sm leading-8 text-muted-foreground">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information you explicitly provide to us when requesting a project quotation, using our contact channels, or submitting talent expressions of interest. This includes your name, contact phone number, email address, company name, and project specifications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. How We Use Information</h2>
            <p className="mt-2">
              Information collected is used solely to evaluate project scopes, deliver commercial quotations, provide software development services, respond to inquiries, and maintain professional client communications. We never sell, rent, or lease your information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. Confidentiality of Client Data</h2>
            <p className="mt-2">
              As a technology solutions agency, we treat all proprietary business logic, product concepts, source code, and client customer data with rigorous professional discretion and non-disclosure standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Contact Regarding Data</h2>
            <p className="mt-2">
              If you have any questions regarding your information or wish to request data deletion, please contact our team directly at{" "}
              <a href="mailto:bits.go@gmail.com" className="text-accent underline font-semibold">bits.go@gmail.com</a>.
            </p>
          </div>

          <div className="pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
            <span>Last Updated: March 2026</span>
            <Link to="/terms" className="text-accent hover:underline font-semibold">View Terms & Conditions →</Link>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
