import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })], // Tạo file .d.ts
  build: {
    lib: {
      entry: "src/index.ts",
      name: "AvatarInitials",
      fileName: (format) => `avatar-initials.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
