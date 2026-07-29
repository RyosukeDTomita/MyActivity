import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// eslint-config-next@16 は .next/** out/** build/** next-env.d.ts を既定で無視する
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
]);

export default eslintConfig;
