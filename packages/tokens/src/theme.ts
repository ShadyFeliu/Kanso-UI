import { darkTheme, lightTheme } from './base';
import { clone, deepMerge } from './merge';
import type { ThemeMode, ThemeOverrides, TokenTheme } from './types';

export type CreateThemeOptions = {
  base?: TokenTheme;
  mode?: ThemeMode;
};

export const createTheme = (
  name: string,
  overrides: ThemeOverrides = {},
  options: CreateThemeOptions = {}
): TokenTheme => {
  const resolvedBase = options.base
    ? options.base
    : options.mode === 'dark'
      ? darkTheme
      : lightTheme;

  const clonedTokens = clone(resolvedBase.tokens);
  const mergedTokens = overrides.tokens
    ? deepMerge(clonedTokens, overrides.tokens)
    : clonedTokens;

  if (overrides.semantic) {
    mergedTokens.color.semantic = {
      ...mergedTokens.color.semantic,
      ...overrides.semantic
    };
  }

  return {
    name,
    mode: options.mode ?? resolvedBase.mode,
    tokens: mergedTokens
  };
};

export const availableThemes: Record<string, TokenTheme> = {
  [lightTheme.name]: lightTheme,
  [darkTheme.name]: darkTheme
};

