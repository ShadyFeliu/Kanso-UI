import type { CSSProperties } from 'react';

import type {
  RadiusScaleKey,
  SemanticColorTokens,
  ShadowScaleKey,
  SpacingScaleKey
} from '@kanso-ui/tokens';
import { cssVar } from '@kanso-ui/tokens';

export type AtomicStyle = Record<string, string | number>;

type LayoutAlign = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
type LayoutJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type SemanticColorKey = keyof SemanticColorTokens;

type SemanticSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

type SpacingToken = SpacingScaleKey | SemanticSpacing;

export type AtomProps = {
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'grid';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: LayoutAlign;
  justify?: LayoutJustify;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingToken;
  p?: SpacingToken;
  px?: SpacingToken;
  py?: SpacingToken;
  pt?: SpacingToken;
  pr?: SpacingToken;
  pb?: SpacingToken;
  pl?: SpacingToken;
  m?: SpacingToken;
  mx?: SpacingToken;
  my?: SpacingToken;
  mt?: SpacingToken;
  mr?: SpacingToken;
  mb?: SpacingToken;
  ml?: SpacingToken;
  radius?: RadiusScaleKey;
  shadow?: ShadowScaleKey;
  bg?: SemanticColorKey;
  color?: SemanticColorKey;
  borderColor?: SemanticColorKey;
  borderWidth?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
};

const semanticSpacingMap: Record<SemanticSpacing, SpacingScaleKey> = {
  xs: '2',
  sm: '3',
  md: '4',
  lg: '6',
  xl: '7',
  '2xl': '9',
  '3xl': '12'
};

const resolveSpacingToken = (token?: SpacingToken): SpacingScaleKey | undefined => {
  if (!token) return undefined;
  if (token in semanticSpacingMap) {
    return semanticSpacingMap[token as SemanticSpacing];
  }
  return token as SpacingScaleKey;
};

const spacingToStyle = (style: AtomicStyle, token: SpacingToken | undefined, properties: string[]) => {
  const resolved = resolveSpacingToken(token);
  if (!resolved) return;
  const value = cssVar(['spacing', resolved]);
  properties.forEach((property) => {
    style[property] = value;
  });
};

const semanticColorToStyle = (
  style: AtomicStyle,
  token: SemanticColorKey | undefined,
  property: string
) => {
  if (!token) return;
  style[property] = cssVar(['color', 'semantic', token]);
};

export const atoms = (props: AtomProps = {}): AtomicStyle => {
  const style: AtomicStyle = {};

  if (props.display) {
    style.display = props.display;
  }

  if (props.direction) {
    style.flexDirection = props.direction;
  }

  if (props.align) {
    style.alignItems = props.align;
  }

  if (props.justify) {
    style.justifyContent = props.justify;
  }

  if (props.wrap) {
    style.flexWrap = props.wrap;
  }

  spacingToStyle(style, props.gap, ['gap']);

  spacingToStyle(style, props.p, ['padding']);
  spacingToStyle(style, props.px, ['paddingLeft', 'paddingRight']);
  spacingToStyle(style, props.py, ['paddingTop', 'paddingBottom']);
  spacingToStyle(style, props.pt, ['paddingTop']);
  spacingToStyle(style, props.pr, ['paddingRight']);
  spacingToStyle(style, props.pb, ['paddingBottom']);
  spacingToStyle(style, props.pl, ['paddingLeft']);

  spacingToStyle(style, props.m, ['margin']);
  spacingToStyle(style, props.mx, ['marginLeft', 'marginRight']);
  spacingToStyle(style, props.my, ['marginTop', 'marginBottom']);
  spacingToStyle(style, props.mt, ['marginTop']);
  spacingToStyle(style, props.mr, ['marginRight']);
  spacingToStyle(style, props.mb, ['marginBottom']);
  spacingToStyle(style, props.ml, ['marginLeft']);

  if (props.radius) {
    style.borderRadius = cssVar(['radius', props.radius]);
  }

  if (props.shadow) {
    style.boxShadow = cssVar(['shadow', props.shadow]);
  }

  semanticColorToStyle(style, props.bg, 'background');
  semanticColorToStyle(style, props.color, 'color');
  semanticColorToStyle(style, props.borderColor, 'borderColor');

  if (props.borderWidth) {
    style.borderWidth = props.borderWidth;
    style.borderStyle = style.borderStyle ?? 'solid';
  }

  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.minWidth) {
    style.minWidth = props.minWidth;
  }
  if (props.maxWidth) {
    style.maxWidth = props.maxWidth;
  }
  if (props.minHeight) {
    style.minHeight = props.minHeight;
  }
  if (props.maxHeight) {
    style.maxHeight = props.maxHeight;
  }

  return style;
};

type MergeableStyle = Record<string, unknown> | CSSProperties;

export const mergeAtoms = (
  ...styles: Array<MergeableStyle | undefined>
): Record<string, unknown> => Object.assign({}, ...styles.filter(Boolean));

