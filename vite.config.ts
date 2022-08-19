import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        utils: resolve(__dirname, "src", "utils"),
        pages: resolve(__dirname, "src", "pages"),
        contracts: resolve(__dirname, "src", "contracts"),
        api: resolve(__dirname, "src", "api"),
        theme: resolve(__dirname, "src", "theme"),
        routes: resolve(__dirname, "src", "routes"),
        config: resolve(__dirname, "src", "config"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
