import { defineConfig, globalIgnores } from 'eslint/config';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier/flat';

export default defineConfig([
  ...nextCoreWebVitals,
  ...nextTypescript,
  // eslint-config-next already registers the jsx-a11y plugin, so only add the
  // full recommended ruleset here (next's preset enables just a handful).
  { rules: jsxA11y.flatConfigs.recommended.rules },
  {
    rules: {
      // role="list" on <ul> is deliberate: Safari/VoiceOver drops list semantics
      // when list-style is removed (see src/styles/_reset.scss).
      'jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
    },
  },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'coverage/**', 'next-env.d.ts']),
]);
