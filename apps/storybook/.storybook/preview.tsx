import React from 'react';
import type { Preview } from '@storybook/react';
import { KansoProvider } from '@kanso-ui/ui';
import { darkTheme, lightTheme } from '@kanso-ui/tokens';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme === 'dark' ? 'dark' : 'light';
      const theme = mode === 'dark' ? darkTheme : lightTheme;

      return (
        <KansoProvider theme={theme}>
          <div
            style={{
              minHeight: '100vh',
              padding: '2rem',
              background: 'var(--k-color-semantic-background)',
              color: 'var(--k-color-semantic-text-primary)',
              transition: 'background 220ms ease, color 220ms ease'
            }}
          >
            <Story />
          </div>
        </KansoProvider>
      );
    }
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
  },
  globalTypes: {
    theme: {
      description: 'Tema global',
      defaultValue: 'light',
      toolbar: {
        title: 'Tema',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Claro' },
          { value: 'dark', icon: 'circle', title: 'Oscuro' }
        ]
      }
    }
  }
};

export default preview;

