import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    // O global é para que não precisemos importar as funções do vitest dentro de cada teste.
    // Porém, isso exige uma configuração a mais no tsconfig.json
    /**
     * "types": [
     *    "vitest/globals",
     *    "multer"
     * ]
     */
    globals: true,
    root: "./",
  },
  plugins: [
    tsConfigPaths(),
    // swc para converter o TS para JS em tempo de execução. Deixa os testes muito mais rápidos.
    swc.vite({
      module: { type: "es6" },
    }),
  ],
});
