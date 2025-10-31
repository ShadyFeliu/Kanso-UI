import { render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { atoms, cx, ThemeProvider } from '..';
import { createTheme } from '@kanso-ui/tokens';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('style utilities', () => {
  it('combines className fragments with cx', () => {
    expect(cx('uno', undefined, ['dos', false, 'tres'])).toBe('uno dos tres');
  });

  it('translates atomic props to CSS variables', () => {
    const style = atoms({ p: '4', bg: 'surface', color: 'textPrimary' });
    expect(style.padding).toBe('var(--k-spacing-4)');
    expect(style.background).toBe('var(--k-color-semantic-surface)');
    expect(style.color).toBe('var(--k-color-semantic-text-primary)');
  });

  it('applies theme tokens to target element', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    const theme = createTheme('custom', {
      tokens: {
        spacing: { '4': '2rem' }
      },
      semantic: {
        primary: '#123456'
      }
    });

    render(
      <ThemeProvider target={target} theme={theme}>
        <div>contenido</div>
      </ThemeProvider>
    );

    expect(target.style.getPropertyValue('--k-spacing-4')).toBe('2rem');
    expect(target.style.getPropertyValue('--k-color-semantic-primary')).toBe('#123456');
  });
});

