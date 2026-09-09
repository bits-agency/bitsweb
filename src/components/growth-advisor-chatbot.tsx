import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowUpRight,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Building,
  Cpu,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  recommendations?: {
    services: string[];
    timeline: string;
    impact: string;
  };
  actions?: { label: string; action: "quote" | "whatsapp" | "prompt"; data?: string }[];
  timestamp: string;
};

const defaultQuickPrompts = [
  "How can I automate our sales & inventory tracking?",
  "We need a modern website + booking portal for our business.",
  "How can an AI chatbot improve our customer inquiries?",
  "We are a school / organization needing a portal.",
  "How do we improve our online visibility & Google ranking?",
];

// Knowledge base for intelligent heuristic matching
function generateAdvisoryResponse(input: string): {
  text: string;
  recommendations?: { services: string[]; timeline: string; impact: string };
  actions?: { label: string; action: "quote" | "whatsapp" | "prompt"; data?: string }[];
} {
  const query = input.toLowerCase();

  if (query.includes("inventory") || query.includes("pos") || query.includes("retail") || query.includes("shop") || query.includes("store")) {
    return {
      text: "For retail and inventory operations, manual tracking via spreadsheets or books causes stock discrepancies and lost revenue. BITS.go designs unified cloud systems that connect your sales counter with live stock updates.",
      recommendations: {
        services: ["Custom Business Software & POS", "Inventory Systems", "Business Automation"],
        timeline: "3–4 weeks for core deployment",
        impact: "Eliminates reconciliation errors, provides real-time profit analytics, and prevents stockouts.",
      },
      actions: [
        { label: "Request Quote for POS / Inventory", action: "quote" },
        { label: "Discuss on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("website") || query.includes("web") || query.includes("portal") || query.includes("redesign")) {
    return {
      text: "Your website should be an active growth engine rather than a static brochure. At BITS.go, we build high-performance, mobile-first web platforms with search optimization, payment integration, and intuitive customer flows.",
      recommendations: {
        services: ["Web Development", "UI/UX Design", "SEO & Online Visibility"],
        timeline: "2–4 weeks depending on scope",
        impact: "Establishes institutional credibility, converts visitors into paying leads, and ranks on search engines.",
      },
      actions: [
        { label: "Start Web Development Project", action: "quote" },
        { label: "Review with BITS.go via WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("ai") || query.includes("bot") || query.includes("customer service") || query.includes("chat")) {
    return {
      text: "Customer inquiries outside business hours represent the highest leak in lead conversion. We deploy custom AI assistants and WhatsApp bot workflows that qualify prospects, answer FAQs, and book consultations automatically.",
      recommendations: {
        services: ["AI Solutions", "AI Chatbots & Assistants", "WhatsApp Automation"],
        timeline: "1–3 weeks",
        impact: "Instant 24/7 customer engagement, 80% decrease in response lag, and automated lead capture.",
      },
      actions: [
        { label: "Deploy an AI Assistant", action: "quote" },
        { label: "Discuss AI Use Cases on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("school") || query.includes("education") || query.includes("student") || query.includes("result")) {
    return {
      text: "Educational institutions thrive with automated portals for admissions, fee payment receipts, term reports, and student record databases. We build secure, easy-to-use school management systems tailored for staff and parents.",
      recommendations: {
        services: ["School Management Systems", "Custom Web Portals", "Database Architecture"],
        timeline: "3–6 weeks",
        impact: "Zero paperwork delays, transparent parent communication, and instant term result generation.",
      },
      actions: [
        { label: "Get School Portal Quote", action: "quote" },
        { label: "Consult on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("app") || query.includes("mobile") || query.includes("android") || query.includes("ios")) {
    return {
      text: "Mobile applications put your services directly into your customers' pockets. We architect fast, responsive cross-platform apps (Android & iOS) designed around real user behavior and reliable backend APIs.",
      recommendations: {
        services: ["Mobile App Development", "UI/UX Product Design", "API & Database Systems"],
        timeline: "4–8 weeks",
        impact: "Higher customer retention, push notification reach, and seamless mobile payments.",
      },
      actions: [
        { label: "Request Mobile App Quote", action: "quote" },
        { label: "Discuss App Concept on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("automate") || query.includes("workflow") || query.includes("process") || query.includes("manual")) {
    return {
      text: "Manual data transfers, chasing signatures, and repeating routine tasks waste executive and operational time. We connect your software touchpoints so forms, notifications, approvals, and invoices trigger automatically.",
      recommendations: {
        services: ["Business Automation & Digital Transformation", "CRM & Pipeline Automation", "Internal Tools"],
        timeline: "2–4 weeks",
        impact: "Saves 10–25 hours per employee weekly, speeds up client delivery, and eliminates human errors.",
      },
      actions: [
        { label: "Scope Automation Project", action: "quote" },
        { label: "Chat on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("brand") || query.includes("logo") || query.includes("design") || query.includes("identity")) {
    return {
      text: "A premium business identity commands premium pricing. BITS.go crafts cohesive brand systems: logo development, typography standards, corporate stationery, pitch decks, and digital guidelines that position your company as an industry leader.",
      recommendations: {
        services: ["Branding & Brand Identity", "Graphics Design", "UI/UX Design"],
        timeline: "1–3 weeks",
        impact: "Elevates market authority, commands client trust, and ensures consistent presence across all touchpoints.",
      },
      actions: [
        { label: "Request Branding Package", action: "quote" },
        { label: "Discuss on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  if (query.includes("seo") || query.includes("traffic") || query.includes("google") || query.includes("visibility") || query.includes("marketing")) {
    return {
      text: "Search engine visibility guarantees that when qualified clients search for your services, your business appears first. We optimize technical SEO, Google Business Profiles, local citations, and conversion-focused content.",
      recommendations: {
        services: ["SEO & Online Visibility", "Local SEO & Google Business Profile", "Content Architecture"],
        timeline: "Ongoing / 3–6 months for compounding ranking",
        impact: "Predictable stream of organic inbound leads without continuous ad spend.",
      },
      actions: [
        { label: "Get SEO & Visibility Audit", action: "quote" },
        { label: "Chat on WhatsApp", action: "whatsapp" },
      ],
    };
  }

  // General consultative fallback
  return {
    text: "At BITS.go (Bamietech IT Solutions), we approach every business challenge from first principles: What is the core bottleneck? How can technology eliminate friction and drive revenue? We build custom web apps, software, automation, and AI workflows tailored to your specific operations.",
    recommendations: {
      services: ["Custom Business Software", "Web & Mobile Development", "AI & Business Automation"],
      timeline: "Tailored to scope",
      impact: "Replaces manual bottlenecks with dependable digital systems built to scale.",
    },
    actions: [
      { label: "Request a Formal Quotation", action: "quote" },
      { label: "Speak with Founder / Lead Engineer on WhatsApp", action: "whatsapp" },
    ],
  };
}

export function GrowthAdvisorChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I am the BITS.go Growth Advisor. Tell me about your business or current operational challenge, and I will recommend the right technology stack to build, transform, or scale your operations.",
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thoughtful analysis
    setTimeout(() => {
      const responseData = generateAdvisoryResponse(text);
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: responseData.text,
        recommendations: responseData.recommendations,
        actions: responseData.actions,
        timestamp: "Just now",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 600);
  };

  const handleAction = (action: "quote" | "whatsapp" | "prompt", data?: string) => {
    if (action === "prompt" && data) {
      handleSendMessage(data);
    } else if (action === "whatsapp") {
      const lastUserMsg = [...messages].reverse().find((m) => m.sender === "user")?.text || "General business inquiry";
      const text = encodeURIComponent(
        `Hello BITS.go, I used your website Growth Advisor regarding:\n"${lastUserMsg}"\n\nI'd like to discuss how we can implement this solution for my business.`
      );
      window.open(`https://wa.me/2349136447931?text=${text}`, "_blank");
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex items-center gap-2.5 border border-accent bg-background px-4 py-3 text-xs font-bold text-foreground shadow-2xl transition-all hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5"
          aria-label="Open BITS Business Advisor"
        >
          <div className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
          </div>
          <Sparkles size={15} className="text-accent group-hover:text-accent-foreground transition-colors" />
          <span>Ask BITS Advisor</span>
        </button>
      </div>

      {/* Advisor Dialog Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 w-[92vw] sm:w-[420px] max-h-[82vh] flex flex-col border border-border bg-card shadow-2xl backdrop-blur-2xl animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="grid size-9 place-items-center border border-accent bg-accent/10 text-accent font-bold">
                <Bot size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                  BITS Growth Advisor <span className="size-1.5 rounded-full bg-accent" />
                </p>
                <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                  AI Business Technology Consultant
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1"
              aria-label="Close advisor"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[50vh] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="grid size-6 shrink-0 place-items-center border border-accent/40 bg-accent/10 text-accent text-[10px] font-bold">
                    B
                  </div>
                )}
                <div
                  className={`max-w-[85%] space-y-2 p-3.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-foreground text-background font-medium"
                      : "border border-border bg-surface text-foreground"
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Recommendation Card */}
                  {msg.recommendations && (
                    <div className="mt-3 border-t border-border pt-3 space-y-2 font-mono text-[11px]">
                      <div>
                        <span className="text-accent font-bold">Recommended Solutions:</span>
                        <ul className="mt-1 space-y-0.5 text-muted-foreground list-disc list-inside">
                          {msg.recommendations.services.map((s) => (
                            <li key={s} className="text-foreground">{s}</li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        <span className="text-accent font-bold">Expected Impact:</span>{" "}
                        <span className="text-muted-foreground">{msg.recommendations.impact}</span>
                      </p>
                      <p>
                        <span className="text-accent font-bold">Estimated Timeframe:</span>{" "}
                        <span className="text-muted-foreground">{msg.recommendations.timeline}</span>
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  {msg.actions && (
                    <div className="mt-3 pt-2 flex flex-wrap gap-2">
                      {msg.actions.map((act, i) => (
                        act.action === "quote" ? (
                          <Link
                            key={i}
                            to="/quote"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1 border border-accent bg-accent/15 px-2.5 py-1.5 text-[11px] font-bold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {act.label} <ArrowUpRight size={12} />
                          </Link>
                        ) : (
                          <button
                            key={i}
                            type="button"
                            onClick={() => handleAction(act.action, act.data)}
                            className="inline-flex items-center gap-1 border border-border bg-background px-2.5 py-1.5 text-[11px] font-bold text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
                          >
                            {act.label} <MessageSquare size={11} className="text-accent" />
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-[10px] pl-8">
                <span className="animate-spin text-accent">✦</span> Analyzing business requirements...
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Starter Prompts if conversation is short */}
          {messages.length <= 2 && (
            <div className="border-t border-border bg-background/50 p-3">
              <p className="text-[10px] font-mono uppercase text-muted-foreground mb-2">Suggested Inquiries:</p>
              <div className="flex flex-col gap-1.5">
                {defaultQuickPrompts.slice(0, 3).map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(prompt)}
                    className="flex items-center justify-between text-left text-[11px] text-muted-foreground hover:text-accent border border-border/60 hover:border-accent p-2 bg-card transition-colors"
                  >
                    <span>{prompt}</span>
                    <ChevronRight size={12} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <div className="border-t border-border bg-surface p-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Describe your business or bottleneck..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border border-border bg-background px-3 py-2 text-xs focus:border-accent focus:outline-none"
              />
              <Button type="submit" variant="accent" size="sm" className="px-3" disabled={!inputValue.trim()}>
                <Send size={14} />
              </Button>
            </form>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span>BITS.go Automated Advisory</span>
              <a
                href="https://wa.me/2349136447931"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent underline"
              >
                Direct Human Call
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
