import { resolve } from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets component styles write `@use 'tokens'` / `@use 'mixins'`.
  sassOptions: {
    loadPaths: [resolve(import.meta.dirname, 'src/styles')],
  },
};

export default nextConfig;
