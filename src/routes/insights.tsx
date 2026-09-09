import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";
import { PageIntro, SectionContainer, CtaBand } from "@/components/page-primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Perspectives — BITS.go" },
      { name: "description", content: "Articles, technical analysis, and strategic guides on digital transformation, web engineering, AI, and business growth from BITS.go." },
      { property: "og:title", content: "Insights & Perspectives — BITS.go" },
      { property: "og:description", content: "Actionable perspectives on technology, business growth, and digital transformation." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const insightCategories = [
  "All",
  "Technology",
  "Business Growth",
  "Web Development",
  "AI",
  "Automation",
  "Branding",
  "Digital Transformation",
  "Cybersecurity",
  "Entrepreneurship",
  "BITS.go News",
];

const articles = [
  {
    slug: "technology-should-serve-the-business",
    category: "Business Growth",
    title: "Technology Should Serve the Business, Not the Other Way Around",
    excerpt: "A useful digital system starts with the work, people, and commercial outcomes that matter — not an endless list of fashionable tools.",
    readTime: "4 min read",
    date: "March 2026",
    content: "When companies invest in technology, they frequently make the mistake of choosing software before defining their core operational bottlenecks. At BITS.go, we advocate a 'business-first' architecture: identify where human time is lost, where customer drop-off happens, and construct lightweight, robust systems specifically engineered for leverage.",
  },
  {
    slug: "when-a-business-needs-more-than-a-website",
    category: "Web Development",
    title: "When a Business Needs More Than a Static Website",
    excerpt: "A website can be a front door, a sales tool, an automated support layer, or the launchpad of a connected business portal.",
    readTime: "5 min read",
    date: "February 2026",
    content: "A standard digital brochure is no longer sufficient for ambitious enterprises. Modern digital platforms integrate customer accounts, live booking workflows, payment reconciliation, and automated notification triggers. Understanding this transition is the difference between a website as an expense and a digital platform as a profit center.",
  },
  {
    slug: "a-practical-starting-point-for-ai",
    category: "AI",
    title: "A Practical, High-ROI Starting Point for AI in SME Operations",
    excerpt: "The best first artificial intelligence implementation is often the one that makes repetitive knowledge retrieval immediate and frictionless.",
    readTime: "6 min read",
    date: "January 2026",
    content: "Rather than attempting grandiose, expensive generative AI experiments, organizations find highest leverage in targeted assistants: WhatsApp inquiry bots that answer 80% of customer questions, internal documentation search bots that train staff, and automated document data extraction.",
  },
  {
    slug: "automating-the-work-behind-the-work",
    category: "Automation",
    title: "Automating the Work Behind the Work: Eliminating Manual Friction",
    excerpt: "How small and medium businesses in Nigeria can replace spreadsheets and manual reconciliations with unified dashboards.",
    readTime: "5 min read",
    date: "January 2026",
    content: "Manual data entry across spreadsheets is the silent killer of business momentum. By connecting front-end forms directly with databases, auto-generating receipts, and triggering instant task assignments, teams save hundreds of hours every quarter.",
  },
  {
    slug: "building-digital-foundations-in-emerging-markets",
    category: "Digital Transformation",
    title: "Building Resilient Digital Infrastructure for Nigerian Businesses",
    excerpt: "Addressing connectivity fluctuations, mobile-first audiences, and offline-resilient architecture.",
    readTime: "7 min read",
    date: "December 2025",
    content: "Building software in emerging markets requires an engineering mindset that respects bandwidth limitations, mobile screen ergonomics, and fast CDN edge caching. BITS.go builds digital solutions engineered specifically to perform under real-world constraints.",
  },
  {
    slug: "brand-identity-beyond-a-logo",
    category: "Branding",
    title: "Brand Identity Beyond a Logo: Engineering Market Trust",
    excerpt: "Why visual consistency, typographic clarity, and tone of voice determine perceived enterprise value.",
    readTime: "4 min read",
    date: "November 2025",
    content: "Your brand is the immediate trust shortcut that precedes any sales call. High-growth businesses require unified color spaces, design systems, and consistent typography across physical and digital collateral to command premium pricing.",
  },
];

function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = selectedCategory === "All"
    ? articles
    : articles.filter((a) => a.category === selectedCategory);

  return (
    <div>
      <PageIntro
        eyebrow="Thinking // Strategy // Technical Mastery"
        title="Insights & Perspectives"
        copy="Practical essays, technical blueprints, and strategic insights on digital product engineering, AI deployment, and business scale from BITS.go."
      />

      <SectionContainer className="py-16 sm:py-24">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-border pb-6 mb-12">
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedArticle(null);
              }}
              className={`px-3.5 py-1.5 text-xs font-mono font-bold transition-colors ${
                selectedCategory === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-surface text-muted-foreground hover:text-foreground hover:bg-card border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modal/Reader View if an article is active */}
        {selectedArticle && (
          <div className="mb-16 border border-accent bg-card p-8 sm:p-12 shadow-xl animate-in fade-in-50">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <span className="eyebrow text-accent">{selectedArticle.category}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-xs font-mono font-bold text-muted-foreground hover:text-accent"
              >
                [ Close Reader × ]
              </button>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">{selectedArticle.title}</h2>
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><Clock size={13} /> {selectedArticle.readTime}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>
            <div className="prose prose-invert max-w-none space-y-4 text-base leading-8 text-foreground/90">
              <p className="text-lg font-medium text-accent leading-relaxed">{selectedArticle.excerpt}</p>
              <p>{selectedArticle.content}</p>
              <p>
                At BITS.go (Bamietech IT Solutions), we partner directly with founders, corporate decision-makers, and institutions to turn these strategic principles into reliable software, web applications, and automated workflows.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">Ready to implement this approach in your organization?</span>
              <Link to="/quote">
                <Button variant="accent" className="font-bold">
                  Start a Project Around This <ArrowUpRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <div
              key={article.slug}
              onClick={() => setSelectedArticle(article)}
              className="border border-border bg-card p-7 sm:p-8 flex flex-col justify-between hover:border-accent transition-all cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="eyebrow text-accent">{article.category}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/80 flex items-center justify-between text-xs font-bold text-accent">
                <span>Read Full Article</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      <CtaBand title="Have an idea or business challenge? Let's turn technology into your competitive edge." />
    </div>
  );
}
