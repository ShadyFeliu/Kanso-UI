import React from 'react';
import type { Preview } from '@storybook/react';
import { KansoProvider } from '@kanso-ui/ui';

const preview: Preview = {
  decorators: [
    (Story) => (
      <KansoProvider>
        <div
          style={{
            minHeight: '100vh',
            padding: '2rem',
            background: 'var(--k-color-semantic-background)',
            color: 'var(--k-color-semantic-text-primary)'
          }}
        >
          <Story />
        </div>
      </KansoProvider>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;

