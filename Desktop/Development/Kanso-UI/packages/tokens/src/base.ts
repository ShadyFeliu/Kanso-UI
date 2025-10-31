import { DesignTokens, TokenTheme } from './types';

const neutral = {
  25: '#fdfdfd',
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5f5',
  400: '#94a3b8',
  500: '#64748b',
  600: '#475569',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
  950: '#020617'
} as const;

const primary = {
  25: '#f5f8ff',
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
  950: '#1e1b4b'
} as const;

const success = {
  25: '#f2fdf6',
  50: '#dcfce7',
  100: '#bbf7d0',
  200: '#86efac',
  300: '#4ade80',
  400: '#22c55e',
  500: '#16a34a',
  600: '#15803d',
  700: '#166534',
  800: '#14532d',
  900: '#166534',
  950: '#052e16'
} as const;

const warning = {
  25: '#fffdf4',
  50: '#fef3c7',
  100: '#fde68a',
  200: '#fcd34d',
  300: '#fbbf24',
  400: '#f59e0b',
  500: '#d97706',
  600: '#b45309',
  700: '#92400e',
  800: '#78350f',
  900: '#451a03',
  950: '#2c1502'
} as const;

const danger = {
  25: '#fff5f5',
  50: '#fee2e2',
  100: '#fecaca',
  200: '#fca5a5',
  300: '#f87171',
  400: '#ef4444',
  500: '#dc2626',
  600: '#b91c1c',
  700: '#991b1b',
  800: '#7f1d1d',
  900: '#450a0a',
  950: '#300505'
} as const;

const typography = {
  fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem'
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    tight: '1.2',
    snug: '1.35',
    normal: '1.5',
    relaxed: '1.75'
  },
  letterSpacings: {
    xs: '0.02em',
    sm: '0em',
    md: '-0.01em',
    lg: '-0.015em',
    xl: '-0.02em',
    '2xl': '-0.025em'
  }
} as const;

const spacing = {
  '0': '0px',
  px: '1px',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem'
} as const;

const radius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px'
} as const;

const shadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(15, 23, 42, 0.12)',
  sm: '0 2px 4px -1px rgba(15, 23, 42, 0.12), 0 1px 2px -1px rgba(15, 23, 42, 0.08)',
  md: '0 4px 6px -1px rgba(15, 23, 42, 0.12), 0 2px 4px -1px rgba(15, 23, 42, 0.08)',
  lg: '0 10px 15px -3px rgba(15, 23, 42, 0.22), 0 4px 6px -4px rgba(15, 23, 42, 0.1)'
} as const;

const motion = {
  duration: {
    instant: '75ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms'
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
    decelerate: 'cubic-bezier(0.0, 0, 0.2, 1)'
  }
} as const;

const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500
} as const;

const lightSemantic = {
  background: neutral[25],
  surface: '#ffffff',
  surfaceSubtle: neutral[50],
  surfaceStrong: neutral[200],
  textPrimary: neutral[900],
  textSecondary: neutral[600],
  textOnPrimary: '#ffffff',
  border: neutral[200],
  focusRing: primary[400],
  primary: primary[600],
  success: success[500],
  warning: warning[500],
  danger: danger[500]
} as const;

const darkSemantic = {
  background: neutral[950],
  surface: neutral[900],
  surfaceSubtle: neutral[800],
  surfaceStrong: neutral[700],
  textPrimary: neutral[25],
  textSecondary: neutral[300],
  textOnPrimary: '#ffffff',
  border: 'rgba(148, 163, 184, 0.4)',
  focusRing: primary[300],
  primary: primary[400],
  success: success[300],
  warning: warning[300],
  danger: danger[300]
} as const;

const baseTokens: DesignTokens = {
  color: {
    neutral,
    primary,
    success,
    warning,
    danger,
    semantic: lightSemantic
  },
  spacing,
  radius,
  shadow,
  typography,
  motion,
  zIndex
};

export const lightTheme: TokenTheme = {
  name: 'kanso-light',
  mode: 'light',
  tokens: {
    ...baseTokens,
    color: {
      ...baseTokens.color,
      semantic: lightSemantic
    }
  }
};

export const darkTheme: TokenTheme = {
  name: 'kanso-dark',
  mode: 'dark',
  tokens: {
    ...baseTokens,
    color: {
      ...baseTokens.color,
      semantic: darkSemantic
    }
  }
};

export const baseDesignTokens = baseTokens;

