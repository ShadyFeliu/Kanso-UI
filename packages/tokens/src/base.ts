import { DesignTokens, TokenTheme } from './types';

const neutral = {
  10: '#fcfcfd',
  25: '#f7f8fb',
  50: '#f0f2f8',
  75: '#e7eaf3',
  100: '#dee2ec',
  200: '#c9cfdd',
  300: '#b2bacd',
  400: '#919bb3',
  500: '#707894',
  600: '#565e74',
  700: '#41485b',
  800: '#2d3342',
  900: '#1f2430',
  950: '#141722',
  975: '#0c0e16'
} as const;

const primary = {
  10: '#f7f7ff',
  25: '#eff1ff',
  50: '#e0e5ff',
  75: '#cbd4ff',
  100: '#b4c2ff',
  200: '#95a9ff',
  300: '#788fff',
  400: '#5f73f4',
  500: '#4959e6',
  600: '#3844c7',
  700: '#2d38a2',
  800: '#242e83',
  900: '#1e2568',
  950: '#151a4b',
  975: '#10133a'
} as const;

const success = {
  10: '#f0fdf7',
  25: '#e3fcec',
  50: '#d1fadf',
  75: '#b7f4cc',
  100: '#9fedba',
  200: '#78e29c',
  300: '#4ed47b',
  400: '#2abb62',
  500: '#1c9c4f',
  600: '#187e41',
  700: '#156636',
  800: '#134f2c',
  900: '#0f3a21',
  950: '#0a2917',
  975: '#05190d'
} as const;

const warning = {
  10: '#fffaf1',
  25: '#fff4df',
  50: '#ffe7ba',
  75: '#ffd993',
  100: '#ffcc6d',
  200: '#fdb347',
  300: '#f29324',
  400: '#dd7712',
  500: '#bd5e0c',
  600: '#974a0e',
  700: '#7a3b11',
  800: '#5f2d10',
  900: '#3f1f0a',
  950: '#2b1606',
  975: '#210f04'
} as const;

const danger = {
  10: '#fff6f6',
  25: '#ffe7e7',
  50: '#ffcfcf',
  75: '#ffb4b4',
  100: '#ff9a9a',
  200: '#ff7a7a',
  300: '#f75b5b',
  400: '#e23f3f',
  500: '#c82828',
  600: '#a12121',
  700: '#821c1c',
  800: '#661717',
  900: '#401010',
  950: '#2e0b0b',
  975: '#1e0606'
} as const;

const typography = {
  fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  sizes: {
    xs: 'clamp(0.72rem, 0.7rem + 0.2vw, 0.78rem)',
    sm: 'clamp(0.82rem, 0.8rem + 0.2vw, 0.9rem)',
    md: 'clamp(0.98rem, 0.95rem + 0.25vw, 1.05rem)',
    lg: 'clamp(1.12rem, 1.05rem + 0.3vw, 1.2rem)',
    xl: 'clamp(1.26rem, 1.2rem + 0.4vw, 1.4rem)',
    '2xl': 'clamp(1.5rem, 1.4rem + 0.5vw, 1.7rem)',
    '3xl': 'clamp(1.85rem, 1.6rem + 0.8vw, 2.1rem)'
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    tight: '1.18',
    snug: '1.32',
    normal: '1.48',
    relaxed: '1.68',
    loose: '1.9'
  },
  letterSpacings: {
    xs: '0.02em',
    sm: '0.005em',
    md: '-0.005em',
    lg: '-0.01em',
    xl: '-0.015em',
    '2xl': '-0.02em',
    '3xl': '-0.022em'
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
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '18': '4.5rem',
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
    micro: '50ms',
    instant: '90ms',
    fast: '150ms',
    normal: '220ms',
    slow: '320ms',
    lazy: '500ms'
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    emphasized: 'cubic-bezier(0.3, 0, 0, 1)',
    decelerate: 'cubic-bezier(0.0, 0, 0.2, 1)',
    elastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
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
  surfaceStrong: neutral[100],
  textPrimary: neutral[900],
  textSecondary: neutral[600],
  textOnPrimary: '#ffffff',
  border: neutral[200],
  focusRing: primary[400],
  primary: primary[500],
  success: success[500],
  warning: warning[400],
  danger: danger[500]
} as const;

const darkSemantic = {
  background: neutral[975],
  surface: neutral[950],
  surfaceSubtle: 'rgba(36, 41, 54, 0.6)',
  surfaceStrong: neutral[800],
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

