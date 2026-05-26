import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwind from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  plugins: [tailwind(), tsconfigPaths(), react()],
  resolve: {
    alias: [{ find: /^@\/(.*)/, replacement: path.resolve(__dirname, "src/$1") }],
  },
});
