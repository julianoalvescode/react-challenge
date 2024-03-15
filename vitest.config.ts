/// <reference types="vitest" />

import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["test/vitest.setup.ts"],
    include: ["**/?(*.)test.ts?(x)"],
  },
  plugins: [viteTsconfigPaths()],
});
