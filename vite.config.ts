import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		dts({
			tsconfigPath: "./tsconfig.json",
			include: ["src/**/*.vue", "src/**/*.ts"],
			exclude: ["vite.config.ts", "main.ts"],
			outDir: "dist/types",
			insertTypesEntry: true,
			rollupTypes: true,
			entryRoot: "src",
		}),
	],
	build: {
		cssCodeSplit: false,
		lib: {
			entry: "./src/StarRatings.ts",
			formats: ["es", "cjs"],
			name: "StarRatings",
			fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
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
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
