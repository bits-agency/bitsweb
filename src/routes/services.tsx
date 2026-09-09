import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [{ title: "Services — BITS.go" }, { name: "description", content: "Explore BITS.go services for development, design, growth, automation, AI, infrastructure, and support." }, { property: "og:title", content: "Services — BITS.go" }, { property: "og:description", content: "Development, design, growth, automation, AI, infrastructure, and support for ambitious businesses." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/services" }] }),
  component: () => <Outlet />,
});