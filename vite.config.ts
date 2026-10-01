/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Netlify sets URL to the site's primary address at build time; it's used
// for the absolute canonical and Open Graph URLs in index.html.
process.env.VITE_SITE_URL ??= process.env.URL ?? "http://localhost:5173";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
		setupFiles: ["./src/setupTests.ts"],
		include: ["src/**/*.test.{ts,tsx}"],
	},
});
