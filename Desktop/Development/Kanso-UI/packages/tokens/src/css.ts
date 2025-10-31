import type { TokenTheme } from './types';

type CssVariablesMap = Record<string, string>;

const prefix = '--k';

const normalizeSegment = (segment: string | number): string =>
  String(segment)
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[_\s]+/g, '-')
    .toLowerCase();

const walk = (
  value: unknown,
  path: Array<string | number>,
  variables: CssVariablesMap
): void => {
  if (value == null) {
    return;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const name = `${prefix}-${path.map(normalizeSegment).join('-')}`;
    variables[name] = String(value);
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      walk(item, [...path, index], variables);
    });
    return;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>);
    entries.forEach(([key, nestedValue]) => {
      walk(nestedValue, [...path, key], variables);
    });
  }
};

export const tokensToCssVariables = (theme: TokenTheme): CssVariablesMap => {
  const variables: CssVariablesMap = {};
  walk(theme.tokens, [], variables);
  return variables;
};

export const themeToCss = (theme: TokenTheme, selector = ':root'): string => {
  const declarations = tokensToCssVariables(theme);
  const body = Object.entries(declarations)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');

  return `${selector} {\n${body}\n}`;
};

export const cssVar = (
  path: string | Array<string | number>,
  fallback?: string
): string => {
  const segments = Array.isArray(path) ? path : [path];
  const name = `${prefix}-${segments.map(normalizeSegment).join('-')}`;
  if (fallback) {
    return `var(${name}, ${fallback})`;
  }
  return `var(${name})`;
};

