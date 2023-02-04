import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript2 from 'rollup-plugin-typescript2'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ["src/lib/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true
        },
        exclude: [ "vite.config.ts", "main.ts" ]
      },
    })
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/StarsRatings.ts",
      formats: ['es', 'cjs'],
      name: "vue-star-ratings",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs")
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
