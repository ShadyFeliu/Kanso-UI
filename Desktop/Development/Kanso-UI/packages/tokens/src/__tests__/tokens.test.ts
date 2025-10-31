import { describe, expect, it } from 'vitest';

import {
  createTheme,
  cssVar,
  lightTheme,
  themeToCss,
  tokensToCssVariables
} from '..';

describe('design tokens', () => {
  it('produce CSS variables map', () => {
    const vars = tokensToCssVariables(lightTheme);
    expect(vars['--k-color-primary-500']).toMatch(/^#|var/);
    expect(vars['--k-spacing-4']).toBe('1rem');
  });

  it('serialises CSS text for themes', () => {
    const css = themeToCss(lightTheme);
    expect(css).toContain(':root');
    expect(css).toContain('--k-color-semantic-primary');
  });

  it('allows building a custom theme', () => {
    const theme = createTheme('brand', {
      tokens: {
        spacing: { '2': '0.625rem' }
      },
      semantic: {
        primary: '#ff3366'
      }
    });

    expect(theme.name).toBe('brand');
    expect(theme.tokens.spacing['2']).toBe('0.625rem');
    expect(theme.tokens.color.semantic.primary).toBe('#ff3366');
  });

  it('exposes helper to reference CSS variables', () => {
    expect(cssVar(['color', 'semantic', 'primary'])).toBe(
      'var(--k-color-semantic-primary)'
    );
  });
});

