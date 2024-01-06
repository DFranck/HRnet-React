import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/common/components/Table/Table.jsx"),
      name: "pmf-Table",
      // Le nom de fichier de sortie pour votre bibliothèque
      fileName: (format) => `pmf-Table.${format}.js`,
    },
    rollupOptions: {
      // Assurez-vous d'externaliser les dépendances que vous ne voulez pas inclure
      // dans votre bundle final
      external: ["react", "react-dom"],
      output: {
        // Fournir des globals pour les dépendances externes, si nécessaire
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
