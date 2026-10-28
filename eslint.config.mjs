import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  // Full recommended a11y ruleset (next's preset only enables a handful).
  jsxA11y.flatConfigs.recommended,
  prettier,
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'next-env.d.ts']),
]);
