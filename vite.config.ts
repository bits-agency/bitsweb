import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => ({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
    }),
    command === "build"
      ? nitro({
          preset: process.env.VERCEL
            ? "vercel"
            : process.env.CF_PAGES
            ? "cloudflare-pages"
            : "node-server",
        })
      : null,
    viteReact(),
  ].filter(Boolean),
}));
