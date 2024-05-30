import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
    globals: true,
    include: ["./tests/**/*.{test,spec}.{js,ts,jsx,tsx}"],
    exclude: [...configDefaults.exclude],
  },
});
