import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  typescript: {
    check: false
  },
  async viteFinal(config) {
    config.build = config.build ?? {};
    config.build.chunkSizeWarningLimit = Math.max(
      config.build.chunkSizeWarningLimit ?? 0,
      1500
    );

    const existingOutput = config.build.rollupOptions?.output;
    const manualChunks = (id: string) => {
      if (id.includes('@radix-ui')) {
        return 'radix';
      }
      if (id.includes('node_modules')) {
        if (id.includes('@storybook')) {
          return 'storybook-vendor';
        }
        if (id.includes('react')) {
          return 'react-vendor';
        }
        return 'vendor';
      }
      return undefined;
    };

    config.build.rollupOptions = {
      ...config.build.rollupOptions,
      output: Array.isArray(existingOutput)
        ? existingOutput.map((output) => ({
            ...output,
            manualChunks: output.manualChunks ?? manualChunks
          }))
        : {
            ...(existingOutput ?? {}),
            manualChunks: existingOutput?.manualChunks ?? manualChunks
          }
    };

    return config;
  }
};

export default config;

