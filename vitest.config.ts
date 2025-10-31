import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const rootDir = dirname(fileURLToPath(import.meta.url));

const scope = process.env.VITEST_SCOPE;

const scopeIncludes: Record<string, string[]> = {
  tokens: [
    'packages/tokens/src/__tests__/**/*.{ts,tsx}',
    'packages/tokens/**/*.{test,spec}.{ts,tsx}'
  ],
  styles: [
    'packages/styles/src/__tests__/**/*.{ts,tsx}',
    'packages/styles/**/*.{test,spec}.{ts,tsx}'
  ],
  ui: [
    'packages/ui/src/__tests__/**/*.{ts,tsx}',
    'packages/ui/src/**/*.{test,spec}.{ts,tsx}'
  ]
};

const includePatterns = scope && scopeIncludes[scope]
  ? scopeIncludes[scope]
  : [
      'packages/**/__tests__/**/*.{ts,tsx}',
      'packages/**/*.{test,spec}.{ts,tsx}'
    ];

export default defineConfig({
  test: {
    root: rootDir,
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(rootDir, 'vitest.setup.ts')],
    include: includePatterns,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['packages/**/src/**/*.{ts,tsx}']
    }
  },
  resolve: {
    alias: {
      '@kanso-ui/tokens': resolve(rootDir, 'packages/tokens/src'),
      '@kanso-ui/styles': resolve(rootDir, 'packages/styles/src'),
      '@kanso-ui/ui': resolve(rootDir, 'packages/ui/src')
    }
  }
});

