export type ColorScaleKey =
  | 10
  | 25
  | 50
  | 75
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950
  | 975;

export type ColorScale = Record<ColorScaleKey, string>;

export type SemanticColorTokens = {
  background: string;
  surface: string;
  surfaceSubtle: string;
  surfaceStrong: string;
  textPrimary: string;
  textSecondary: string;
  textOnPrimary: string;
  border: string;
  focusRing: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
};

export type SpacingScaleKey =
  | '0'
  | 'px'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '12'
  | '14'
  | '16'
  | '18'
  | '20'
  | '24';

export type SpacingScale = Record<SpacingScaleKey, string>;

export type RadiusScaleKey = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type RadiusScale = Record<RadiusScaleKey, string>;

export type ShadowScaleKey = 'none' | 'xs' | 'sm' | 'md' | 'lg';
export type ShadowScale = Record<ShadowScaleKey, string>;

export type FontSizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
export type FontWeightKey = 'regular' | 'medium' | 'semibold' | 'bold';
export type LineHeightKey = 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

export type TypographyTokens = {
  fontFamily: string;
  sizes: Record<FontSizeKey, string>;
  weights: Record<FontWeightKey, number>;
  lineHeights: Record<LineHeightKey, string>;
  letterSpacings: Record<FontSizeKey, string>;
};

export type MotionDurationKey = 'micro' | 'instant' | 'fast' | 'normal' | 'slow' | 'lazy';
export type MotionEasingKey = 'standard' | 'emphasized' | 'decelerate' | 'elastic';

export type MotionTokens = {
  duration: Record<MotionDurationKey, string>;
  easing: Record<MotionEasingKey, string>;
};

export type ZIndexKey =
  | 'hide'
  | 'base'
  | 'dropdown'
  | 'sticky'
  | 'overlay'
  | 'modal'
  | 'popover'
  | 'toast';

export type ZIndexTokens = Record<ZIndexKey, number>;

export type DesignTokens = {
  color: {
    neutral: ColorScale;
    primary: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    danger: ColorScale;
    semantic: SemanticColorTokens;
  };
  spacing: SpacingScale;
  radius: RadiusScale;
  shadow: ShadowScale;
  typography: TypographyTokens;
  motion: MotionTokens;
  zIndex: ZIndexTokens;
};

export type ThemeMode = 'light' | 'dark';

export type DesignTokenOverrides = Partial<{
  [K in keyof DesignTokens]: Partial<DesignTokens[K]>;
}>;

export type TokenTheme = {
  name: string;
  mode: ThemeMode;
  tokens: DesignTokens;
};

export type ThemeOverrides = Partial<{
  tokens: DesignTokenOverrides;
  semantic: Partial<SemanticColorTokens>;
}>;

